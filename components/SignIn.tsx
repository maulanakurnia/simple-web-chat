import { Box, Button, Text } from "@chakra-ui/core";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import Footer from "./Footer";

type SignInProps = {
  onSignIn: () => void;
};

export const SignIn: React.FC<SignInProps> = ({ onSignIn }: SignInProps) => {
  return (
    <>
      <Box minH="85vh" display="flex" m="0 auto" position="relative">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          <Button onClick={onSignIn}>
            <Text as="span" mr="0.5em" alignItems="center">
              <FcGoogle />
            </Text>
            Sign In with Google
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
