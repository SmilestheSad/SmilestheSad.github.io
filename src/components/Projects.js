import React, { useRef, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { Container, chakra } from "@chakra-ui/react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { DARK_BLUE } from "../utils";
import TextFromSide from "./animateWrappers/TextFromSide";
import SlightRotateOnHover from "./animateWrappers/SlightRotateOnHover";


const techColors = {
  "TypeScript": "#397EF9",
  "React": "cyan",
  "SQLite": "#6299FA",
  "Python": "lightgreen",
  "JavaScript": "yellow",
  "Node.js": "#52E683"
}

const projectList = [
  {
    name: "CodeyBot",
    date: "May 2022 - Curr",
    descriptionPoints: 
    ["Working with 8 other developers to build CodeyBot, the Discord bot for the UWaterloo Computer Science Club of 2,300+ members",
      "Build user profile system using to connect like minded individuals and help people introduce themelves",
     "Automated year role assignments, allowing year and alumni specific mentioning in messages"],
    githubLink: `https://github.com/uwcsc/codeybot`,
    technologies: ["TypeScript", "Node.js", "SQLite"]
  },
  {
    name: "Rowan House Course Platform",
    date: "May 2022 - Curr",
    descriptionPoints: ["Building the "],
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

const Project = ({
  name,
  date,
  descriptionPoints,
  githubLink,
  devpostLink,
  technologies
}) => {
  return (
    <Box
      as={motion.div}
      borderRadius="10%"
      margin="2vw"
      padding="2vw"
      backgroundColor="rgba(255,255,255,0.3)"
      whileHover={{
        scale: 1.1
      }}
    >
      <Heading size="xl">{name}</Heading>
      <Heading size="lg">{date}</Heading>
        <Flex flexDirection="row" justifyContent="space-evenly">
          <SlightRotateOnHover>
            <Link href={githubLink} marginRight="0">
              <Image
                href={githubLink}
                src="images/githublogo.png"
                height="80%"
              />
            </Link>
          </SlightRotateOnHover>
          {devpostLink && (
            <SlightRotateOnHover>
              <Link href={devpostLink} width="100%">
                <Image src="images/devpost.png" height="80%" />
              </Link>
            </SlightRotateOnHover>
          )}
        </Flex>
          {descriptionPoints.map((point) => {
            return <Text fontSize="2xl">&bull; {point}</Text>;
          })}
          <Box marginTop="1vw">

          {technologies && technologies.map((tech) => {
            const color = tech in techColors ? techColors[tech] : "grey";
            return <Tag backgroundColor={color} size="lg" margin="2px">
              <TagLabel>{tech}</TagLabel></Tag>;
          })}
          </Box>
    </Box>
  );
};
export const Projects = () => {
  return (
    <Box margin="8vw 2vw 0 2vw">
      <TextFromSide>
        <Heading fontSize="6xl" padding="0 0 5vw 4vw">
          Projects
        </Heading>
      </TextFromSide>
      <LayoutGroup>
        <SimpleGrid columns={[1, 2]}>
          {projectList.map((project) => {
            return <Project {...project} />;
          })}
        </SimpleGrid>
      </LayoutGroup>
    </Box>
  );
};
