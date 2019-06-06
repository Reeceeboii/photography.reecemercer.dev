import React from 'react';
import '../App.css';
import '../styles/home.css';


class Home extends React.Component {
  constructor(props){
      super(props);
        this.state = {
          splashURL: ""
      }
  }

  componentDidMount(){
    let APIString = "";
    if(process.env.NODE_ENV !== 'production'){
      APIString = "/photography";
    }else{
      APIString = "https://perosnal-site-backend.herokuapp.com/photography";
    }

    fetch(`${APIString}/splash-image`)
    .then(splashURL => splashURL.json())
    .then(splashURL => this.setState({splashURL: splashURL.URL}))

  }

  render(){
    return (
      <div>
        <img className="backgroundImage" src={this.state.splashURL} alt =""></img>
        <h1 className="mainTitle">Reece Mercer</h1>
      </div>
    );
  }
}

export default Home
