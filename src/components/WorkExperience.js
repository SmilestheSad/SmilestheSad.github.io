import { Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const workExperiences = [
  {
    title: "Software Developer",
    company: "Vendia",
    location: "Seattle, WA",
    description: "incoming :)",
    date: "Sep 2022 - Dec 2022",
    icon: "/images/1password.png",
  },
  {
    title: "Software Developer",
    company: "somm.ai",
    location: "Remote",
    description: "incoming :)",
    date: "Sep 2022 - Dec 2022",
    icon: "",
  },
  {
    title: "Full Stack Web Developer",
    company: "Tradable Bits",
    location: "Vancouver, BC",
    description:
      "collect data and analyze",
    date: "Jan 2022- Apr 2022",
    icon: "",
  },
  {
    title: "Software Developer",
    company: "1Password",
    location: "Toronto, ON",
    description: "make password work",
    date: "May - Aug 2021",
    icon: "",
  },
];

const TimelineElement = ({
  title,
  location,
  company,
  description,
  date,
  icon,
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      icon={icon}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
      <>
    <VerticalTimeline>
      {workExperiences.map((work) => {
        return <TimelineElement {...work} />;
      })}
    </VerticalTimeline>
      </>
  );
};

export default WorkExperience;
