import React from "react";
import { Container } from "@chakra-ui/core";
import { useUser } from "services/firebase/useUser";
import { useFireAuth } from "../hooks";
import { ChatRoom } from "../components/ChatRoom";
import { SignIn } from "../components/SignIn";
import * as firebase from "firebase/app";

import initFirebase from "services/firebase/initFirebase";
initFirebase();

function App() {
  const auth = firebase.auth();
  const { user } = useUser();
  const { signIn } = useFireAuth(auth);
  if (!user) {
    return <SignIn onSignIn={signIn} />;
  }
  return (
    <Container maxW="lg" py="1em">
      <ChatRoom />
    </Container>
  );
}

export default App;
