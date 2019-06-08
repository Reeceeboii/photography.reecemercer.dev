import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Nav from './components/navbar'
import Home from './pages/home'
import Collections from './pages/collections'
import About from './pages/about'

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Nav/>
              <Home/>
            </div>
          )}/>

          <Route exact={true} path='/about' render={() => (
            <div className="App">
              <Nav/>
              <About/>
            </div>
          )}/>

          <Route exact={true} path='/collections' render={() => (
            <div className="App">
              <Nav/>
              <Collections/>
            </div>
          )}/>

        </div>
      </Router>
    );
  }
}

export default App;
