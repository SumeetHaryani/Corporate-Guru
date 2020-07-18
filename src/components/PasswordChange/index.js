import React, { Component } from "react";

import { withFirebase } from "../Firebase";
import { Alert,  Form, Button } from "react-bootstrap";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};


class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.Label>Password</Form.Label>

          <Form.Control
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group>
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
          Reset My Password
        </Button>

        {error && <Alert variant="danger">{error.message}</Alert>}
      </form>
    );
  }
}

export default withFirebase(PasswordChangeForm);
