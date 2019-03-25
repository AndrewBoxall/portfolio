import React, { Component } from 'react';
import './Navigation.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../images/ab-logo.png';

class Navigation extends Component {
  render() {
    return (
      <div id="navigation">
        <img className="site-logo" src={logo} alt="website header logo"></img>
        <div className="nav-container">
          <div id="dropdown-menu">
            <FontAwesomeIcon className="fa-menu-icon" icon={['fas', 'bars']}  />
            <p>MENU</p>
          </div>
          <ul className="bookmark-links-menu">
            <li><a className="nav-link" href="#projects-section">Projects</a></li>
            <li><a className="nav-link" href="#skills-section">Skills</a></li>
            <li><a className="nav-link" href="#testimonials-section">Testimonials</a></li>
            <li><a className="nav-link" href="#contact-section">Contact</a></li>
          </ul>
        </div>

        <ul className="helper-links-menu">
          <li><a href="https://github.com/AndrewBoxall">GitHub</a></li>
          <li>
            <a className="download-link">
              <span>CV</span>
              <FontAwesomeIcon className="fa-download-icon" icon={['fas', 'file-download']}  />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
