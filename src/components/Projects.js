import React from "react";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { motion, LayoutGroup } from "framer-motion";
import TextFromSide from "./animateWrappers/TextFromSide";
import { MediaLink } from "./MediaBox";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const techColors = {
  TypeScript: "#0C2E35",
  React: "#599B99",
  "React Native": "#599B99",
  SQLite: "#6299FA",
  Python: "#203223",
  JavaScript: "#F4D991",
  Firebase: "#AB5249",
  MongoDB: "#7CAF8F",
  GraphQL: "#4E493E",
  "Node.js": "#7EB06C",
  "Ant Design": "#A47439",
  "Next.js": "#3D3B3D",
};

const projectList = [
  {
    name: "Rowan House Course Platform",
    date: "May 2022 - Present",
    descriptionPoints: [
      "Building the course learning platform for Rowan House Society, an emergency shelter based in Southern Ontario",
      "Developed several course components such as headings and videos to be used in lessons seen by over 1,400 students through their preventative education program",
      "Implemented progress tracking in modules so students can keep track of where they are in lessons",
    ],
    githubLink: "https://github.com/uwblueprint/rowan-house",
    technologies: ["React", "TypeScript", "Node.js", "GraphQL", "MongoDB"],
  },
  {
    name: "CodeyBot",
    date: "Jan 2022 - Present",
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
    date: "May 2022 - May 2022",
    descriptionPoints: [
      "Built a Discord bot using Python that analyzes the sentiment of messages sent in Discord servers using Cloud Natural Language API",
      "Developed a web app using the MERN stack to view previous messages analyzed on the Discord bot and the sentiments attached to them",
    ],
    githubLink: "https://github.com/ansonjwhe/MoodMSG",
    technologies: [
      "Python",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Discord.js",
    ],
  },
  {
    name: "WATonomous Status Page",
    date: "Mar 2022 - Apr 2022",
    descriptionPoints: [
      "Worked with 3 other developers in implementing a real-time status page for WATonomous' server cluster, UWaterloo's autonomous vehicle team",
      "Added responsive modals that contain dynamically generated instructions to access all our available machines used by over 70 members",
    ],
    githubLink: "https://github.com/WATonomous/status",
    technologies: ["React", "Next.js"],
  },
  {
    name: "ohmi",
    date: "Jan 2021 - Jan 2021",
    descriptionPoints: [
      "Created a web app that allows users to synchronously send personalized favours to their friends",
      "Authenticated and stored user data using Firebase so users’ favours can be tracked and updated in real time",
    ],
    githubLink: "https://github.com/smilesthesad/ohmi",
    technologies: ["React", "Firebase", "Ant Design"],
  },
];

const Project = ({
  name,
  date,
  descriptionPoints,
  githubLink,
  technologies,
}) => {
  return (
    <Box
      as={motion.div}
      borderRadius="2%"
      margin="1vw"
      padding="2vw"
      backgroundColor="rgba(255,255,255,0.8)"
      whileHover={{
        scale: 1.05,
      }}
    >
      <Box
        float="right"
        as={motion.div}
        whileHover={{
          rotate: 10,
        }}
      >
        <MediaLink link={githubLink}>{faGithub}</MediaLink>
      </Box>
      <Heading size="lg">{name}</Heading>
      <Heading color="#365C7E" size="md" marginBottom="1.75vw">
        {date}
      </Heading>
      <Flex flexDirection="row" justifyContent="space-evenly"></Flex>
      {descriptionPoints.map((point) => {
        return <Text fontSize="lg">&bull; {point}</Text>;
      })}
      <Box marginTop="1vw">
        {technologies &&
          technologies.map((tech) => {
            const color = tech in techColors ? techColors[tech] : "black";
            return (
              <Tag backgroundColor={color} size="lg" margin="2px">
                <TagLabel color="white" as="b">
                  {tech}
                </TagLabel>
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
        <Heading fontSize="6xl" padding="0 0 5vw 6vw">
          Projects
        </Heading>
      </TextFromSide>
      <LayoutGroup>
        <SimpleGrid columns={[1, 1, 2, 2, 3]} margin="1vw 5vw">
          {projectList.map((project) => {
            return <Project {...project} />;
          })}
        </SimpleGrid>
      </LayoutGroup>
    </Box>
  );
};
