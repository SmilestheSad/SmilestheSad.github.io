import React from "react";
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
import { motion, LayoutGroup } from "framer-motion";
import TextFromSide from "./animateWrappers/TextFromSide";
import SlightRotateOnHover from "./animateWrappers/SlightRotateOnHover";

const techColors = {
  TypeScript: "#397EF9",
  React: "cyan",
  "React Native": "cyan",
  SQLite: "#6299FA",
  Python: "lightgreen",
  JavaScript: "yellow",
  Firebase: "#ffc847",
  MongoDB: "#47ff75",
  GraphQL: "#e535ab",
  "Node.js": "#52E683",
};

const projectList = [
  {
    name: "Rowan House Course Platform",
    date: "May 2022 - Curr",
    descriptionPoints: [
      "Building the course learning platform for Rowan House Society, an emergency shelter based in Southern Ontario",
      "Developed several course components such as headings and videos to be used in lessons seen by over 1400 students through their preventative education program",
      "Implemented progress tracking in modules so students can keep track of where they are in lessons",
    ],
    githubLink: "https://github.com/uwblueprint/rowan-house",
    technologies: ["React", "TypeScript", "Node.js", "GraphQL", "MongoDB"]
  },
  {
    name: "CodeyBot",
    date: "May 2022 - Curr",
    descriptionPoints: [
      "Working with 8 other developers to build CodeyBot, the Discord bot for the UWaterloo Computer Science Club of 2,300+ members",
      "Build user profile system using to connect like minded individuals and help people introduce themelves",
      "Automated year role assignments, allowing year and alumni specific mentioning in messages",
    ],
    githubLink: `https://github.com/uwcsc/codeybot`,
    technologies: ["TypeScript", "Node.js", "SQLite"],
  },
  {
    name: "Fread",
    date: "Apr 2021 - Aug 2021",
    descriptionPoints: [
      "Built a mobile app that helps individuals learn words they can't read when they're outside",
      "Implemented ability to scan words through your camera and analyze them through Google's Natural Language API",
      "Added ability to revisit previously scanned words through Firestore",
    ],
    githubLink: "https://github.com/smilesthesad/Fread",
    technologies: ["React Native", "Firebase"],
  },
  {
    name: "MoodMSG",
    date: "May 2022 - Curr",
    descriptionPoints: [
      "Built a Discord bot using Python that analyzes the sentiment of messages sent in Discord servers using Cloud Natural Language API",
      "Developed a web app using the MERN stack to view previous messages analyzed on the Discord bot and the sentiments attached to them",
    ],
    githubLink: "https://github.com/ansonjwhe/MoodMSG",
    technologies: ["Python", "React", "Node.js", "Express", "MongoDB", "Discord.js"]
  },
  {
    name: "WATonomous status page",
    date: "Mar 2022 - Apr 2022",
    descriptionPoints: [
      "Worked with 6 other developers in implementing a real-time status page for WATonomous' server cluster, UWaterloo's autonomous vehicle team",
      "Added responsive modals that contain dynamically generated instructions to access all our available machines",
    ],
    githubLink: "https://github.com/WATonomous/status",
    technologies: ["React", "Next.js"]
  },
  {
    name: "ohmi",
    date: "May 2022 - Curr",
    descriptionPoints: [
      "Created a web app that allows users to synchronously send personalized favours to their friends",
      "Authenticated and stored user data using Firebase so users’ favours can be tracked and updated in real time",
    ],
    githubLink: "https://github.com/smilesthesad/ohmi",
    technologies: ["React", "Firebase"]
  },
];

const Project = ({
  name,
  date,
  descriptionPoints,
  githubLink,
  devpostLink,
  technologies,
}) => {
  return (
    <Box
      as={motion.div}
      borderRadius="10%"
      margin="2vw"
      padding="2vw"
      backgroundColor="rgba(255,255,255,0.3)"
      whileHover={{
        scale: 1.1,
      }}
    >
      <Heading size="xl">{name}</Heading>
      <Heading size="lg">{date}</Heading>
      <Flex flexDirection="row" justifyContent="space-evenly">
        <SlightRotateOnHover>
          <Link href={githubLink} marginRight="0">
            <Image href={githubLink} src="images/githublogo.png" height="80%" />
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
        {technologies &&
          technologies.map((tech) => {
            const color = tech in techColors ? techColors[tech] : "white";
            return (
              <Tag backgroundColor={color} size="lg" margin="2px">
                <TagLabel>{tech}</TagLabel>
              </Tag>
            );
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
