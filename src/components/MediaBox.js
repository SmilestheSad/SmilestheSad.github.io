import React from "react"
import {motion} from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFileLines
} from "@fortawesome/free-solid-svg-icons"
import { Flex, Link } from "@chakra-ui/react";


export const MediaLink = ({link, children}) => {
    return (
        <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        as={motion.a}
        whileHover={{
            translateY: -10
        }}
        >
          <FontAwesomeIcon icon={children} size="3x" />
        </Link>
    )
}
const Mediabox = () => {
  return (
    <Flex gap="1.5vw">
        <MediaLink link="https://www.linkedin.com/in/vzheng1">
            {faLinkedin}
        </MediaLink>
        <MediaLink link="https://github.com/SmilestheSad">
            {faGithub}
        </MediaLink>
        <MediaLink link="https://www.instagram.com/victorzheng231/">
            {faInstagram}
        </MediaLink>
        <MediaLink link="/resume.pdf">
            {faFileLines}
        </MediaLink>
    </Flex>
  );
}

export default Mediabox;