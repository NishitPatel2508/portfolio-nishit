import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <section id="footer">
      <Container className="mb-5">
        <Row>
          <Col md={12}>
            {/* <p className="fs-5 text-white">
              I'm Nishit Patel, MERN Stack Developer based in India I am fresher
              with the strong foundation in MERN.
            </p> */}
          </Col>
        </Row>
        <hr className="text-white" />
        <Row className="mt-3 text-white fs-5 mb-5">
          <Col md={3} className="d-flex justify-content-center ">
            <p>@2024 Nishit Patel. All rights</p>
          </Col>
          <Col md={6} className="d-flex justify-content-center gap-4">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
          </Col>
          <Col md={3} className="d-flex justify-content-center gap-4 ">
            <a
              href="https://www.linkedin.com/in/nishit-patel-6650b1188/"
              className="fs-5"
              style={{ color: "white", textDecoration: "none" }}
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/NishitPatel2508/"
              className="fs-5"
              style={{ color: "white", textDecoration: "none" }}
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/nishit_patel_25_08/"
              className="fs-5"
              style={{ color: "white", textDecoration: "none" }}
              target="_blank"
            >
              <BsInstagram />
            </a>
            <a
              href="https://twitter.com/home"
              className="fs-5"
              style={{ color: "white", textDecoration: "none" }}
              target="_blank"
            >
              <FaXTwitter />
            </a>
            {/* <p>Terms of Services</p>
            <p>Connect with Me</p> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
