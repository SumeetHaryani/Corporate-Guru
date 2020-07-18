import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

import { Alert, Container, Row, Col, Form, Button } from "react-bootstrap";

const SignUpPage = () => (
  <Container fluid >
      <br />
    <Row>
      <Col md={3} xs={11} className="mx-auto mt-2 border rounded p-4">
        <h1 className="text-center">
          <i class="fa fa-user" aria-hidden="true"></i> Sign Up
        </h1>
        <SignUpForm />
      </Col>
    </Row>
  </Container>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
        });
      })
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
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
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <Form.Group >
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
        </Form.Group>

        <Form.Group >
          <Form.Label>Email address</Form.Label>

          <Form.Control
            name="email"
            value={email}
            onChange={this.onChange}
            type="email"
            placeholder="Email Address"
          />
        </Form.Group>
        <Form.Group >
          <Form.Label>Password</Form.Label>

          <Form.Control
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>

        <Button
          disabled={isInvalid}
          type="submit"
          variant="primary"
          className="my-2"
        >
          Sign Up
        </Button>

        {error && <Alert variant="danger">{error.message}</Alert>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
