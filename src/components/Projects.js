import React from "react";
import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import {motion} from "framer-motion"
import { DARK_BLUE } from "../utils";
import HeadingFromSide from "./HeadingFromSide";

const projectList = [
  {
    name: "CodeyBot",
    date: "May 2022 - Curr",
    descriptionPoints: ["test"],
    githubLink: ``,
    devpostLink: ``,
  },
  {
    name: "Rowan House Course Platform",
    date: "May 2022 - Curr",
    descriptionPoints: ["test"],
    githubLink: ``,
    devpostLink: ``,
  },
  {
    name: "Fread",
    date: "May 2022 - Curr",
    descriptionPoints: ["test"],
    githubLink: ``,
    devposLink: ``,
  },
  {
    name: "MoodMSG",
    date: "May 2022 - Curr",
    descriptionPoints: ["test"],
    githubLink: ``,
    devpostLink: ``,
  },
  {
    name: "ohmi",
    date: "May 2022 - Curr",
    descriptionPoints: ["test"],
    githubLink: ``,
    devpostLink: "test",
  },
  {
    name: "WATonomous status page",
    date: "May 2022 - Curr",
    descriptionPoints: ["test"],
    githubLink: ``,
  },
];

const Project = ({ name, date, descriptionPoints, githubLink, devpostLink }) => {
  return (
    <motion.Box
    backgroundColor="rgba(0, 0, 0, 0.1)"
      margin="10px"
      padding="20px"
      borderRadius="10%"
      color="black"
      whileHover={{
        scale: 1.1
      }}
    >
      <Heading size="xl">{name}</Heading>
      <Heading size="lg">{date}</Heading>
      <Flex flexDirection="row">
        <Image src="images/githublogo.png" />
        {devpostLink && <Image src="images/devpostlogo.png" />}
      </Flex>
      {descriptionPoints.map(point => {
        return <Text fontSize="3xl">&bull; {point}</Text>

      })}
    </motion.Box>
  );
};
export const Projects = () => {
  return (
    <Box marginTop="8vw">
      <HeadingFromSide>
        <Heading fontSize="6xl" padding="0 0 5vw 4vw">
          Work Experience
        </Heading>
      </HeadingFromSide>
      <SimpleGrid columns={[1, 2, 3]}>
        {projectList.map((project) => {
          return <Project {...project} />;
        })}
      </SimpleGrid>
    </Box>
  );
};
