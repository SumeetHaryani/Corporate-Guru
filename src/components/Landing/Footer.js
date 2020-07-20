import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Row className="justify-content-md-center p-5 bg-light border-top">
      <Col md={12} className="mx-auto">
        <p className="text-center ">
          &copy; Copyright 2020 - Corporate Guru. All rights reserved.
        </p>
      </Col>
    </Row>
  );
}
