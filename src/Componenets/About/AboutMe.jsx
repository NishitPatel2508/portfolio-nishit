import React, { useRef } from "react";
import "./AboutMe.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import profile_nishit from "../../assets/profile_nishit.jpeg";
import {
  useScroll,
  motion,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Reveal from "../Global/Animation/Reveal";
import SectionAnimationOnScroll from "../Global/Animation/SectionAnimationOnScroll";

const AboutMe = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["center end", "end center"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], ["50deg", "-18deg"]);

  return (
    <section
      id="about"
      className="d-flex justify-content-center align-items-center "
    >
      {/* <SectionAnimationOnScroll> */}
      {/* <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        initial={{
          opacity: 0.75,
        }}
        whileInView={{
          opacity: 1,
          scale: scrollYProgress,
          // opacity: scrollYProgress,
        }}
        viewport={{
          amount: "all",
        }}
      > */}
      <Container className="mb-5">
        <Stack gap={4}>
          <Row>
            <Col className="d-flex justify-content-center">
              <h1 className="about-title" style={{ color: "white" }}>
                About Me
              </h1>
            </Col>
          </Row>
          <Row className="mt-2 ">
            <Col lg={4} className="d-flex justify-content-center about-img">
              <AnimatePresence>
                <motion.div
                  ref={targetRef}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: [1, 1.5, 1.4] }}
                  transition={{ duration: 0.3 }}
                  whileInView={{ scale: 1 }}
                >
                  <img src={profile_nishit} className="about-left-img"></img>
                </motion.div>
              </AnimatePresence>
            </Col>
            <Col lg={8} className="home-text2 d-flex justify-content-start ">
              <SectionAnimationOnScroll>
                <Stack gap={3} className="p-3">
                  <Reveal>
                    <p>
                      I have strong foundation in MERN Stack development. I
                      believe in process as process is more important than
                      result.
                    </p>
                  </Reveal>
                  <Reveal>
                    <p>
                      My passion for MERN Stack development is not only
                      reflected in my extensive projects but also in the
                      enthusiasm and dedication I bring to each project.
                    </p>
                  </Reveal>
                </Stack>
              </SectionAnimationOnScroll>
            </Col>
          </Row>
        </Stack>
      </Container>
      {/* </SectionAnimationOnScroll> */}
    </section>
  );
};

export default AboutMe;
