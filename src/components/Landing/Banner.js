import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";
const Banner = () => {
  const style = {
    height: "80vh",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={img3}
          alt="First slide"
          style={style}
        />
        <Carousel.Caption>
          <h3>Boost up your skills with a new way of learning</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={style}
          src={img2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>You can learn anything</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={style}
          src={img1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Take the first step to learn with us</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Banner;
