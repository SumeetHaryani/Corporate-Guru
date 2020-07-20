import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Faq() {
  return (
    <Container fluid>
      <br />
      <Row>
        <Col
          md={10}
          xs={11}
          className="mx-auto mt-2 shadow-sm border rounded p-4"
        >
          <h2 className="text-center"> FAQ</h2>
        </Col>
      </Row>
    </Container>
  );
}
