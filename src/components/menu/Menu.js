import React from "react";
import logo from "../../logo.svg";
import "./Menu.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { NavLink, Container, Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <Navbar>
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <NavLink>
                  <Link className="skills_link" to="/skills">
                    Skills
                  </Link>
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink>
                  <Link className="work_link" to="/work">
                    Work
                  </Link>
                </NavLink>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Menu;
