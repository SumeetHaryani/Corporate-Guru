import React from "react";

import { AuthUserContext, withAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { Alert, Container, Row, Col, Form, Button } from "react-bootstrap";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <Container fluid>
        <br />
        <Row>
          <Col md={3} xs={11} className="mx-auto mt-2 border rounded p-4">
            <h2 className="text-center">Account: {authUser.email}</h2>
            {/* <PasswordForgetForm /> */}
            <PasswordChangeForm />
          </Col>
        </Row>
      </Container>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
