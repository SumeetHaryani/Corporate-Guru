import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import cta from "../../assets/cta.png";
const Cta = () => (
  <Row className="justify-content-md-center my-5">
    <Col md={5}>
      <Image src={cta} className="border shadow" thumbnail />
    </Col>
    <Col md={5}>
      <h2 className="font-weight-light pb-1 border-bottom border-primary">
        Welcome to Prateek Gupta Classes
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quasi,
        enim quibusdam voluptas doloribus deserunt voluptatibus ducimus
        veritatis? Laboriosam, hic impedit. Itaque atque cum ea eos, delectus
        consequuntur ut ad.
      </p>
      <Button type="submit" variant="primary">
        Read More
      </Button>
    </Col>
  </Row>
);

export default Cta;
