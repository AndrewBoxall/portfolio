import React, { Component } from 'react';
import './ProjectModal.css';

class ProjectModal extends Component {
  render() {
    return (
        <div className="project-modal-container">
          <img src={this.props.image} alt="project thumbnail" className="project-modal-img"></img>
          <p>{this.props.desc}</p>
          <button id="explore">Visit</button>
        </div>
    );
  }
}

export default ProjectModal;
