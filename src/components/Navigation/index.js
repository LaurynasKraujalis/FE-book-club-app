import React from "react";
import { useDispatch, useSelector } from "react-redux";

import NavbarItem from "./NavbarItem";
import { logOut } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";

import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Navigation() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  return (
    <Navbar collapseOnSelect bg="danger" expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-navv">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          {token ? (
            <NavbarItem path="/newbook" linkText="Post new book" />
          ) : null}

          {token ? null : <NavbarItem path="/login" linkText="Log in" />}
          {/* {token ? <NavbarItem path="/profile" linkText="My profile" /> : null} */}
          {token ? (
            <Button variant="danger" onClick={() => dispatch(logOut())}>
              Logout
            </Button>
          ) : null}
        </Nav>
      </Navbar.Collapse>
      {/* <Navbar.Collapse className="justify-content-end"></Navbar.Collapse> */}
    </Navbar>
  );
}
