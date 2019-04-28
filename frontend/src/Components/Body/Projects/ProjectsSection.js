import React, { Component } from 'react';
import './ProjectsSection.css';
import ProjectExample from './ProjectExample';
import ProjectModal from './ProjectModal';
import ProjectModalBackground from './ProjectModalBackground';

import {
  lamodeSummary, lamodeDetailed,
  amourSummary, amourDetailed,
  wellnessStudioSummary, wellnessStudioDetailed,
  teacherSubHubSummary
}
from './ProjectInfo';

import clothingWebsite from '../../../images/fashionWebsite.jpg';
import clothingBanner from '../../../images/fashionWebsiteBanner.jpg';
import healthWebsite from '../../../images/healthWebsite.jpg';
import healthBanner from '../../../images/healthWebsiteBanner.jpg';
import pilatesWebsite from '../../../images/pilatesWebsite.jpg';
import pilatesBanner from '../../../images/pilatesWebsiteBanner.jpg';
import schoolWebsite from '../../../images/schoolWebsite.jpg';

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
  openModal(name, image, description, link){
    this.setState({
      modalOpen: true,
      modalName: name,
      modalImage: image,
      modalDesc: description,
      githubLink: link
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
              name="LaMode Clothing"
              desc={lamodeSummary}
              image={clothingWebsite}
              openModal={this.openModal.bind(this, 'LaMode Clothing', clothingBanner, lamodeDetailed, 'lamode')}
            />
            <ProjectExample
              name="Amour du Corps Pilates"
              desc={amourSummary}
              image={pilatesWebsite}
              openModal={this.openModal.bind(this, 'Amour du Corps Pilates', pilatesBanner, amourDetailed, 'amour-du-corps')}
            />
            <ProjectExample
              name="The Wellness Studio"
              desc={wellnessStudioSummary}
              image={healthWebsite}
              openModal={this.openModal.bind(this, 'The Wellness Studio', healthBanner, wellnessStudioDetailed, 'wellness-studio')}
            />
            <ProjectExample
              name="Teacher Sub Hub"
              desc={teacherSubHubSummary}
              image={schoolWebsite}
            />

        </div>
        {this.state.modalOpen && <ProjectModalBackground closeModal={this.closeModal} />}
        {this.state.modalOpen && 
        <ProjectModal name={this.state.modalName} desc={this.state.modalDesc} image={this.state.modalImage} link={this.state.githubLink}/>}
      </div>
    );
  }
}
export default ProjectsSection;
