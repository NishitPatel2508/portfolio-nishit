import React from "react";
import "./Skills.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import { skills_data } from "../../data/skills_data";
const Skills = () => {
  return (
    <section id="skills" className="d-flex">
      <Container className=" mb-5 mt-2">
        {" "}
        <Stack gap={4}>
          <Row>
            <Col xs lg="12" className="d-flex justify-content-center ">
              <h1 className="services-title" style={{ color: "white" }}>
                Skills
              </h1>
            </Col>
          </Row>
          <Container className="">
            <Row className="" gap={3}>
              {/* <Col lg="12" className="d-flex gap-3" > */}
              {skills_data.map((item) => {
                return (
                  <Col
                    xs={12}
                    md={6}
                    lg={4}
                    className="mt-3 d-flex justify-content-center"
                  >
                    <Card
                      bg="dark"
                      border="secondary"
                      text="light"
                      style={{
                        width: "22rem",
                        height: "fit-content",
                        padding: "8px 12px",
                      }}
                      className="h-auto d-inline-block"
                    >
                      <Card.Header
                        className="card-header d-flex justify-content-center align-items-center"
                        style={{ height: "3.5rem" }}
                      >
                        {item.title}
                      </Card.Header>
                      {item.data.map((i) => {
                        return (
                          <div className="skill-info mt-1 mb-3">
                            <p>{i.skill}</p>
                            {/* <div className="mt-1"> */}
                            <ProgressBar
                              striped
                              variant="danger"
                              now={i.rank}
                              label={`${i.rank}%`}
                              style={{ color: "#B923E1" }}
                            />
                            {/* </div> */}
                          </div>
                        );
                      })}
                    </Card>
                  </Col>
                );
              })}
              {/* </Col> */}
            </Row>
          </Container>
        </Stack>
      </Container>
    </section>
  );
};

export default Skills;