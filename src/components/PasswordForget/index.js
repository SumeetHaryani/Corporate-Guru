import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

import { Alert, Container, Row, Col, Form, Button } from "react-bootstrap";

const PasswordForgetPage = () => (
  <Container fluid>
    <br />
    <Row>
      <Col md={3} xs={11} className="mx-auto mt-2 border rounded p-4">
        <h2 className="text-center">Reset Password</h2>
        <PasswordForgetForm />
      </Col>
    </Row>
  </Container>
);

const INITIAL_STATE = {
  email: "",
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>

          <Form.Control
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </Form.Group>
        <Button
          disabled={isInvalid}
          type="submit"
          variant="primary"
          className="my-2"
        >
          {" "}
          Reset My Password
        </Button>

        {error && <Alert variant="danger">{error.message}</Alert>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
