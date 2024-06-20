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
const Footer = () => {
  return (
    <section id="footer">
      <Container className="mb-5 ">
        <Row className="d-flex justify-content-center">
          <Col xs={11} md={12} lg={12} className="mt-3  ">
            <Accordion
              defaultActiveKey="0"
              className="mb-3 "
              style={{ backgroundColor: "transparent" }}
              id="privacypolicy"
            >
              <Accordion.Item eventKey="1">
                <Accordion.Header>Privacy Policy</Accordion.Header>
                <Accordion.Body>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "black",
                      fontWeight: "450",
                    }}
                  >
                    <p>
                      <FaHandPointRight />
                      <span className="ms-3">
                        I’m not going to copy-paste a long complicated privacy
                        policy.
                      </span>
                    </p>
                    <p>
                      <FaHandPointRight />
                      <span className="ms-3">
                        Here’s what you need to know: I highly respect your
                        privacy!
                      </span>
                    </p>
                    <p>
                      <FaHandPointRight />
                      <span className="ms-3">
                        This website does not share personal information with
                        any third parties.
                      </span>
                    </p>
                    <p>
                      <FaHandPointRight />
                      <span className="ms-3">
                        The only personal information I collect is what you give
                        me (such as your email address for messageing when you
                        send message.)
                      </span>
                    </p>
                    <p>
                      <FaHandPointRight />
                      <span className="ms-3">
                        I am not responsible for republished content from this
                        blog on other websites without my permission.
                      </span>
                    </p>
                    <p>
                      <FaHandPointRight />
                      <span className="ms-3 ">
                        Like most privacy policy, I reserve the right to
                        change/modify it anytime without notice (mainly because
                        I am NOT collecting the data that would allow me to
                        notify everyone).
                      </span>
                    </p>
                  </span>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion
              defaultActiveKey="0"
              className="bg-transparent mb-3 "
              // style={{ background: "black" }}
              id="termsofservices"
            >
              <Accordion.Item eventKey="1">
                <Accordion.Header> Terms of Services</Accordion.Header>
                <Accordion.Body>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "black",
                      fontWeight: "450",
                    }}
                  >
                    <p>
                      <span className="">
                        These Terms of Service ("Terms") govern the provision of
                        freelance IT services by Nishit Patel to you. By
                        engaging I for any IT services, you agree to be bound by
                        these Terms.
                      </span>
                    </p>
                    <p>
                      <FaHandPointRight />
                      <span className="ms-3">
                        <b>Services:</b>
                        <p>
                          <b>Scope of Work:</b> I will provide IT services as
                          outlined in the project proposal or agreement, which
                          may include but is not limited to software
                          development, web development, IT consulting, and
                          technical support.
                        </p>
                        <p>
                          <b>Changes to Scope:</b> Any changes to the scope of
                          work must be agreed upon in writing by both parties.
                          Additional charges may apply for changes outside the
                          original scope.
                        </p>
                      </span>
                    </p>
                    <p>
                      <FaHandPointRight />
                      <span className="ms-3">
                        <b>Payment:</b>
                        <p>
                          <b>Rates and Fees: </b>
                          The Client agrees to pay me the fees specified in the
                          project proposal or agreement. Fees may be based on an
                          hourly rate or a fixed project fee.
                        </p>
                        <p>
                          <b>Invoicing and Payment Terms:</b> I will invoice the
                          Client according to the schedule specified in the
                          project agreement. Payment is due within 10 days of
                          the invoice date. Late payments may incur interest at
                          the rate of 2 per month.
                        </p>
                        <p>
                          <b>Expenses:</b> The Client agrees to reimburse the
                          Freelancer for any reasonable out-of-pocket expenses
                          incurred in connection with the services, provided
                          such expenses are pre-approved by the Client.
                        </p>
                      </span>
                    </p>
                    <p>
                      <FaHandPointRight />
                      <span className="ms-3">
                        <b>Confidentiality:</b>
                        <p>
                          <b>Confidential Information: </b>
                          Both parties agree to keep confidential all
                          information that is not publicly available and is
                          disclosed by one party to the other, whether orally or
                          in writing, and designated as confidential or that
                          reasonably should be understood to be confidential
                          given the nature of the information and the
                          circumstances of disclosure.
                        </p>
                        <p>
                          <b>Use of Confidential Information:</b> The receiving
                          party agrees to use the disclosed confidential
                          information solely for the purposes of performing the
                          services under this agreement and to take all
                          reasonable precautions to protect such information
                          from unauthorized disclosure.
                        </p>
                        <p>
                          <b>Expenses:</b> The Client agrees to reimburse the
                          Freelancer for any reasonable out-of-pocket expenses
                          incurred in connection with the services, provided
                          such expenses are pre-approved by the Client.
                        </p>
                      </span>
                    </p>
                  </span>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row className="text-white fs-5 ">
          <hr />
          <Col md={3} className="d-flex justify-content-center ">
            <p>@2024 Nishit Patel. All rights</p>
          </Col>
          <Col md={6} className="d-flex justify-content-center gap-4">
            <a
              href="#termsofservices"
              style={{ color: "white", textDecoration: "none" }}
            >
              <p>Terms of Services</p>
            </a>
            <a
              href="#privacypolicy"
              style={{ color: "white", textDecoration: "none" }}
            >
              <p>Privacy Policy</p>
            </a>
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
