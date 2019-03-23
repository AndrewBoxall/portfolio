import React, { Component } from 'react';
import './ContactSection.css';

import ContactDetails from './ContactDetails';
import ContactEmailForm from './ContactEmailForm';

class ContactSection extends Component {
  render() {
    return (
      <div id="contact-section">
        <h2>Contact</h2>
        <p>Want to work with me, or just get in touch? Contact me below:</p>
          <div className="flex-row-container">
            <ContactEmailForm />
            <ContactDetails />
          </div>
      </div>
    );
  }
}

export default ContactSection;
