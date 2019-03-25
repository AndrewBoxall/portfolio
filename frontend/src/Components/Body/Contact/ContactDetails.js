import React, { Component } from 'react';
import './ContactDetails.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ContactDetails extends Component {
  render() {
    return (
      <div id="contact-details">
        <div className="contact-info-wrapper">
          <FontAwesomeIcon className="fa-contact-icon" icon={['fas', 'phone']} />
          <p>(09) 631 5388</p>
        </div>
        <div className="contact-info-wrapper">
          <FontAwesomeIcon className="fa-contact-icon" icon={['fas', 'mobile-alt']} />
          <p>021 025 76301</p>
        </div>
        <div className="contact-info-wrapper">
          <FontAwesomeIcon className="fa-contact-icon" icon={['fas', 'envelope']} />
          <p>andbox1@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default ContactDetails;
