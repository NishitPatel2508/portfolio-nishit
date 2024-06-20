import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const AnimatedText = ({ txt, el: Wrapper = "p", className }) => {
  const txtArray = Array.isArray(txt) ? txt : [txt];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <Wrapper className={className}>
      <span className="sr-only underline">{txt}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        // animate="visible"
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {/* {txtArray.map} */}
        {txt.split("").map((char) => (
          <motion.span
            // className="inline-block"
            variants={defaultAnimation}
          >
            {char}
          </motion.span>
        ))}{" "}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
