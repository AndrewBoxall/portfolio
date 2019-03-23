import React, { Component } from 'react';
import './ContactDetails.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

class ContactDetails extends Component {
  render() {
    return (
      <div id="contact-details">
        <div className="wrapper">
          <FontAwesomeIcon className="fa-contact-icon" icon={faPhone} />
          <p>(09) 631 5388</p>
        </div>
        <div className="wrapper">
          <FontAwesomeIcon className="fa-contact-icon" icon={faMobileAlt} />
          <p>021 025 76301</p>
        </div>
        <div className="wrapper">
          <FontAwesomeIcon className="fa-contact-icon" icon={faEnvelope} />
          <p>andbox1@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default ContactDetails;
