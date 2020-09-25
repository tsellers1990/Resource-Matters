import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Main'
import PatronInfo from './components/patronInfo/PatronInfo';
import Videos from './components/Videos';
import VideoCarousel from './components/VideoCarousel/VideoCarousel';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path= "/">
          <Main />
        </Route>
        <Route path= "/patronInfo/signup">
          <PatronInfo />
        </Route>
        <Route path= "/videos">
          <Videos />
        </Route>
      </Router>
    </div>
  );
}

export default App;
