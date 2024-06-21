import React from "react";
import "./TermsOfServices.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaHandPointRight } from "react-icons/fa";
const TermsOfServices = () => {
  return (
    <section id="termsofservices">
      <Container className="mb-1 mt-5">
        <Row className="d-flex justify-content-center text-white">
          <Col xs={11} md={12} lg={12} className="mt-3  ">
            <Row>
              <Col className="d-flex justify-content-center ">
                <h1
                  className="termsofservices-title"
                  style={{ color: "white" }}
                >
                  Terms of Services
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
                        These Terms of Service ("Terms") govern the provision of
                        freelance IT services by Nishit Patel to you. By
                        engaging I for any IT services, you agree to be bound by
                        these Terms.
                      </p>
                    </div>
                    <div className="d-flex justify-start">
                      <span className="mt-1">
                        <FaHandPointRight />
                      </span>
                      <p className="ms-4">
                        <b className="heading">Services:</b>
                        <p>
                          <a className="subheading">Scope of Work:</a> I will
                          provide IT services as outlined in the project
                          proposal or agreement, which may include but is not
                          limited to software development, web development, IT
                          consulting, and technical support.
                        </p>
                        <p>
                          <a className="subheading">Changes to Scope:</a> Any
                          changes to the scope of work must be agreed upon in
                          writing by both parties. Additional charges may apply
                          for changes outside the original scope.
                        </p>
                      </p>
                    </div>
                    <div className="d-flex justify-start">
                      <span className="mt-1">
                        <FaHandPointRight />
                      </span>
                      <p className="ms-4">
                        <b className="heading">Payment:</b>
                        <p>
                          <a className="subheading">Rates and Fees: </a>
                          The Client agrees to pay me the fees specified in the
                          project proposal or agreement. Fees may be based on an
                          hourly rate or a fixed project fee.
                        </p>
                        <p>
                          <a className="subheading">
                            Invoicing and Payment Terms:
                          </a>{" "}
                          I will invoice the Client according to the schedule
                          specified in the project agreement. Payment is due
                          within 10 days of the invoice date. Late payments may
                          incur interest at the rate of 2 per month.
                        </p>
                        <p>
                          <a className="subheading">Expenses:</a> The Client
                          agrees to reimburse the Freelancer for any reasonable
                          out-of-pocket expenses incurred in connection with the
                          services, provided such expenses are pre-approved by
                          the Client.
                        </p>
                      </p>
                    </div>
                    <div className="d-flex justify-start">
                      <span className="mt-1">
                        <FaHandPointRight />
                      </span>
                      <p className="ms-4">
                        <b className="heading">Confidentiality:</b>
                        <p>
                          <a className="subheading">
                            Confidential Information:{" "}
                          </a>
                          Both parties agree to keep confidential all
                          information that is not publicly available and is
                          disclosed by one party to the other, whether orally or
                          in writing, and designated as confidential or that
                          reasonably should be understood to be confidential
                          given the nature of the information and the
                          circumstances of disclosure.
                        </p>
                        <p>
                          <a className="subheading">
                            Use of Confidential Information:
                          </a>{" "}
                          The receiving party agrees to use the disclosed
                          confidential information solely for the purposes of
                          performing the services under this agreement and to
                          take all reasonable precautions to protect such
                          information from unauthorized disclosure.
                        </p>
                        <p>
                          <a className="subheading">Expenses:</a> The Client
                          agrees to reimburse the Freelancer for any reasonable
                          out-of-pocket expenses incurred in connection with the
                          services, provided such expenses are pre-approved by
                          the Client.
                        </p>
                      </p>
                    </div>
                    {/* <div className="d-flex justify-start">
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
                    </div> */}
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

export default TermsOfServices;
