import React, { Component } from 'react';
import './SkillsSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SkillsSection extends Component {
  render() {
    return (
      <div id="skills-section">
        <div>
          <h2>Technical Skills</h2>
          <p>I am always looking to learn the latest technologies and expand my skillset</p>
          <div className="container-row">
            <div><FontAwesomeIcon icon={['fab', 'html5']} /> HTML 5</div>
            <div><FontAwesomeIcon icon={['fab', 'css3-alt']} /> CSS 3</div>
            <div><FontAwesomeIcon icon={['fab', 'js']} /> Javascript</div>
            <div><FontAwesomeIcon icon={['fab', 'less']} /> LESS</div>
          </div>
          <div className="container-row">
            <div><FontAwesomeIcon icon={['fab', 'react']} /> React</div>
          </div>
          <div className="container-row">
            <div><FontAwesomeIcon icon={['fab', 'node-js']} /> Node JS</div>
            <div><FontAwesomeIcon icon={['fab', 'github']} /> Github</div>
          </div>
          <div className="container-row">
            <div><FontAwesomeIcon icon={['fas', 'database']}  /> MS SQL / Oracle / Mongo</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsSection;
