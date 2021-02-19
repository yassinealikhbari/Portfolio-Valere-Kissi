import React from "react";
import emailjs from 'emailjs-com';
import './Contacts.css'
import { Form, Button } from 'react-bootstrap';

export interface IContactsProps {
}

export interface IContactsState {
}

export class Contacts extends React.Component<IContactsProps, IContactsState> {
  private userId: string = process.env.REACT_APP_EMAILJS_USER_ID ?? "";
  private templateId: string = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "";
  private serviceId: string = process.env.REACT_APP_SERVICE_ID ?? "";

  constructor(props: IContactsProps) {
    super(props);

    this.state = {};

  }

  private sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(this.serviceId, this.templateId, e.target, this.userId)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  public render() {
    return (
      <div id="contact-container" className="vk-flex-container">
        <div id="contact-inner-container">
          <Form onSubmit={this.sendEmail}>
            <Form.Group controlId="user_name">
              <Form.Label>Name *</Form.Label>
              <Form.Control type="text" name="user_name" placeholder="name.." required />
            </Form.Group>

            <Form.Group controlId="user_email">
              <Form.Label>Email address *</Form.Label>
              <Form.Control type="email" name="user_email" placeholder="email.." required />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Message *</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" placeholder="message.." required />
            </Form.Group>

            <Button variant="dark" type="submit" className="float-right">
              Send
        </Button>

          </Form>
        </div>
      </div>
    );
  };
}