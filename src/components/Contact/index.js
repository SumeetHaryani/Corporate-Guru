import React, { Component } from "react";

// import { withAuthorization } from "../Session";
import { withFirebase } from "../Firebase";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const ContactPage = () => (
  <Container fluid>
    <br />
    <Row>
      <Col md={3} xs={11} className="mx-auto mt-2 shadow border rounded p-4">
        <h1 className="text-center">Contact Us</h1>
        <ContactForm />
      </Col>
    </Row>
  </Container>
);

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

class ContactBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { name, email, phone, message } = this.state;
    this.props.firebase
      .messages()
      .push({
        name,
        email,
        phone,
        message,
        date: new Date().toDateString(),
      })
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        this.setState({ error });
        console.log(error);
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { name, email, phone, message } = this.state;

    const isInvalid =
      name === "" ||
      email === "" ||
      phone === "" ||
      phone.length > 10 ||
      phone.length < 10 ||
      message === "";

    return (
      <form onSubmit={this.onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={name}
            onChange={this.onChange}
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email address</Form.Label>

          <Form.Control
            name="email"
            value={email}
            onChange={this.onChange}
            type="email"
            placeholder="Email Address"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mobile no</Form.Label>

          <Form.Control
            name="phone"
            value={phone}
            onChange={this.onChange}
            type="text"
            placeholder="Enter Mobile no."
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            value={message}
            onChange={this.onChange}
            type="text"
            placeholder="Enter message here..."
          />
        </Form.Group>

        <Button
          disabled={isInvalid}
          type="submit"
          variant="primary"
          className="my-2"
        >
          Submit
        </Button>
      </form>
    );
  }
}

const ContactForm = withRouter(withFirebase(ContactBase));

//export default withAuthorization(condition)(Contact);

export default ContactPage;
