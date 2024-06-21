import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaHandPointRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const handlePrivacyPolicy = () => {
    navigate("/privacypolicy");
  };
  const handleTermsOfServices = () => {
    navigate("/termsofservices");
  };
  return (
    <section id="footer">
      <Container className="mb-5">
        <Row className="text-white fs-5 ">
          <hr />
          <Col md={3} className="d-flex justify-content-center ">
            <p>@2024 Nishit Patel. All rights</p>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center gap-4 text-white"
          >
            <p onClick={handleTermsOfServices} style={{ cursor: "pointer" }}>
              Terms of Services
            </p>

            <p onClick={handlePrivacyPolicy} style={{ cursor: "pointer" }}>
              Privacy Policy
            </p>
          </Col>
          <Col md={3} className="d-flex justify-content-center gap-4 mb-4">
            <a
              href="https://www.linkedin.com/in/nishit-patel-6650b1188/"
              className="fs-5 "
              style={{ color: "white", textDecoration: "none" }}
              target="_blank"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/NishitPatel2508/"
              className="fs-5"
              style={{ color: "white", textDecoration: "none" }}
              target="_blank"
            >
              <FaGithub className="git" />
            </a>
            <a
              href="https://www.instagram.com/nishit_patel_25_08/"
              className="fs-5"
              style={{ color: "white", textDecoration: "none" }}
              target="_blank"
            >
              <BsInstagram className="insta" />
            </a>
            <a
              href="https://x.com/NishitPatel25"
              className="fs-5"
              style={{ color: "white", textDecoration: "none" }}
              target="_blank"
            >
              <FaXTwitter className="x" />
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
