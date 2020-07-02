import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavbarItem from "./NavbarItem";
import { logOut } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";

import "./index.css";

import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  return (
    <main>
      <nav className="navbar">
        <Dropdown>
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item>
              <NavbarItem path="/" linkText="Home" />
            </Dropdown.Item>
            <Dropdown.Item>
              <NavbarItem path="/members" linkText="Members" />
            </Dropdown.Item>
            <Dropdown.Item>
              {token ? (
                <NavbarItem path="/newbook" linkText="Post new book" />
              ) : null}
            </Dropdown.Item>
            <Dropdown.Item>
              {token ? null : <NavbarItem path="/login" linkText="Log in" />}
            </Dropdown.Item>
            <Dropdown.Item>
              {token ? (
                <NavbarItem path="/myprofile" linkText="My profile" />
              ) : null}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div>
          {token ? (
            <Button variant="danger" onClick={() => dispatch(logOut())}>
              Logout
            </Button>
          ) : null}
        </div>
      </nav>
    </main>
  );
}
