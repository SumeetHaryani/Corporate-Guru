import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Row, Col } from "react-bootstrap";

const Ticker = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={(isVisible) => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <h2 className={className} ref={countUpRef} />
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};

const Count = () => (
  <Row
    className="justify-content-md-center p-5 "
    style={{ backgroundColor: "#f7fbfe" }}
  >
    <Col md={3}>
      <div className="text-center">
        <span className="fa-stack fa-2x">
          <i className="fa fa-circle fa-stack-2x text-primary "></i>
          <i className="fa fa-user-graduate fa-stack-1x fa-inverse"></i>
        </span>
        <Ticker className="count" end={1100} suffix="+" />
        <p>Happy Students</p>
      </div>
    </Col>
    <Col md={3}>
      <div className="text-center">
        <span className="fa-stack fa-2x">
          <i className="fa fa-circle fa-stack-2x text-primary "></i>
          <i className="fa fa-chalkboard-teacher fa-stack-1x fa-inverse"></i>
        </span>
        <Ticker className="count" end={4} suffix="+" />
        <p> Years of Experience</p>
      </div>
    </Col>
    <Col md={3}>
      <div className="text-center">
        <span className="fa-stack fa-2x">
          <i className="fa fa-circle fa-stack-2x text-primary "></i>
          <i className="fa fa-video fa-stack-1x fa-inverse"></i>
        </span>
        <Ticker className="count" end={50} suffix="+" />
        <p>Videos</p>
      </div>
    </Col>
    <Col md={3}>
      <div className="text-center">
        <span className="fa-stack fa-2x">
          <i className="fa fa-circle fa-stack-2x  text-primary"></i>
          <i className="fa fa-laptop fa-stack-1x fa-inverse "></i>
        </span>
        <Ticker className="count" end={36} suffix="+" />
        <p>Resources</p>
      </div>
    </Col>
  </Row>
);
export default Count;
