import React from "react";
import { motion, useSpring } from "framer-motion";

const SlightRotateOnHover = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1,
        rotate: 10
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlightRotateOnHover;
