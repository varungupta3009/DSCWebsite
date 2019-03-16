import React, { Component } from "react";
import { BrowserRouter as Router, Route,} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import navbar from './modules/navbar'
import intro from './modules/intro'
// import aboutUs from './modules/aboutUs'



class App extends Component {
  render() {
    return (
      <Router>
            <div id = 'main'>
                <div id = 'navbar'>
                    <Route component = {navbar}></Route>
                </div>
                <div id = 'introDiv'>
                    <Route component = {intro}></Route>
                </div>
            </div> 
      </Router>
    );
  }
}

export default App;