import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/core";
import React from "react";
import { useMessages } from "hooks";
import ChatMessage from "./ChatMessages";
import { IoIosLogOut } from "react-icons/io";
import { RiGhostLine } from "react-icons/ri";
import { FiMoon, FiSun } from "react-icons/fi";
import { RiSendPlaneLine } from "react-icons/ri";
import { useUser } from "services/firebase/useUser";
export const ChatRoom = () => {
  const {
    messages,
    onChangeFormValue,
    submitMessage,
    currentFormValue,
  } = useMessages();
  const { logout } = useUser();
  const dummy = React.useRef<HTMLDivElement>(null);

  const onSubmitMesage = React.useCallback(() => {
    submitMessage();
    dummy?.current?.scrollIntoView({ behavior: "smooth" });
  }, [submitMessage]);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box w="100%" as="section">
      <Box
        as="header"
        bg={useColorModeValue("#ededed", "#2a2f32")}
        h="3em"
        minH="5vh"
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px="1em"
      >
        <Heading fontSize="15px">SIMPLE WEB CHAT</Heading>
        <Flex>
          <IconButton
            _hover={{ bg: "#edf2f72e" }}
            _focus={{ outline: "none", bg: "#edf2f72e" }}
            aria-label="toggle mode"
            display={["none", "flex"]}
            icon={
              colorMode === "light" ? (
                <FiSun fill="#000" color="#000" />
              ) : (
                <FiMoon fill="#fff" color="#fff" />
              )
            }
            onClick={toggleColorMode}
            size="sm"
            variant="ghost"
            mr="1em"
          />
          <IconButton
            _hover={{ bg: "#edf2f72e" }}
            _focus={{ outline: "none", bg: "#edf2f72e" }}
            p="0.5em"
            aria-label="Search database"
            onClick={() => logout()}
            icon={<IoIosLogOut color={useColorModeValue("#000", "#fff")} />}
            size="sm"
            variant="ghost"
          />
        </Flex>
      </Box>
      <Box
        as="main"
        minH="84vh"
        maxH="84vh"
        bg={useColorModeValue("#B7C5CF", "rgba(8,15,23,1)")}
        color="#fff"
        p="1em"
        overflowY="scroll"
      >
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <Box ref={dummy}></Box>
      </Box>
      <Box display="flex" bg={useColorModeValue("#ededed", "#2a2f32")} p="1em">
        <Button
          _focus={{ outline: "none", color: "#000", bg: "#edf2f72e" }}
          alignItems="center"
          boxSize="40px"
          borderRadius="full"
          bg="transparent"
          _hover={{ bg: "#edf2f72e" }}
          aria-label="Send Message"
          mr="1em"
        >
          <Text as="span" alignItems="center">
            <RiGhostLine />
          </Text>
        </Button>
        <Input
          w="100%"
          mr="1em"
          mt="0.1em"
          h="35px"
          bg={useColorModeValue("#06111d17", "#edf2f717")}
          px="1em"
          color={useColorModeValue("#000", "#aeaeae")}
          _hover={{ bg: useColorModeValue("06111d26", "#edf2f72e") }}
          _focus={{
            outline: "none",
            bg: useColorModeValue("06111d26", "#edf2f72e"),
          }}
          variant="filled"
          outline="none"
          borderColor="transparent"
          borderRadius="300px"
          placeholder="type a massage..."
          onChange={onChangeFormValue}
          value={currentFormValue}
        />
        <Button
          _focus={{ outline: "none" }}
          alignItems="center"
          boxSize="40px"
          borderRadius="full"
          bg="#edf2f72e"
          onClick={onSubmitMesage}
          aria-label="Send Message"
          disabled={currentFormValue === ""}
        >
          <Text as="span" alignItems="center">
            <RiSendPlaneLine />
          </Text>
        </Button>
      </Box>
    </Box>
  );
};
