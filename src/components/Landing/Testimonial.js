import React from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";

const Testimonial = () => {
  return (
    // <span aria-hidden="true" className="carousel-control-next-icon" />

    <Row className="justify-content-md-center my-5">
      <Col md={10} xs={12} className="mx-auto">
        <h2 className="font-weight-light pb-2 text-center border-bottom border-primary inline">
          What Students Say
        </h2>

        <Carousel
          className="  shadow w-75 my-5 mx-auto "
          fade={true}
          controls={false}
          indicators={false}
        >
          <Carousel.Item>
            <Card className=" p-4">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <i className="fas fa-quote-left"> </i> Lorem ipsum dolorllllll sit
                  amet, consectetur adipiscing elit. Integer posuere erat a
                  ante.{" "}
                  <footer className="blockquote-footer">
                    Rajesh Gupta from
                    <cite title="Source Title"> RS Law College </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className=" p-4">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <i className="fas fa-quote-left"> </i> Lorem ipsum dolorllllll sit
                  amet, consectetur adipiscing elit. Integer posuere erat a
                  ante.{" "}
                  <footer className="blockquote-footer">
                    Manoj H from
                    <cite title="Source Title"> RS Law College </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className=" p-4">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <i className="fas fa-quote-left"> </i> Lorem ipsum dolorllllll sit
                  amet, consectetur adipiscing elit. Integer posuere erat a
                  ante.{" "}
                  <footer className="blockquote-footer">
                    Rahul J from
                    <cite title="Source Title"> RS Law College </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
};
export default Testimonial;
