import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import HomepageBody from './Components/Body/HomeBody';
import Footer from './Components/Footer/Footer';


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
