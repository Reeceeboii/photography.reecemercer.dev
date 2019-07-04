import React from 'react';
import { Link } from 'react-router-dom';
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
      APIString = "https://rm-backend-services.herokuapp.com/photography";
    }

    fetch(`${APIString}/splash-image`)
    .then(splashURL => splashURL.json())
    .then(splashURL => this.setState({splashURL: splashURL.URL}))

  }

  render(){
    return (
      <div className="Home">
        <img className="backgroundImage" src={this.state.splashURL} alt =""></img>
        <div className="titleBlock">
          <h1 className="mainTitle">Reece Mercer</h1>
          <h1 className="mainSubtitle">photography</h1>
          <Link className="mainLink" tag={Link} to="/collections">View photos</Link>
          <h1 className="copy">&copy; Reece Mercer 2019</h1>
        </div>
      </div>
    );
  }
}

export default Home
