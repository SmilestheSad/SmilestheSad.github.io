import React from "react";
import { motion } from "framer-motion";
import { Center, Heading } from "@chakra-ui/react";
import Wave from "react-wavify";
import { LIGHT_BLUE } from "../utils";

const Hero = () => {
  return (
    <Center height="100vh" bg="white">
      <motion.header
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        transition={{ delay: 0.75, type: "spring", stiffness: 100 }}
      >
        <Heading fontSize="xl">Hey! I'm Victor</Heading>
        <Heading fontsize="xl">
          I'm a second year student studying Computer Science
        </Heading>
        </motion.header>
      <Wave
        fill={LIGHT_BLUE}
        paused={false}
        options={{
          height: 10,
          amplitude: 30,
          speed: 0.2,
          points: 4
        }}>
        </Wave>
    </Center>
  );
};

export default Hero;
