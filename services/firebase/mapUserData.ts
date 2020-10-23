export const mapUserData = (user) => {
  const { uid, email, xa, ya, displayName, photoURL } = user
  return {
    id: uid,
    displayName,
    photoURL,
    email,
    token: xa || ya,
  }
}
