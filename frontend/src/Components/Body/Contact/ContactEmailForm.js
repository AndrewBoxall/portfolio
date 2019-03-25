import React, { Component } from 'react';
import './ContactEmailForm.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ContactEmailForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      senderName: '',
      emailAddress: '',
      emailBody: ''
    };
    this.sendEmail = this.sendEmail.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  sendEmail(e){
    e.preventDefault();

    fetch('http://localhost:4000/email' , {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        senderName: this.state.senderName,
        emailAddress: this.state.emailAddress,
        emailBody: this.state.emailBody}),
      headers: {
        'Content-type': 'application/json'
      }
    });
    this.setState({senderName: '', emailAddress: '', emailBody: ''});
  }
  updateField(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <form id="contact-email-form" onSubmit={this.sendEmail}>
        <div className="flex-container">
          <div className="email-data-wrapper">
            <input
              id="email-sender-input"
              className="email-form-input"
              name="senderName"
              type="text"
              length="25"
              autocomplete="off"
              required
              value={this.state.senderName}
              onChange={this.updateField}>
            </input>
            <label className="floating-label" htmlFor="email-sender-input">Name</label>
            <FontAwesomeIcon className="fa-email-icon" icon={['fas', 'user']} />
          </div>
          <div className="email-data-wrapper">
            <input
              id="email-address-input"
              className="email-form-input"
              name="emailAddress"
              type="email"
              autocomplete="off"
              required
              value={this.state.emailAddress}
              onChange={this.updateField}>
            </input>
            <label className="floating-label" htmlFor="email-address-input">Email</label>
            <FontAwesomeIcon className="fa-email-icon" icon={['fas', 'envelope']} />
          </div>
        </div>
        <div className="email-data-wrapper">
          <textarea
            id="email-body-input"
            className="email-form-input"
            name="emailBody"
            type="text"
            autocomplete="off"
            required
            value={this.state.emailBody}
            onChange={this.updateField}>
          </textarea>
          <label className="floating-label" htmlFor="email-body-input">Message</label>
          <FontAwesomeIcon className="fa-email-icon" icon={['fas', 'edit']} />
        </div>
        <button id="send-email" type="submit">SEND</button>
      </form>
    );
  }
}

export default ContactEmailForm;
