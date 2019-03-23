//HomeBody.js is here incase I add routing and extra pages, like splitting Contact and Project sections into their own pages//
import React, { Component } from 'react';
import './HomeBody.css';

import ProjectsSection from './Projects/ProjectsSection';
import SkillsSection from './Skills/SkillsSection';
import TestimonialsSection from './Testimonials/TestimonialsSection';
import ContactSection from './Contact/ContactSection';

class HomeBody extends Component {
  render() {
    return (
      <body>
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </body>
    );
  }
}

export default HomeBody;
