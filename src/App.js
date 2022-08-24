import "./App.css";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import React from "react";
import { motion } from "framer-motion";
import { Center, Heading } from "@chakra-ui/react";

const App = () => {
  return (
    <div class="App">
      <Hero/>
    </div>
  );
}

export default App;
