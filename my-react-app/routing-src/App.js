import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
