import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Main'
import PatronInfo from './components/patronInfo/PatronInfo';


function App() {
  return (
    <Router>
      <Route exact path= "/">
        <Main />
      </Route>
      <Route path= "/patronInfo/signup">
        <PatronInfo />
      </Route>
    </Router>
  );
}

export default App;
