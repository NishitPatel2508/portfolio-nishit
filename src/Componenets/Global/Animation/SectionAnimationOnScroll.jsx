import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const SectionAnimationOnScroll = ({ children }) => {
  // Framer Motion
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1.05"],
  });
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
        // width: "100%",
      }}
      initial={{
        opacity: 1,
      }}
      whileInView={{
        opacity: 1,
        scale: scrollYProgress,

        // opacity: scrollYProgress,
      }}
      viewport={{
        amount: "all",
      }}
    >
      {" "}
      {children}
    </motion.div>
  );
};

export default SectionAnimationOnScroll;
