import React from "react";
import emailjs from 'emailjs-com';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Form, Button } from 'react-bootstrap';
import $ from 'jquery';
import './Contacts.css'

export interface IContactsProps {
}

export interface IContactsState {
  openError: boolean;
  openSuccess: boolean;
}

export class Contacts extends React.Component<IContactsProps, IContactsState> {
  private userId: string = process.env.REACT_APP_EMAILJS_USER_ID ?? "";
  private templateId: string = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "";
  private serviceId: string = process.env.REACT_APP_SERVICE_ID ?? "";

  constructor(props: IContactsProps) {
    super(props);

    this.state = {
      openError: false,
      openSuccess: false
    };
  }

  public render() {
    return (
      <div id="contact-container" className="vk-flex-container">

        <Snackbar open={this.state.openSuccess} autoHideDuration={6000} onClose={this.handleCloseSuccess}>
          <MuiAlert onClose={this.handleCloseSuccess} severity="success">
            Thank you for contacting me – I will get back to you soon!
            </MuiAlert>
        </Snackbar>


        <Snackbar open={this.state.openError} autoHideDuration={20000} onClose={this.handleCloseError}>
          <MuiAlert onClose={this.handleCloseError} severity="error">
            Error while trying to send this message, please try later or contact me here: <a style={{color: 'rgb(97, 26, 21)'}} href = "mailto:valerekissi69@gmail.com">valerekissi69@gmail.com</a>
            </MuiAlert>
        </Snackbar>

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
  

  private sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(this.serviceId, this.templateId, e.target, this.userId)
      .then((result) => {
        this.resetForm();
        this.openSnackbarSuccess();
      }, (error) => {
        this.openSnackbarError();
      });
  }

  private resetForm = () => {
    $("#user_name").val('');
    $("#user_email").val('');
    $("#message").val('');
  }

  private openSnackbarSuccess = () => this.setState({ openSuccess: true });
  private openSnackbarError = () => this.setState({ openError: true });

  private handleCloseSuccess = (event: any) => {
    debugger;
    if (event === 'clickaway') {
      return;
    }

    this.setState({ openSuccess: false });

  };

  private handleCloseError = (event: any) => {
    debugger;
    if (event === 'clickaway') {
      return;
    }
    this.setState({ openError: false });
  };


  // let useStyles = makeStyles((theme) => ({
  //   root: {
  //     width: '100%',
  //     '& > * + *': {
  //       marginTop: theme.spacing(2),
  //     },
  //   },
  // }));
}