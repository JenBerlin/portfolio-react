import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Link href={props.gitLink}>{props.GitHub}</Card.Link>
        <Card.Link href={props.deployedLink}>{props.Deployed}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
