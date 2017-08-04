import React, { Component } from 'react';
import Location from './components/Location';
// import Navbar from './components/Navbar';
// import MenuList from './components/MenuList';
// import Contact from './components/Contact';
import Description from './components/Description';
// import './index.css';
import MenuItem from './components/MenuItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Place your components in here!</h1>
        <Description />
        <MenuItem />
        {/* <Navbar /> */}
        <Location />  
      </div>
    );
  }
}

export default App;
