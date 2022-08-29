import React from "react";
import { motion } from "framer-motion";
import { Box, Center, Flex, Heading, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Typed from "react-typed";
import Wave from "react-wavify";
import { LIGHT_BLUE } from "../utils";

const meDescriptors = [
  "a software developer.",
  "an avid public speaker.",
  "sleepy.",
  "pretty bad at chess.",
];

// TODO
// - Scroll down chevron 
// - Links to socials beneath avatar

const Hero = () => {
  return (
    <Stack
      alignItems="center"
      height="100vh"
      backgroundColor="white"
    >
      <Flex height="60%" alignItems="center">
        <Box paddingLeft="10vw">
          <motion.header
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 40, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          >
            <Heading fontSize="8xl">Hey! I'm Victor</Heading>
            <Heading fontSize="4xl">
              I am {" "}
              <Typed
                strings={meDescriptors}
                typeSpeed={40}
                backSpeed={50}
                loop
                startDelay={700}
              />
            </Heading>
          </motion.header>
        </Box>
        <Center width="50vw" marginTop="10vh">
          <Image src="/images/itsame.jpg" borderRadius="full" boxSize="md" />
        </Center>
      </Flex>
      <Flex height="40%" width="100%" alignItems="flex-end">
      <Wave fill={LIGHT_BLUE}
        paused={false}
        options={{
          height: 20,
          amplitude: 15,
          speed: 0.4,
          points: 4
        }}/>
      </Flex>
    </Stack>
  );
};

export default Hero;
