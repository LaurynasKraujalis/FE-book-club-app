import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavbarItem from "./NavbarItem";
import { logOut } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";

import { Navbar, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  return (
    <Navbar
      collapseOnSelect
      bg="danger"
      expand="lg"
      sticky="top"
      expanded={expanded}
    >
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setExpanded(expanded ? false : true)}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          {token ? (
            <NavbarItem
              path="/newbook"
              linkText="Post new book"
              onClick={() => setExpanded(false)}
            />
          ) : null}

          {token ? null : (
            <NavbarItem
              path="/login"
              linkText="Log in"
              onClick={() => setExpanded(false)}
            />
          )}
          {token ? (
            <NavbarItem
              path="/myprofile"
              linkText="My profile"
              onClick={() => setExpanded(false)}
            />
          ) : null}

          {token ? (
            <Button variant="danger" onClick={() => dispatch(logOut())}>
              Logout
            </Button>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
