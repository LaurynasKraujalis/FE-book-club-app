import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import NavbarItem from "./NavbarItem";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/newbook" linkText="Post new book" />
          <NavbarItem path="/profile" linkText="My profile" />
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
    </Navbar>
  );
}
