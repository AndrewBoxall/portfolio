import React, { Component } from 'react';
import './Navigation.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import scrollToBookmark from '../../javascripts/scrollToBookmark.js';
import logo from '../../images/aboxit-logo.png';

class Navigation extends Component {
  constructor(props){
    super(props);

    this.scrollToBookmark = scrollToBookmark.bind(this);
  }
  render() {
    return (
      <div id="navigation">
        <img className="aboxit-logo" src={logo} alt="website header logo"></img>
        <div className="nav-container">
          <div id="dropdown-menu">
            <FontAwesomeIcon className="fa-menu-icon" icon={['fas', 'bars']}  />
            <p>MENU</p>
          </div>
          <ul className="bookmark-links-menu">
            <li><a className="nav-link" href="projects-section" onClick={this.scrollToBookmark.bind(this, "projects-section")}>Projects</a></li>
            <li><a className="nav-link" href="#skills-section" onClick={this.scrollToBookmark.bind(this, "skills-section")}>Skills</a></li>
            <li><a className="nav-link" href="#testimonials-section" onClick={this.scrollToBookmark.bind(this, "testimonials-section")}>Testimonials</a></li>
            <li><a className="nav-link" href="#contact-section" onClick={this.scrollToBookmark.bind(this, "contact-section")}>Contact</a></li>
          </ul>
        </div>

        <ul className="helper-links-menu">
          <li><a href="https://github.com/AndrewBoxall" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li>
            <a id="download-link" href="http://aboxit.com:3000/Andrew Boxall CV.pdf" target="_blank" rel="noopener noreferrer">CV
              <FontAwesomeIcon className="fa-download-icon" icon={['fas', 'file-download']}  />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navigation;
