import React, { Component } from 'react';
import './ProjectExample.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProjectExample extends Component {
  render() {
    const viewableProject = this.props.openModal;
    let projectHover;

    if (viewableProject) {
      projectHover = <FontAwesomeIcon className="fa-icon-eye" icon={['fas', 'eye']} />;
    } else {
      projectHover = <div className="project-coming-soon">Coming soon</div>
    }

    return (
        <div className="project-container" onClick={this.props.openModal}>
          <img className="project-thumbnail-img" src={this.props.image} alt="project thumbnail" ></img>
          <div className="project-info-wrapper">
            <h3>{this.props.name}</h3>
            {this.props.desc}
          </div>
          {projectHover}
        </div>
    );
  }
}

export default ProjectExample;
