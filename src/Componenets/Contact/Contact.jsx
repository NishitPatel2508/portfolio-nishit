import React, { useState } from "react";
import "./Contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const btnStyle = {
    cursor: "pointer",
    padding: "12px 30px",
    borderRadius: "50px",
    background: "linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)",
    color: "white",
    fontSize: "17px",
    fontWeight: "500",
    border: "1px solid #DA7C25",
  };
  const [msg, setMsg] = useState("");
  const [nameValue, setName] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [email, setEmail] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMsg = (e) => {
    setUserMsg(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "387697f9-1bc8-46b1-a1c7-5383f6c8f333");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log(res);
      setMsg(res.message);
      setTimeout(() => {
        toast.success(res.message);
        setUserMsg("");
        setEmail("");
        setName("");
      }, 2000);
      setTimeout(() => {
        setMsg("");
      }, 5000);
    }
  };
  return (
    <section id="contact" className="d-flex  ">
      <Container className="mb-5">
        {" "}
        {/* <Stack gap={4}> */}
        <Row>
          <Col xs lg="12" className="d-flex justify-content-center ">
            <h1 className="contact-title">Get in touch</h1>
          </Col>
        </Row>
        <Row className=" p-3" gap={3}>
          <Col
            lg="6"
            className="contact-left p-3"
            // gap={20}
          >
            <Row className="gap-2">
              <Col md={12}>
                <h1> Let's talk</h1>
              </Col>
              <Col md={12}>
                <p>
                  I'm currently avaliable to take on new projects, so feel free
                  to send me a message about anything that you want me to work
                  on. You can contact anytime.
                </p>
              </Col>
            </Row>
            <Row className="text-white ">
              <Col md={12} className="d-flex gap-3 ">
                <p style={{ fontSize: "16px", cursor: "pointer" }}>
                  <MdEmail className="iconStyle" />
                </p>
                <p
                  className="text-white "
                  style={{
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  <a
                    href="mailto:nishitpatel78638@gmail.com"
                    style={{ textDecoration: "none", color: "#ffff" }}
                  >
                    nishitpatel78638@gmail.com
                  </a>
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="d-flex gap-3">
                <p style={{ fontSize: "17px", cursor: "pointer" }}>
                  <IoCallSharp className="iconStyle" />
                </p>
                <p
                  className="text-white "
                  style={{ fontSize: "16px", cursor: "pointer" }}
                >
                  <a
                    href="tel:+91 6355242731"
                    style={{ textDecoration: "none", color: "#ffff" }}
                  >
                    +91 6355242731{" "}
                  </a>
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="d-flex gap-3">
                <p style={{ fontSize: "17px" }}>
                  <FaLocationDot className="iconStyle" />
                </p>
                <p className="text-white " style={{ fontSize: "16px" }}>
                  Ahmedabad, India
                </p>
              </Col>
            </Row>
          </Col>
          <Col
            xs
            lg="6"
            className="d-flex justify-content-center  p-3 "
            gap={3}
          >
            <Form className="w-100" onSubmit={onSubmit}>
              <Form.Group
                className="mb-3 pr-3"
                // controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-white fs-5">Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nishit Patel"
                  onChange={handleName}
                  value={nameValue}
                  name="first_name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                // controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-white fs-5">
                  Your Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={handleEmail}
                  value={email}
                  name="email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                // controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="text-white fs-5">
                  Your Message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  onChange={handleMsg}
                  value={userMsg}
                  name="msg"
                />
              </Form.Group>
              {/* <label className="text-white text-center">Nishit</label> */}
              <Button style={btnStyle} type="submit">
                Submit
              </Button>
              <Form.Group
                className="mb-1 mt-3 text-white"
                controlId="formBasicCheckbox"
              >
                <Form.Label label={msg}>{msg}</Form.Label>
              </Form.Group>
            </Form>
            {/* <ToastContainer /> */}
          </Col>
        </Row>
        {/* </Stack> */}
      </Container>
    </section>
  );
};

export default Contact;
