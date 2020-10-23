import { useRouter } from 'next/router'
import * as firebase from 'firebase/app'
import initFirebase from './initFirebase'
import { useEffect, useState } from 'react'
import {
  removeUserCookie,
  setUserCookie,
  getUserFromCookie,
} from './userCookies'
import { mapUserData } from './mapUserData'

initFirebase()

const useUser = () => {
  const [user, setUser] = useState(undefined)
  const router = useRouter()
  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        router.push('/')
      })
      .catch((e) => {
        console.error(e)
      })
  }

  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date
    const cancelAuthListener = firebase.auth().onIdTokenChanged((user) => {
      if (user) {
        const userData = mapUserData(user)
        setUserCookie(userData)
        setUser(userData)
      } else {
        removeUserCookie()
        setUser(undefined)
      }
    })

    const userFromCookie = getUserFromCookie()
    if (!userFromCookie) {
      router.push('/')
      return
    }
    setUser(userFromCookie)

    return () => {
      cancelAuthListener()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { user, logout }
}

export { useUser }
