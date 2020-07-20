import React from "react";
import { CardDeck, Card, Row, Col } from "react-bootstrap";
import cimg1 from "../../assets/cimg1.jpg";
import cimg2 from "../../assets/cimg2.jpg";
import cimg3 from "../../assets/cimg3.jpg";
const Services = () => (
  <Row
    className="justify-content-md-center mt-5 
    pb-5
    "
    style={{ backgroundColor: "#f7fbfe" }}
  >
    <Col md={10} xs={12} className="mx-auto ">
      <h2 className="font-weight-light  text-center border-bottom border-primary inline my-5 pb-2">
        Services
      </h2>
      <CardDeck>
        <Card className="shadow">
          <Card.Img variant="top" src={cimg1} className=" h-50" />
          <Card.Body>
            <Card.Title>CS Foundation</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">8 Months</small>
          </Card.Footer>
        </Card>
        <Card className="shadow">
          <Card.Img variant="top" src={cimg2} className=" h-50" />
          <Card.Body>
            <Card.Title>CS Executive</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">9 Months</small>
          </Card.Footer>
        </Card>
        <Card className="shadow">
          <Card.Img variant="top" src={cimg3} className=" h-50" />
          <Card.Body>
            <Card.Title>CS Professional</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">10 Months</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Col>
  </Row>
);
export default Services;
