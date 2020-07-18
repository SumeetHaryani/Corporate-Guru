import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";

import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  NavItem,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import logo from "../../assets/logo.png";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

// const NavigationAuthc = () => (
//   <ul>
//     <li>
//       <Link to={ROUTES.LANDING}>Landing</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.HOME}>Home</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.ACCOUNT}>Account</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.ADMIN}>Admin</Link>
//     </li>
//     <li>
//       <SignOutButton />
//     </li>
//   </ul>
// );

const NavigationAuth = () => (
  <Container fluid>
    <Row className=" border-bottom">
      <Col md={10} xs={12} className="mx-auto">
        <Navbar bg="white" expand="lg">
          <Navbar.Brand as={Link} to={ROUTES.LANDING}>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Corporate Guru
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to={ROUTES.LANDING}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={ROUTES.RESOURCES}>
                Resources
              </Nav.Link>
              <Nav.Link as={Link} to={ROUTES.FAQ}>
                FAQs
              </Nav.Link>
              <Nav.Link as={Link} to={ROUTES.CONTACT_US}>
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to={ROUTES.ACCOUNT}>
                Account
              </Nav.Link>
              <SignOutButton className="ml-2" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  </Container>
);

const NavigationNonAuth = () => (
  <Container fluid>
    <Row className=" border-bottom">
      <Col md={10} xs={12} className="mx-auto">
        <Navbar bg="white" expand="lg">
          <Navbar.Brand as={Link} to={ROUTES.LANDING}>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Corporate Guru
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to={ROUTES.LANDING}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={ROUTES.RESOURCES}>
                Resources
              </Nav.Link>
              <Nav.Link as={Link} to={ROUTES.FAQ}>
                FAQs
              </Nav.Link>
              <Nav.Link as={Link} to={ROUTES.CONTACT_US}>
                Contact Us
              </Nav.Link>
              <Button
                as={Link}
                className="ml-2 "
                variant="outline-primary"
                to={ROUTES.SIGN_IN}
              >
                Sign in
              </Button>
              <Button
                as={Link}
                className="ml-2 "
                variant="outline-primary"
                to={ROUTES.SIGN_UP}
              >
                Sign up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  </Container>
);
export default Navigation;
