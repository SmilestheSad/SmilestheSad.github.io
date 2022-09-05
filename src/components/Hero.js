import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Center,
  Flex,
  Heading,
  useMediaQuery,
  Stack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Typed from "react-typed";
import Wave from "react-wavify";
import { LIGHT_BLUE } from "../utils";
import Mediabox from "./MediaBox";

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
  const [isLargerThan1280] = useMediaQuery("(min-width: 720px)");

  if (isLargerThan1280) {
    return (
    <Stack alignItems="center" height="100vh" backgroundColor="white" >
      <Flex height="60%" alignItems="center" justifyContent="center">
        <Box paddingLeft="10vw" width="40vw">
          <motion.header
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 85, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          >
            <Heading fontSize="7xl">Hey! I'm Victor</Heading>
            <Heading fontSize="4xl" marginBottom="2vw">
              I am{" "}
              <Typed
                strings={meDescriptors}
                typeSpeed={40}
                backSpeed={50}
                loop
                startDelay={700}
              />
            </Heading>
            <Mediabox />
          </motion.header>
        </Box>
        <Center width="60vw" marginTop="10vh">
          <Image width="60vw" marginTop="10vh" src="/images/itsame.jpg" borderRadius="full" boxSize="md" />
        </Center>
      </Flex>
      <Flex height="40%" width="100%" alignItems="flex-end">
    <Wave
      fill={LIGHT_BLUE}
      paused={false}
      options={{
        height: 20,
        amplitude: 10,
        speed: 0.4,
        points: 4,
      }}
    />
  </Flex>
      </Stack>
    );
  }
  return (
    <Stack alignItems="center" height="100vh" backgroundColor="white">
    <Flex height="60%" alignItems="center" flexDirection="column">
      <Center width="80vw" marginTop="2vh">
        <Image src="/images/itsame.jpg" borderRadius="100%" boxSize="sm" />
      </Center>
      <Box>
        <motion.header
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 35, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <Heading fontSize="5xl" textAlign="center">Hey! I'm Victor</Heading>
          <Center>
          <Heading fontSize="3xl" marginBottom="0.5vh">
            I am{" "}
            <Typed
              strings={meDescriptors}
              typeSpeed={40}
              backSpeed={50}
              loop
              startDelay={700}
            />
          </Heading>
          </Center>
          <Center marginTop="2vw">
          <Mediabox />

          </Center>
        </motion.header>
      </Box>
    </Flex>
    <Flex height="40%" width="100%" alignItems="flex-end">
    <Wave
      fill={LIGHT_BLUE}
      paused={false}
      options={{
        height: 20,
        amplitude: 4,
        speed: 0.4,
        points: 4,
      }}
    />
  </Flex>
  </Stack>

  );
};

export default Hero;
