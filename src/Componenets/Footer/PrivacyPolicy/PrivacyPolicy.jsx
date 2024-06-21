import React from "react";
import "./PrivacyPolicy.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaHandPointRight } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <section id="privacypolicy">
      <Container className="mb-1 mt-5">
        <Row className="d-flex justify-content-center text-white">
          <Col xs={11} md={12} lg={12} className="mt-3  ">
            <Row>
              <Col className="d-flex justify-content-center ">
                <h1 className="privacypolicy-title" style={{ color: "white" }}>
                  Privacy Policy
                </h1>
              </Col>
            </Row>
            <Container className="mt-5 justify-center">
              <Row>
                <Col
                  xs={12}
                  md={12}
                  lg={12}
                  className="mt-3 d-flex justify-content-center "
                >
                  <div
                    style={{
                      fontSize: "18px",
                      color: "white",
                      fontWeight: "450",
                    }}
                    className="d-flex justify-center flex-col "
                  >
                    <div className="d-flex justify-start">
                      <span className="mt-1">
                        <FaHandPointRight />
                      </span>
                      <p className="ms-4">
                        I’m not going to copy-paste a long complicated privacy
                        policy.
                      </p>
                    </div>
                    <div className="d-flex justify-start">
                      <span className="mt-1">
                        <FaHandPointRight />
                      </span>
                      <p className="ms-4">
                        Here’s what you need to know: I highly respect your
                        privacy!
                      </p>
                    </div>
                    <div className="d-flex justify-start">
                      <span className="mt-1">
                        <FaHandPointRight />
                      </span>
                      <p className="ms-4">
                        This website does not share personal information with
                        any third parties.
                      </p>
                    </div>
                    <div className="d-flex justify-start">
                      <span className="mt-1">
                        <FaHandPointRight />
                      </span>
                      <p className="ms-4">
                        The only personal information I collect is what you give
                        me (such as your email address for messageing when you
                        send message.)
                      </p>
                    </div>
                    <div className="d-flex justify-start">
                      <span className="mt-1">
                        <FaHandPointRight />
                      </span>
                      <p className="ms-4">
                        I am not responsible for republished content from this
                        blog on other websites without my permission.
                      </p>
                    </div>
                    <div className="d-flex justify-start">
                      <span className="mt-1">
                        <FaHandPointRight />
                      </span>
                      <p className="ms-4">
                        Like most privacy policy, I reserve the right to
                        change/modify it anytime without notice (mainly because
                        I am NOT collecting the data that would allow me to
                        notify everyone).
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PrivacyPolicy;
