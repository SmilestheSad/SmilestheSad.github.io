import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TextFromSide from "./animateWrappers/TextFromSide";

const workExperiences = [
  {
    title: "Software Developer",
    company: "Vendia",
    location: "Seattle, WA",
    description: "incoming :)",
    date: "Sep 2022 - Dec 2022",
    icon: "/images/vendia.png",
  },
  {
    title: "Software Developer (contract part-time)",
    company: "somm.ai",
    location: "Remote",
    description: "incoming :)",
    date: "Sep 2022 - Dec 2022",
    icon: "/images/sommai.jpeg",
  },
  {
    title: "Full Stack Web Developer",
    company: "Tradable Bits",
    location: "Vancouver, BC",
    description: "collect data and analyze",
    date: "Jan 2022- Apr 2022",
    icon: "/images/tbits.png",
  },
  {
    title: "Software Developer",
    company: "1Password",
    location: "Toronto, ON",
    description: "make password work",
    date: "May - Aug 2021",
    icon: "/images/1password.png",
  },
];

const TimelineElement = ({
  title,
  location,
  company,
  description,
  date,
  icon,
  last = false,
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      icon={<Image src={icon} borderRadius="50%"/>}
      contentStyle={{ marginBottom: last ? "0" : "9vw" }}
      iconStyle={{ background: "white", color: "#fff" }}
    >
      <Heading fontSize="xl">{company}</Heading>
      <Heading fontSize="xl">{title}</Heading>
      <Heading as="i" fontSize="lg">
        {location}
      </Heading>
      <Text>{description}</Text>
    </VerticalTimelineElement>
  );
};

const WorkExperience = () => {
  return (
    <Box>
      <TextFromSide>
        <Heading fontSize="6xl" padding="0 0 5vw 4vw">
          Work Experience
        </Heading>
      </TextFromSide>
      <VerticalTimeline>
        {workExperiences.map((work, idx) => {
          const last = idx === workExperiences.length - 1;
          return <TimelineElement last={last} {...work} />;
        })}
      </VerticalTimeline>
    </Box>
  );
};

export default WorkExperience;
