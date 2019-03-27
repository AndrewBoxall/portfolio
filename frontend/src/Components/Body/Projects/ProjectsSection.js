import React, { Component } from 'react';
import './ProjectsSection.css';
import ProjectExample from './ProjectExample';
import ProjectModal from './ProjectModal';
import ProjectModalBackground from './ProjectModalBackground';

import {
  toastApparelSummary, toastApparelDetailed,
  tustinPilatesSummary, tustinPilatesDetailed,
  wellnessStudioSummary, wellnessStudioDetailed,
  teacherSubHubSummary
}
from './ProjectInfo';

import fashionWebsite from '../../../images/fashionWebsite.jpg';
import toastBanner from '../../../images/fashionWebsiteBanner.jpg';
import healthWebsite from '../../../images/healthWebsite.jpg';
import healthBanner from '../../../images/healthWebsiteBanner.png';
import pilatesWebsite from '../../../images/pilatesWebsite2.jpg';
import pilatesBanner from '../../../images/tustinPilatesBanner.jpg';
import schoolWebsite from '../../../images/schoolWebsite.png';

class ProjectsSection extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalOpen: false,
      modalName: '',
      modalImage: '',
      modalDesc: ''
    }
    this.closeModal = this.closeModal.bind(this);
  }
  openModal(name, image, description){
    this.setState({
      modalOpen: true,
      modalName: name,
      modalImage: image,
      modalDesc: description
    });
  }
  closeModal(){
    this.setState({modalOpen: false});
  }
  render() {
    return (
      <div id="projects-section">
        <h2>My latest work</h2>
        <p>Check out an ever expanding catalog of my current and future projects</p>
        <div className="project-examples-wrapper">
            <ProjectExample
              name="Toast Apparel"
              desc={toastApparelSummary}
              image={fashionWebsite}
              openModal={this.openModal.bind(this, 'Toast Apparel', toastBanner, toastApparelDetailed)}
            />
            <ProjectExample
              name="Tustin Pilates"
              desc={tustinPilatesSummary}
              image={pilatesWebsite}
              openModal={this.openModal.bind(this, 'Tustin Pilates', pilatesBanner, tustinPilatesDetailed)}
            />
            <ProjectExample
              name="The Wellness Studio"
              desc={wellnessStudioSummary}
              image={healthWebsite}
              openModal={this.openModal.bind(this, 'The Wellness Studio', healthBanner, wellnessStudioDetailed)}
            />
            <ProjectExample
              name="Teacher Sub Hub"
              desc={teacherSubHubSummary}
              image={schoolWebsite}
            />

        </div>
        {this.state.modalOpen && <ProjectModalBackground closeModal={this.closeModal} />}
        {this.state.modalOpen && <ProjectModal name={this.state.modalName} desc={this.state.modalDesc} image={this.state.modalImage} />}
      </div>
    );
  }
}

export default ProjectsSection;
