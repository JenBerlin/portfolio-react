import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import validator from "email-validator";

function Contact() {
  let [msg, setMessage] = useState("");

  const validateName = (e) => {
    if (e.target.value === "") {
      setMessage("Name cannot be empty.");
    } else {
      setMessage("");
    }
  };

  const validateEmail = (e) => {
    if (e.target.value === "") {
      setMessage("Email cannot be empty.");
    } else if (!validator.validate(e.target.value)) {
      setMessage("Is not a valid email format.");
    } else {
      setMessage("");
    }
  };

  // Only if it's empty
  // Why does it change the css?
  const validateMassage = (e) => {
    // console.log("Current massage", e.target.value);
    if (e.target.value === "") {
      setMessage("You must leave a massage - thanks :)");
    } else if (e.target.value.length < 10) {
      setMessage("Massage needs to have at least 10 characters.");
    } else {
      setMessage("");
    }

    console.log("msg: ", msg);
  };

  return (
    <Form className="p-x-4 w-80 m-auto">
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlInput1"
        onBlur={validateName}
      >
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
        <Form.Label></Form.Label>
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
    </Form>
  );
  <p className="about-text">
    Feel free to get in touch directly via Email if you like!
  </p>;
}

export default Contact;
