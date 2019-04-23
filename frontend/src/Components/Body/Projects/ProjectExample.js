import React, { Component } from 'react';
import './ProjectExample.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProjectExample extends Component {
  render() {
    const viewableProject = this.props.openModal;
    let projectHover;

    if (viewableProject) {
      projectHover = <FontAwesomeIcon icon={['fas', 'eye']} />;
    } else {
      projectHover = <div>Coming soon</div>
    }

    return (
        <div className="project-container" onClick={this.props.openModal}>
          <img className="project-thumbnail-img" src={this.props.image} alt="project thumbnail" ></img>
          <div className="project-info-wrapper">
            <h3>{this.props.name}</h3>
            {this.props.desc}
          </div>
          <div className="project-hover-element">{projectHover}</div>
        </div>
    );
  }
}
export default ProjectExample;