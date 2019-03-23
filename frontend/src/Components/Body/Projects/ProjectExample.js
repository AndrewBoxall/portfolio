import React, { Component } from 'react';
import './ProjectExample.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

class ProjectExample extends Component {
  render() {
    const comingSoon = this.props.wip;
    let cover;

    if (comingSoon) {

    }

    return (
        <div className="project-container" onClick={this.props.openModal}>
          <img className="project-thumbnail-img" src={this.props.image} alt="project thumbnail" ></img>
          <div className="project-info-wrapper">
            <h3>{this.props.name}</h3>
            {this.props.desc}
          </div>
          <FontAwesomeIcon className="fa-icon-eye" icon={faEye} />
        </div>
    );
  }
}

export default ProjectExample;
