import React, { useEffect, useState } from "react";
import "./Skills.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import { skills_data } from "../../data/skills_data";
import { motion } from "framer-motion";

const Skills = () => {
  const visualParts = [
    {
      percentage: "0%",
      color: "white",
    },
  ];
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );
  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    // You need to wrap it to trigger the animation
    requestAnimationFrame(() => {
      // Set a new array of percentage widths based on the props
      setWidths(
        visualParts.map((item) => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  //Framer Motion
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transitioin: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <>
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
                        // border="secondary"
                        text="light"
                        style={{
                          width: "22rem",
                          height: "fit-content",
                          padding: "8px 12px",
                        }}
                        className="h-auto d-inline-block skill-card"
                      >
                        <Card.Header
                          className="card-header d-flex justify-content-center align-items-center"
                          style={{ height: "3.5rem" }}
                        >
                          {item.title}
                        </Card.Header>
                        {/* <Reveal> */}
                        {item.data.map((i, index) => {
                          return (
                            <>
                              <p>{i.skill}</p>
                              <motion.div
                                className="skill-info mt-1 mb-3"
                                key={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                // viewport={{ once: true }}
                                custom={index}
                              >
                                <ProgressBar
                                  striped
                                  variant="danger"
                                  now={i.rank}
                                  label={`${i.rank}%`}
                                  // style={{ color: "#B923E1" }}
                                  className="progressVisualPart"
                                />
                              </motion.div>
                            </>
                          );
                        })}
                        {/* </Reveal> */}
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
    </>
  );
};

export default Skills;
