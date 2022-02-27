import React from "react";
import Card from "react-bootstrap/Card";
import { FaGithub, FaChevronCircleRight } from "react-icons/fa";

function ProjectCard(props) {
  return (
    <>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img
          className="image"
          variant="top"
          src={process.env.PUBLIC_URL + props.image}
        />
        <Card.Body>
          <Card.Title className="card-title">{props.title}</Card.Title>
          <Card.Text className="card-description">
            {props.description}
          </Card.Text>
          <Card.Link className="card-link" href={props.gitLink} target="_blank">
            {/* {props.gitHub} */}
            <FaGithub size={30} />
          </Card.Link>
          <Card.Link
            className="card-link"
            href={props.deployedLink}
            target="_blank"
          >
            {/* {props.deployed} */}
            <FaChevronCircleRight size={30} />
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCard;
