import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid>
      <br />
      <Row>
        <Col md={10} xs={11} className="mx-auto mt-2 shadow border rounded p-4">
          <h1 className="text-center"> Resources</h1>
          <div className="list-group">
            <a
              href="https://www.icsi.edu/whats_new_icsi/"
              className="list-group-item "
              target="_blank"
              rel="noopener noreferrer"
            >
              ICSI What's New{" "}
            </a>
            <a
              href="https://www.icsi.edu/media/webmodules/icsiweb/questionpapers.htm"
              className="list-group-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              CS Exams Question Papers
            </a>
            <a
              href="https://www.icsi.edu/whats_new_icsi/"
              className="list-group-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              ICSI Events
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
