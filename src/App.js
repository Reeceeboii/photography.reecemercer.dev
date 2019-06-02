import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Home from './pages/home'

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>

          <Route exact={true} path='/' render={() => (
            <Home/>
          )}/>

        </div>
      </Router>
    );
  }
}

export default App;
