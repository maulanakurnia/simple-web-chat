import React from "react";
import { Box, Link, Flex, Text, IconButton } from "@chakra-ui/core";
import { footerSocial } from "data/footerSocial";

export const Footer = () => (
  <>
    <Box
      as="footer"
      h="40px"
      mt="2em"
      pb="3em"
      position="relative"
      textAlign="center"
    >
      <Text fontSize="sm" color="gray.500">
        build with{" "}
        <Link color="#2e7ad1" href="https://reactjs.org/" isExternal>
          ReactJS
        </Link>{" "}
        and{" "}
        <Link color="#2e7ad1" href="https://chakra-ui.com/" isExternal>
          ChakraUI
        </Link>
      </Text>
      <Flex justifyContent={["center", ""]} mb="10px" mt={["10px", "0"]}>
        {footerSocial.map((data, index) => (
          <Link
            display="inline-block"
            href={data.url}
            isExternal
            mx="5px"
            key={index}
          >
            <IconButton
              aria-label="social icon"
              borderRadius="50%"
              color="gray.500"
              icon={data.icon}
              size="md"
              variant="ghost"
            />
          </Link>
        ))}
      </Flex>
    </Box>
  </>
);

export default Footer;
