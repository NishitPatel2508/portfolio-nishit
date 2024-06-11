import React from "react";
import "./AboutMe.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import profile_nishit from "../../assets/profile_nishit.jpeg";
const AboutMe = () => {
  return (
    <section
      id="about"
      className="d-flex justify-content-center align-items-center "
    >
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
              <img src={profile_nishit} className="about-left-img"></img>
            </Col>
            <Col lg={8} className="home-text2 d-flex justify-content-start ">
              <Stack gap={3} className="p-3">
                <p>
                  I have strong foundation in MERN Stack development. I believe
                  in process as process is more important than result.
                </p>
                <p>
                  My passion for MERN Stack development is not only reflected in
                  my extensive projects but also in the enthusiasm and
                  dedication I bring to each project..
                </p>
              </Stack>
            </Col>
          </Row>
        </Stack>
      </Container>
    </section>
  );
};

export default AboutMe;
