import React from "react";
import ProjectCard from "../components/ProjectCard";
import data from "../data/data.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Project() {
  return (
    <>
      <Container>
        <Row xs={2} md={3} className="g-4">
          {data.map((data) => (
            <Col>
              <ProjectCard
                title={data.name}
                description={data.description}
                image={data.image}
                gitLink={data.GitHub}
                deployedLink={data.Deployed}
                gitHub="GitHub Link"
                deployed="Deployed Link"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Project;
