import "./App.css";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import WorkExperience from "./components/WorkExperience";

const App = () => {
  return (
    <ChakraProvider>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <Hero />
      {/* <Projects/> */}
      <Box height="40vh">
        <WorkExperience />
        <Projects />
      </Box>
    </ChakraProvider>
  );
};

export default App;
