import React, { useRef } from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import profile_nishit from "../../assets/profile_nishit.jpeg";
import Nishit_Resume from "../../Files/Nishit_Resume.pdf";
import { Element } from "react-scroll";
import { animate, motion, useInView } from "framer-motion";
import AnimatedText from "../Global/Animation/AnimatedText";

const Home = () => {
  const txt = "I'm Nishit Patel,MERN Stack Developer based in India";
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    // <Element name="home" className="element">
    <section
      id="home"
      // id="hero"
      className="hero d-flex justify-content-center align-items-center p-5"
    >
      <Container className="d-flex mt-5">
        <Stack gap={4}>
          <Row>
            <Col
              //   xs={12}
              //   lg={{ span: 1, offset: 5 }}
              className="d-flex justify-content-center"
            >
              <img src={profile_nishit} alt="" className="mainImg mt-4" />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col
              xs={12}
              md={12}
              lg={12}
              className="d-flex justify-content-center align-items-center"
            >
              <AnimatedText txt={txt} className="home-text" />
            </Col>
          </Row>
          <Row className="mt-2 d-flex">
            <Col className="home-text2 d-flex justify-content-center">
              <motion.div
                initial={{ x: 300, scale: 0.5, opacity: 0 }}
                animate={{ x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
              >
                I am fresher with the strong foundation in MERN.
              </motion.div>
            </Col>
          </Row>
          <Row className="mt-2 d-flex justify-content-center">
            <Col xs={12} md={12} lg={12} className="btnStyles gap-3">
              {/* <Stack direction="horizontal" gap={3}> */}

              <Button
                className="btnConnectStyle ps-3 pe-3 text-center"
                href="#contact"
              >
                <a style={{ textDecoration: "none", color: "white" }}>
                  Connect with me
                </a>
              </Button>

              <Button
                className="btnResumeStyle "
                href={Nishit_Resume}
                download="NishitPatelResume.pdf"
              >
                {/* My Resume */}
                {/* <Link to="/files/Nishit_Resume.pdf" target="_blank" download> */}{" "}
                <a style={{ textDecoration: "none", color: "white" }}>
                  My Resume
                </a>
                {/* </Link> */}
              </Button>
            </Col>
          </Row>
        </Stack>
      </Container>
    </section>
    // </Element>
  );
};

export default Home;
