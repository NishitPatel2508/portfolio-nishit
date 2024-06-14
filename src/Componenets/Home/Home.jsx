import React from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import profile_nishit from "../../assets/profile_nishit.jpeg";
import Nishit_Resume from "../../Files/Nishit_Resume.pdf";
import { Element } from "react-scroll";
const Home = () => {
  // const btnStyle = {
  //   cursor: "pointer",
  //   padding: "12px 25px",
  //   borderRadius: "50px",
  //   background: "linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)",
  //   color: "white",
  //   fontSize: "1px",
  //   fontWeight: "500",
  //   border: "1px solid #DA7C25 ",
  //   textAlign: "center",
  // };
  // const btnResumeStyle = {
  //   cursor: "pointer",
  //   padding: "10px 25px",
  //   borderRadius: "50px",
  //   color: "white",
  //   fontSize: "17px",
  //   fontWeight: "500",
  //   border: "1px solid white",
  //   background: "transparent",
  //   textAlign: "center",
  // };
  return (
    // <Element name="home" className="element">
    <section
      id="home"
      // id="hero"
      className="d-flex justify-content-center align-items-center p-5"
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
              <h1 className="home-text">
                <span>I'm Nishit Patel,</span> MERN Stack Developer based in
                India
              </h1>
            </Col>
          </Row>
          <Row className="mt-2 d-flex">
            <Col className="home-text2 d-flex justify-content-center">
              <p>I am fresher with the strong foundation in MERN.</p>
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
                download="My_File.pdf"
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
