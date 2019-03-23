import React, { Component } from 'react';
import './Footer.css';

import logo from '../../images/ab-logo.png';

class Footer extends Component {
  render() {
    return (
        <footer id="footer">
          <div className="col-1">
            <img className="site-logo" src={logo} alt="website header logo"></img>

          </div>
          <div className="return-links col-2">
            <ul>
              <li><a href="#navigation">Home</a></li>
              <li><a href="#projects-section">Projects</a></li>
              <li><a href="#skills-section">Skills</a></li>
              <li><a href="#testimonials-section">Testimonials</a></li>
              <li><a href="#contact-section">Contact</a></li>
            </ul>
          </div>
        </footer>
    );
  }
}

export default Footer;
