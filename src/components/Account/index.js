import React from "react";

import { AuthUserContext, withAuthorization } from "../Session";
import PasswordChangeForm from "../PasswordChange";
import { Container, Row, Col } from "react-bootstrap";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
    
      <Container fluid>
        <br />
        <Row>
          <Col
            md={3}
            xs={11}
            className="mx-auto shadow mt-2 border rounded p-4"
          >
            <h2 className="text-center">Account </h2>
            <p className="text-center">Email:{authUser.email}</p>
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
