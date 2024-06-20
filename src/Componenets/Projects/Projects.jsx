import React, { useEffect, useRef, useState } from "react";
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
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import Reveal from "../Global/Animation/Reveal";

const tabs = [{ name: "All" }, { name: "Frontend" }, { name: "Fullstack" }];
const Projects = () => {
  const [load, setLoad] = useState(false);
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
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 600);
  }, [displayAbleProjects]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  const animationCategoryWise = {
    initial: { y: 10, opacity: 0, scale: 0 },
    animate: (index) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transitioin: {
        duration: 1,
        delay: 0.05 * index,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    }),
  };

  return (
    <section id="projects" className="d-flex justify-content-center  ">
      {/* <SectionAnimationOnScroll> */}
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
                              <motion.div>{tab.name}</motion.div>
                            </Nav.Link>
                          </Nav.Item>
                        );
                      })}
                    </Nav>
                  </Card.Header>
                  <Card.Body>
                    <Row lg={12} className="d-flex ">
                      {displayAbleProjects &&
                        displayAbleProjects.map((project, index) => {
                          return (
                            <>
                              <Col xs={12} md={6} lg={4}>
                                {/* <motion.div
                                  key={index}
                                  variants={animationCategoryWise}
                                  initial="initial"
                                  whileInView="animate"
                                  whileHover={{ scale: [1, 1.1, 1] }}
                                  custom={index}
                                > */}
                                <Card
                                  key={index}
                                  style={{
                                    height: "max-content",
                                    // width: "18rem",
                                    // overflow: "hidden",
                                    marginTop: "1rem",
                                    color: "white",
                                  }}
                                  bg="dark"
                                  className={`bg-dark h-auto d-inline-block project_item `}
                                  border="secondary"
                                >
                                  <motion.div
                                    key={index}
                                    variants={animationCategoryWise}
                                    initial="initial"
                                    whileInView="animate"
                                    // whileHover={{ scale: [1, 1.1, 1] }}
                                    custom={index}
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
                                            height: "9rem",
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
                                            {project.stack.map(
                                              (list, index) => {
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
                                              }
                                            )}
                                          </Accordion.Body>
                                        </Accordion.Item>
                                      </Accordion>
                                    </Card.Body>
                                  </motion.div>
                                </Card>
                                {/* </motion.div> */}
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
        {/* <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={displayAbleProjects ? displayAbleProjects.catrgory : "All"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 20, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {displayAbleProjects.catrgory}
            </motion.div>
          </AnimatePresence>
        </main> */}
      </Container>
      {/* </SectionAnimationOnScroll> */}
    </section>
  );
};

export default Projects;
