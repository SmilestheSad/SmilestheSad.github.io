import "./App.css";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import React from "react";
import { Box, ChakraProvider, Heading } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Hero/>
      {/* <Projects/> */}
      <Box height="40vh">

      </Box>
    </ChakraProvider>
  );
}

export default App;
