import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import ProjectsSection from './Components/Body/Projects/ProjectsSection';
import SkillsSection from './Components/Body/Skills/SkillsSection';
import TestimonialsSection from './Components/Body/Testimonials/TestimonialsSection';
import ContactSection from './Components/Body/Contact/ContactSection';
import Footer from './Components/Footer/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

class App extends Component {
  render() {
    return (
        <>
          <Header />
          <ProjectsSection />
          <SkillsSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </>
    );
  }
}

export default App;
