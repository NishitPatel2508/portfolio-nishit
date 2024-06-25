import React, { useState } from "react";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  // const handleAboutMe = () =>{
  //   setShow(false);
  //   navigate("/aboutme")
  // }
  const handleHome = () => {
    setShow(false);
    navigate("/");
  };
  return (
    <>
      <section id="navbar">
        {["md"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            // className="bg-body-tertiary"
            fixed="top"
            bg="dark"
            data-bs-theme="dark"
            // id="navbar-example"
            color="#ffff"
          >
            <Container>
              <Navbar.Brand onClick={handleHome}>NISHIT</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                onClick={handleShow}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                show={show}
                onHide={handleClose}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                    onClick={handleHome}
                    //
                  >
                    NISHIT
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex flex-column flex-md-row  justify-content-center">
                  <Nav
                    className="justify-content-center align-items-center flex-grow-1 pe-4 fw-600 "
                    style={{ fontSize: "17px" }}
                  >
                    <Nav.Link className="pe-4 navmenu ">
                      <Link
                        activeClass="active"
                        className="home"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={100}
                        style={{ textDecoration: "none", color: "inherit" }}
                        onClick={handleHome}
                      >
                        Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link className="pe-4 navmenu">
                      <Link
                        activeClass="active"
                        className="about"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={100}
                        style={{ textDecoration: "none", color: "inherit" }}
                        onClick={handleClose}
                      >
                        About Me
                      </Link>
                    </Nav.Link>
                    <Nav.Link className="pe-4 navmenu">
                      <Link
                        activeClass="active"
                        className="services"
                        to="services"
                        spy={true}
                        smooth={true}
                        duration={100}
                        style={{ textDecoration: "none", color: "inherit" }}
                        onClick={handleClose}
                      >
                        Services
                      </Link>
                    </Nav.Link>
                    <Nav.Link className="pe-4 navmenu">
                      <Link
                        activeClass="active"
                        className="skills"
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={100}
                        style={{ textDecoration: "none", color: "inherit" }}
                        onClick={handleClose}
                      >
                        Skills
                      </Link>
                    </Nav.Link>
                    <Nav.Link className="pe-4 navmenu">
                      <Link
                        activeClass="active"
                        className="projects"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={100}
                        style={{ textDecoration: "none", color: "inherit" }}
                        onClick={handleClose}
                      >
                        Projects
                      </Link>
                    </Nav.Link>
                    <Nav.Link className="pe-4 navmenu">
                      <Link
                        activeClass="active"
                        className="contact"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={100}
                        style={{ textDecoration: "none", color: "inherit" }}
                        onClick={handleClose}
                      >
                        Contact
                      </Link>
                    </Nav.Link>
                  </Nav>
                  <Form className="d-flex flex-column  flex-lg-row align-items-center justify-content-center ">
                    <Button
                      className="navBtn ps-3 pe-3 text-center"
                      href="#contact"
                      onClick={handleClose}
                    >
                      Contact With Me
                    </Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </section>
      <Outlet />
    </>
  );
};

export default NavBar;
