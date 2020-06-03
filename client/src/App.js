import React, { Component } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CoreFooter from './components/CoreFooter';
import HelloBar from './components/HelloBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloBar />
        <Header />
        <Main />
        <Footer />
        <CoreFooter />
      </div>
    );
  }
}

export default App;
