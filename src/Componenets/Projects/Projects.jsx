import React, { useState } from "react";
import "./Projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";
import { CiShare1 } from "react-icons/ci";

import Card from "react-bootstrap/Card";

import { project_data } from "../../data/project_data";
const tabs = [{ name: "All" }, { name: "Frontend" }, { name: "Fullstack" }];
const Projects = () => {
  const [displayAbleProjects, setDisplayAbleProjects] = useState(project_data);
  const setProjects = (category) => {
    if (category === "All") {
      return setDisplayAbleProjects(project_data);
    }
    const pro = project_data.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
    setDisplayAbleProjects(pro);
  };
  const handleLinkOpen = (link) => {
    // setLink(link);
    // console.log(link);
    window.open(link, "_blank");
  };
  return (
    <section id="projects" className="d-flex justify-content-center  ">
      <Container className="mb-5">
        {" "}
        <Stack gap={4}>
          <Row>
            <Col className="d-flex justify-content-center mt-3">
              <h1 className="project-title" style={{ color: "white" }}>
                Projects
              </h1>
            </Col>
          </Row>
          <Row className="mt d-flex  justify-content-center ">
            <Col lg={12} className="">
              <Stack className="p-2">
                <Card bg="dark" className="bg-dark">
                  <Card.Header>
                    <Nav
                      variant="tabs"
                      defaultActiveKey="#All"
                      className="d-flex justify-content-center"
                    >
                      {tabs.map((tab, index) => {
                        return (
                          <Nav.Item>
                            <Nav.Link
                              href={`#${tab.name}`}
                              onClick={() => {
                                // setActiveIndex(index);
                                setProjects(tab.name);
                              }}
                              className="tabName"
                            >
                              {tab.name}
                            </Nav.Link>
                          </Nav.Item>
                        );
                      })}
                    </Nav>
                  </Card.Header>
                  <Card.Body>
                    <Row lg={12} className="d-flex ">
                      {displayAbleProjects &&
                        displayAbleProjects.map((project) => {
                          return (
                            <>
                              <Col xs={12} md={6} lg={4}>
                                <Card
                                  style={{
                                    height: "max-content",
                                    // width: "18rem",
                                    // overflow: "hidden",
                                    marginTop: "1rem",
                                    color: "white",
                                  }}
                                  bg="dark"
                                  className="bg-dark"
                                  border="secondary"
                                >
                                  <Card.Img
                                    variant="top"
                                    src={project.image}
                                    className="project-img"
                                  />
                                  <Card.Body>
                                    <div
                                      style={{
                                        marginTop: "2px",
                                        height: "4rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "start",
                                        // border: "2px solid white",
                                      }}
                                    >
                                      <Card.Title>{project.title}</Card.Title>
                                    </div>
                                    <Card.Text>
                                      <div
                                        style={{
                                          marginTop: "9px",
                                          height: "8rem",
                                          //   border: "2px solid white",
                                        }}
                                      >
                                        {project.data.description}
                                      </div>
                                    </Card.Text>
                                  </Card.Body>
                                  <Card.Body>
                                    <Accordion
                                      defaultActiveKey="0"
                                      //   className="bg-dark"
                                    >
                                      <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                          <CiShare1
                                            style={{
                                              fontSize: "23px",
                                              color: "black",
                                              fontWeight: 500,
                                              cursor: "pointer",
                                            }}
                                            onClick={() =>
                                              handleLinkOpen(
                                                project.data.demoLink
                                              )
                                            }
                                          />
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          <span
                                            style={{
                                              fontSize: "18px",
                                              color: "black",
                                              fontWeight: "bolder",
                                              textAlign: "center",
                                            }}
                                          >
                                            Stack used
                                          </span>
                                          {project.stack.map((list, index) => {
                                            return (
                                              <div className="items">
                                                <span
                                                  className="stack-icon "
                                                  style={{
                                                    color: list.iconColor,
                                                    fontWeight: "600",
                                                  }}
                                                >
                                                  {list.icon}
                                                  <span className="stack-name">
                                                    {list.name}
                                                  </span>
                                                </span>
                                              </div>
                                            );
                                          })}
                                        </Accordion.Body>
                                      </Accordion.Item>
                                    </Accordion>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </>
                          );
                        })}
                    </Row>
                  </Card.Body>
                </Card>
              </Stack>
            </Col>
          </Row>
        </Stack>
      </Container>
    </section>
  );
};

export default Projects;
