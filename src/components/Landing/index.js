import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner";
import Testimonail from "./Testimonial";
import Cta from "./Cta";
import Count from "./Count";
import Services from "./Services";
import Footer from "./Footer";
const Landing = () => (
  <>
    <div className="d-none d-md-block ">
      <Banner />
    </div>
    <Container fluid>
      <Cta />
      <Count />
      <Testimonail />
      <Services />
      <Footer />
      {/* <Row>
        <Col md={10} xs={12} className=""></Col>
      </Row> */}
    </Container>
  </>
);

export default Landing;
