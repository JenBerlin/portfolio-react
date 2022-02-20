import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function Contact() {
  let [msg, setMessage] = useState("massage ...");

  // Valide the email format as well
  const validateEmail = (e) => {
    console.log("Current email", e.target.value);
    setMessage("Invalid email input");
    console.log("msg: ", msg);
  };

  // Only if it's empty
  // Why does it change the css?
  const validateMassage = (e) => {
    console.log("Current massage", e.target.value);
    setMessage("You must leave a massage - thanks :)");
    console.log("msg: ", msg);
  };

  return (
    <Form className="form justify-content-center align-items-center">
      <Row className="">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" placeholder="name" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
          onBlur={validateEmail}
        >
          <Form.Label>Your email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
          onBlur={validateMassage}
        >
          <Form.Label>{msg}</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="message text" />
        </Form.Group>
        <div className="">
          <label className="message mb-4 mt-2">{msg}</label>
        </div>
        <Form.Group className="mb-3">
          <Button className="button" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Row>
    </Form>
  );
  <p className="about-text">
    Feel free to get in touch directly via Email if you like!
  </p>;
}

export default Contact;
