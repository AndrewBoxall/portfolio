import React, { Component } from 'react';
import './Footer.css';
import scrollToBookmark from '../../javascripts/scrollToBookmark.js';
import logo from '../../images/aboxit-logo.png';

class Footer extends Component {
  constructor(props){
    super(props);

    this.scrollToBookmark = scrollToBookmark.bind(this);
  }
  render() {
    return (
        <footer id="footer">
          <div className="footer-logo-container">
            <img className="aboxit-logo" src={logo} alt="website footer logo"></img>
          </div>
          <div className="return-links">
            <ul>
              <li><a href="#navigation" onClick={this.scrollToBookmark.bind(this, "navigation")}>Home</a></li>
              <li><a href="#projects-section" onClick={this.scrollToBookmark.bind(this, "projects-section")}>Projects</a></li>
              <li><a href="#skills-section" onClick={this.scrollToBookmark.bind(this, "skills-section")}>Skills</a></li>
              <li><a href="#testimonials-section" onClick={this.scrollToBookmark.bind(this, "testimonials-section")}>Testimonials</a></li>
              <li><a href="#contact-section" onClick={this.scrollToBookmark.bind(this, "contact-section")}>Contact</a></li>
            </ul>
          </div>
        </footer>
    );
  }
}

export default Footer;
