import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const NavBar = () => {
  // const navButton = useRef(null);
  // const linksContainerRef = useRef(null);
  // function collapseNav(e) {
  //   console.log(navButton);
  //   console.log(linksContainerRef);
  //   navButton.current.classList.add("collapsed");
  //   body.style.overflow = "hidden";
  //   navButton.current.classList.remove("collapsed");
  //   linksContainerRef.current.classList.remove("show");
  //   window.addEventListener("click", (e) => {
  //     console.log(e.target !== linksContainerRef.current);
  //   if (e.target !== linksContainerRef.current) {
  //     linksContainerRef.current.style.display = "none";
  //   }
  //   });
  // }
  // "#sec".scrollspy({ target: "#navbar-example" });

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
              <Navbar.Brand href="#">NISHIT</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                // ref={linksContainerRef}
                // style={{ display: "block" }}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                    //
                  >
                    NISHIT
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-center flex-grow-1 pe-4 fw-600 ">
                    <Nav.Link className="pe-4 navmenu ">
                      <Link
                        activeClass="active"
                        className="home"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        style={{ textDecoration: "none", color: "inherit" }}
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
                        duration={500}
                        style={{ textDecoration: "none", color: "inherit" }}
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
                        duration={500}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Services
                      </Link>
                    </Nav.Link>
                    <Nav.Link href="#DA7C25" className="pe-4 navmenu">
                      <Link
                        activeClass="active"
                        className="skills"
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Skill
                      </Link>
                    </Nav.Link>
                    <Nav.Link className="pe-4 navmenu">
                      <Link
                        activeClass="active"
                        className="projects"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        style={{ textDecoration: "none", color: "inherit" }}
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
                        duration={500}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Contact
                      </Link>
                    </Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  /> */}
                    <Button
                      className="navBtn ps-3 pe-3 text-center"
                      href="#contact"
                      // variant="success"
                      // style={btnStyle}
                      // style={{
                      //   textDecoration: "none",
                      //   color: "#ffff",
                      //   background:
                      //     "linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)",
                      //   borderRadius: "50px",
                      // }}
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
    </>
  );
};

export default NavBar;
