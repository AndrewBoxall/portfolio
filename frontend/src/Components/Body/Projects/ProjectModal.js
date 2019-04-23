import React, { Component } from 'react';
import './ProjectModal.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProjectModal extends Component {
  render() {
    return (
        <div className="project-modal-container">
          <img src={this.props.image} alt="project thumbnail" className="project-modal-img"></img>
          <p>{this.props.desc}</p>
          <div className="button-flex-container">
            <button id="explore">Visit website</button>
            <button id="codebase">View code on <FontAwesomeIcon icon={['fab', 'github']} /></button>
          </div>
        </div>
    );
  }
}

export default ProjectModal;
