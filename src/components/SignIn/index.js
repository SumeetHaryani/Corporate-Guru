import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

import { Alert, Container, Row, Col, Form, Button } from "react-bootstrap";
const SignInPage = () => (
  <Container fluid>
    <br />
    <Row>
      <Col md={3} xs={11} className="mx-auto mt-2 shadow border rounded p-4">
        <h1 className="text-center">
          <i className="fa fa-user" aria-hidden="true"></i> Sign In
        </h1>
        <SignInForm />
        <PasswordForgetLink />
        <SignUpLink />
      </Col>
    </Row>
  </Container>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            value={email}
            onChange={this.onChange}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button
          disabled={isInvalid}
          variant="primary"
          type="submit"
          className="my-2"
        >
          Sign In
        </Button>
        {error && <Alert variant="danger">{error.message}</Alert>}
      </Form>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };
