import Moment from "react-moment";
import { useFireAuth } from "hooks";
import * as firebase from "firebase/app";
import { Box, Image, Text } from "@chakra-ui/core";
import { firebaseMessage } from "hooks/useMessages";

type ChatMessageProps = {
  message: firebaseMessage;
};

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
}: ChatMessageProps) => {
  const { text, uid, photoUrl, displayName, createdAt } = message;
  const currentUser = useFireAuth(firebase.auth());

  const messageClass =
    uid === currentUser.currentUser?.uid ? "sent" : "received";
  return (
    <Box display="flex" className={`${messageClass}`} mb="1em">
      <Image borderRadius="full" boxSize="40px" src={photoUrl} />
      <Box
        borderRadius="10px"
        bg="#fff"
        color="#000"
        minW="10em"
        p="0.5em"
        mx="1em"
        maxW="35em"
      >
        {uid !== currentUser.currentUser?.uid && (
          <Text as="span" fontWeight="700">
            {displayName}
          </Text>
        )}
        <Text>{text}</Text>
        <Box textAlign="end" fontSize="12px">
          <Moment className="datetime" format="HH:mm">
            {createdAt}
          </Moment>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatMessage;
