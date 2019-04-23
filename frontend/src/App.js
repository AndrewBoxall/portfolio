import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Header from './Components/Header/Header';

const SkillsSection = lazy(() => import('./Components/Body/Skills/SkillsSection'));
const TestimonialsSection = lazy(() => import('./Components/Body/Testimonials/TestimonialsSection'));
const ContactSection = lazy(() => import('./Components/Body/Contact/ContactSection'));
const Footer = lazy(() => import('./Components/Footer/Footer'));
const ProjectsSection = lazy(() => import('./Components/Body/Projects/ProjectsSection'));

library.add(fab, fas);

class App extends Component {
  render() {
    return (
        <>
          <Header />
          <Suspense fallback={<div></div>}>
            <ProjectsSection />
            <SkillsSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
          </Suspense>
        </>
    );
  }
}

export default App;
