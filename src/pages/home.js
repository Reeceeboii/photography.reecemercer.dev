import React from 'react'
import '../App.css'
import '../styles/home.css'

class Home extends React.Component {
  constructor(props){
      super(props);
        this.state = {
          message: {}
      }
  }

  componentDidMount(){
    let APIString = "";
    if(process.env.NODE_ENV !== 'production'){
      APIString = "/photography";
    }else{
      APIString = "https://perosnal-site-backend.herokuapp.com/photography";
    }

    fetch(`${APIString}/`)
    .then(message => message.json())
    .then(message => this.setState({message}))

  }

  render(){
    return (
      <div>
        <h3>{this.state.message.message}</h3>
      </div>
    );
  }
}

export default Home
