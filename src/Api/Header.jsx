import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-5">
        <Container>
          <Navbar.Brand href="#home">
            <img src="" alt="" />
            Inixindo-ReactJs API
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-right">
              <Nav.Link href="#home" className="float-right">
                Home
              </Nav.Link>
              <Nav.Link href="#link">Users</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
