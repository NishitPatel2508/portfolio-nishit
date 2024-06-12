import React from "react";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
const NavBar = () => {
  const btnStyle = {
    cursor: "pointer",
    padding: "5px 20px",
    borderRadius: "50px",
    background: "linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)",
    color: "white",
    fontSize: "17px",
    fontWeight: "400",
    border: "1px solid #DA7C25",
    textAlign: "center",
  };
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          // className="bg-body-tertiary"
          fixed="top"
          bg="dark"
          data-bs-theme="dark"
        >
          <Container>
            <Navbar.Brand href="#">NISHIT</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  NISHIT
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-4 fw-600 ">
                  <Nav.Link href="#home" className="pe-4 ">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#about" className="pe-4 ">
                    About Me
                  </Nav.Link>
                  <Nav.Link href="#services" className="pe-4 ">
                    Services
                  </Nav.Link>
                  <Nav.Link href="#skills" className="pe-4 ">
                    Skill
                  </Nav.Link>
                  <Nav.Link href="#projects" className="pe-4 ">
                    Projects
                  </Nav.Link>
                  <Nav.Link href="#contact" className="pe-4 ">
                    Contact
                  </Nav.Link>
                  {/* <NavDropdown
                    title="Portfolio"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <Form className="d-flex">
                  {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  /> */}
                  <Button style={btnStyle} href="#contact">
                    Contact With Me
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
