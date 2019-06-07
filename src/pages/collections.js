import React, { Component } from 'react';
import '../App.css';
import '../styles/collections.css';

import CollectionPreview from '../components/collectionPreview';


class Collections extends Component {
  constructor(props){
    super(props);
    this.state = {
      collections: []
    }
  }

  componentDidMount(){
    let APIString = "";
    if(process.env.NODE_ENV !== 'production'){
      APIString = "/photography";
    }else{
      APIString = "https://perosnal-site-backend.herokuapp.com/photography";
    }


    fetch(`${APIString}/collection-names`)
    .then(res => res.json())
    .then(res => this.setState({collections: res}))
  }

  render(){
    return (
        <div className="ContentSection">
          <h1 className="Header">Collections</h1>

          {
            this.state.collections.map(collection => (
              <CollectionPreview name={collection.Key}/>
            ))
          }
        </div>
    );
  }
}

export default Collections
