import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function Contact() {
  return (
    <Form className="form justify-content-center align-items-center">
      <Row className="">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" placeholder="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="message text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Button className="button" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Row>
    </Form>
  );
}

export default Contact;
