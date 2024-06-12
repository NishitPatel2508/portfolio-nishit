import React from "react";
import "./Services.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Services_Data from "../../data/services_data";
const Services = () => {
  return (
    <section id="services" className="d-flex ">
      <Container className="mb-5">
        <Row>
          <Col className="d-flex justify-content-center ">
            <h1 className="services-title" style={{ color: "white" }}>
              My Services
            </h1>
          </Col>
        </Row>
        <Container className="mt-5 ">
          <Row className="mt-2 " gap={3}>
            {Services_Data.map((item) => {
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
                      height: "max-content",
                      padding: "5px",
                    }}
                    className="mb-2 "
                  >
                    <Card.Header>{item.s_no}</Card.Header>
                    <Card.Body>
                      <Card.Title className="service-card-title">
                        {item.s_name}
                      </Card.Title>
                      <Card.Text className="service-card-desc">
                        {item.s_desc}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Services;
