// Dependencies
import React, { Component } from 'react';

// Components
import Footer from 'components/partials/Footer'
import NavigationBar from 'components/partials/NavigationBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <Footer/>
      </div>
    );
  }
}

export default App;
