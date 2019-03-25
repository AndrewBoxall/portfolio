import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import HomepageBody from './Components/Body/HomeBody';
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
          <HomepageBody />
          <Footer />
        </>
    );
  }
}

export default App;
