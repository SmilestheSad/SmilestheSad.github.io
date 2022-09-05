import React from "react"
import {motion} from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Flex, Link } from "@chakra-ui/react";


const MediaLink = ({link, children}) => {
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
          <FontAwesomeIcon icon={children} size="4x" />
        </Link>
    )
}
const Mediabox = () => {
  return (
    <Flex gap="1vw">
        <MediaLink link="https://www.linkedin.com/in/vzheng1">
            {faLinkedin}
        </MediaLink>
        <MediaLink link="https://github.com/SmilestheSad">
            {faGithub}
        </MediaLink>
        <MediaLink link="https://www.instagram.com/victorzheng231/">
            {faInstagram}
        </MediaLink>
        <MediaLink link="https://www.facebook.com/victor.zheng.50">
            {faFacebook}
        </MediaLink>
    </Flex>
  );
}

export default Mediabox;