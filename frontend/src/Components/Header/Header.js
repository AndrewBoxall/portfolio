import React, { Component } from 'react';
import './Header.css';
import Navigation from './Navigation';

class Header extends Component {
  render() {
    return (
        <header id="site-header">
          <Navigation />
          <div id="about-information">
            <p>
              Hello World! <br /><br />
              My name is Andrew and I am a developer with a keen interest in both front-end
              and back-end web technologies.<br /><br />
              Thanks for checking out my portfolio and my projects below.<br /><br />
              I look forward to working with you in the future.
            </p>
          </div>
        </header>
    );
  }
}

export default Header;
