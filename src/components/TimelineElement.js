import { Heading, Text } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const TimelineElement = ({ title, location, desc, src }) => {
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    src="/images/itsame.jpg"
  >
    <Heading fontSize="xl">{title}</Heading>
    <Heading as="i" fontSize="lg">
      {location}
      Seattle, WA
    </Heading>
    <Text>{desc}</Text>
  </VerticalTimelineElement>;
};

export default TimelineElement