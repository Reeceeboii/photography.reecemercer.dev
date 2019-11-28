import React from 'react';
import { Route, Switch} from "react-router-dom";
import './App.css';

import APIString from './misc-modules/backend-url';
import Nav from './components/navbar';
import Home from './pages/home';
import Collections from './pages/collections';
import Collection from './pages/collection';
import About from './pages/about';
import NotFound from './pages/404';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collections: []
    }
    
  }

  componentDidMount(){
    fetch(`${APIString}/collection-names`)
    .then(res => res.json())
    .then(res => this.setState({collections: res}))
  }

  checkCollectionValid(key){
    var found = false;
    this.state.collections.forEach(name => {
      if(name.Key === key){
        found = true;
      }
    })
    return found ? <Collection collectionName={key}/> : <NotFound/>;
  }

  render(){
    return (
      <Switch>
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
            <Collections collections={this.state.collections}/>
          </div>
        )}/>

        <Route exact={true} path='/collection/:key' render={({ match }) => (
          <div className="App">
            <Nav/>
            { this.checkCollectionValid(match.params.key) }
          </div>
        )}/>

        <Route render={() => (
          <div className="App">
            <Nav/>
            <NotFound />
          </div>
        )}/>
      </Switch>
    );
  }
}

export default App;
