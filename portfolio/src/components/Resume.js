import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Resume() {
  return (
    <Card body className="">
      Coming from a more project management related background (event
      management, PR/communication etc.) with several years of experience in the
      international context I can now offer additional skills to works/projects
      of web development.<br></br>
      <br></br>By joining a Full Stack Developer course I have learned how to
      create a Back End - or server side - of a web application as well as the
      Front End - or client side. These gave me the opportunity to gain skills
      in a wide variety of coding niches, from database to graphic design and
      UI/UX management etc.<br></br>
      <br></br>I have graduated with using the following technology:<br></br>
      <br></br>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title className="resume-list-headlines">
              Browser Based Technologies
            </Card.Title>
            <Card.Text>
              <ul>HTML</ul>
              <ul>CSS</ul>
              <ul>JavaScript</ul>
              <ul>jQuery</ul>
              <ul>Bootstrap</ul>
              <ul>Handlebars</ul>
              <ul>Local Storage / Session Storage</ul>
              <ul>React.js</ul>
            </Card.Text>
            <Card.Title className="resume-list-headlines">
              API Interaction
            </Card.Title>
            <Card.Text>
              <ul>API</ul>
              <ul>JSON</ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="resume-list-headlines">
              Server Side Development
            </Card.Title>
            <Card.Text>
              <ul>Node.js</ul>
              <ul>Express</ul>
              <ul>User Authentication</ul>
              <ul>Progressive Web Applications (PWAs)</ul>
              <ul>MERN Stack</ul>
            </Card.Text>
            <Card.Title className="resume-list-headlines">Databases</Card.Title>
            <Card.Text>
              <ul>MySQL</ul>
              <ul>MongoDB</ul>
            </Card.Text>
            <Card.Title className="resume-list-headlines">
              Deployment / Command-Line Fundamentals
            </Card.Title>
            <Card.Text>
              <ul>Heroku</ul>
              <ul>Git</ul>
              <ul>Github Pages</ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <br></br>
      You can have a look for information about my biography, experience,
      skills, education much more at this portfolio page and at this{" "}
      <span>
        <a
          className="link"
          href="../public/pdf/Profile.pdf
        "
          class="cv"
        >
          CV/PDF
        </a>
      </span>
      .
    </Card>
  );
}

export default Resume;
