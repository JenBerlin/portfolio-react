import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} className="about-text">
            My name is <span className="about-text-inside">Jenny</span> and I'm
            based in Berlin/Germany. I’m{" "}
            <span className="about-text-inside">
              interested in digitalisation
            </span>
            , humans in general, solutions, learning{" "}
            <span className="about-text-inside">and</span> educating myself with
            new things. There it comes why{" "}
            <span className="about-text-inside">
              I have decided to get into web development
            </span>{" "}
            (by taking a Full-Stack Web Development Course @ESMT), which
            combines mentioned interests to challenge myself for things that
            matter. It matters to have skills in this field to be able{" "}
            <span className="about-text-inside">
              to create and work on web solutions
            </span>{" "}
            which can deliver good services, excitements and experiences to
            humans.{" "}
            <span className="about-text-inside">
              The new skills fit it to my over 20 years of project management
              experience.
            </span>{" "}
            This allows me to deal with both sides the technical and management
            part of realising web driven projects.
          </Col>
          <Col xs={6} className="backgroundImage"></Col>
        </Row>
      </Container>
      {/* <Card className="card" style={{ width: "28rem" }}>
        <Card.Body>
          <Card.Text className="about-text">
            My name is Jenny and I'm based in Berlin/Germany. I’m interested in
            digitalisation, humans in general, solutions, learning and educating
            myself with new things. There it comes why I have decided to get
            into web development (by taking a Full-Stack Web Development Course
            @ESMT), which combines mentioned interests to challenge myself for
            things that matter. It matters to have skills in this field to be
            able to create and work on web solutions which can deliver good
            services, excitements and experiences to humans. The new skills fit
            it to my over 20 years of project management experience. This allows
            me to deal with both sides the technical and management part of
            realising web driven projects.
          </Card.Text>
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default About;
