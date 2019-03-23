import React, { Component } from 'react';
import './SkillsSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faLess } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class SkillsSection extends Component {
  render() {
    return (
      <div id="skills-section">
        <div id="top-background"></div>
        <div id="bottom-background"></div>
        <div id="middle-background">
          <h2>Technical Skills</h2>
          <p>I am always looking to learn the latest technologies and expand my skillset</p>
          <div className="container-row">
            <div><FontAwesomeIcon icon={faHtml5} /> HTML 5</div>
            <div><FontAwesomeIcon icon={faCss3Alt} /> CSS 3</div>
            <div><FontAwesomeIcon icon={faJs} /> Javascript</div>
            <div><FontAwesomeIcon icon={faLess} /> LESS</div>
          </div>
          <div className="container-row">
            <div><FontAwesomeIcon icon={faReact} /> React</div>
          </div>
          <div className="container-row">
            <div><FontAwesomeIcon icon={faNodeJs} /> Node JS</div>
            <div><FontAwesomeIcon icon={faGithub} /> Github</div>
          </div>
          <div className="container-row">
            <div><FontAwesomeIcon icon={faDatabase} /> MS SQL / Oracle / Mongo</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsSection;
