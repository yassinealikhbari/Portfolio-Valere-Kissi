import React from "react";
import emailjs from 'emailjs-com';
import './Contacts.css'
import { Form, Button } from 'react-bootstrap';

const Contacts = () => {
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const serviceId = process.env.REACT_APP_SERVICE_ID;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div id="contact-container" class="vk-flex-container">
      <div id="contact-inner-container"cla>
      <Form onSubmit={sendEmail}>
      <Form.Group controlId="user_name">
          <Form.Label>Name *</Form.Label>
          <Form.Control type="text" name="user_name" placeholder="name.." required/>
        </Form.Group>

        <Form.Group controlId="user_email">
          <Form.Label>Email address *</Form.Label>
          <Form.Control type="email" name="user_email" placeholder="email.." required/>
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message *</Form.Label>
          <Form.Control  as="textarea" rows={4} name="message" placeholder="message.." required/>
        </Form.Group>

        <Button variant="dark" type="submit" className="float-right">
          Send
        </Button>

      </Form>
    </div>
    </div>
  );
};


export default Contacts;