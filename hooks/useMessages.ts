import moment from "moment"
import { useState } from "react";
import { useFireAuth } from "./useAuth";
import * as firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";

export type firebaseMessage = {
  id: string;
  text: string;
  uid: string;
  createdAt?: string | Date;
  photoUrl?: string;
  displayName?: string;
};

type useMessageResult = {
  messages: firebaseMessage[];
  onChangeFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitMessage: () => Promise<void>;
  currentFormValue: string;
};

export const useMessages = (): useMessageResult => {
  const [formValue, setFormValue] = useState("");
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt");
  const [messages] = useCollectionData(query, { idField: "id" });
  const { currentUser } = useFireAuth(firebase.auth());

  const onChangeFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = typeof e === "string" ? e : e.target.value;
    setFormValue(value);
  };

  const submitMessage = async () => {
    const uid = currentUser?.uid;
    const photoUrl = currentUser?.photoURL;
    const displayName = currentUser?.displayName;
    const datetime = moment().format();
    await messagesRef.add({
      displayName: displayName,
      text: formValue,
      createdAt: datetime,
      uid,
      photoUrl,
    });

    setFormValue("");
  };

  return {
    messages: messages as firebaseMessage[],
    onChangeFormValue: onChangeFormValue,
    submitMessage: submitMessage,
    currentFormValue: formValue,
  };
};

export default useMessages;
