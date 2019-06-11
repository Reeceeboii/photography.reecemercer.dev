import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import '../App.css';
import '../styles/collections.css';

import CollectionPreview from '../components/collectionPreview';


class Collection extends Component {
  constructor(props){
    super(props);
    this.state = {
      photoLinks: []
    }
  }

  componentDidMount = () => {
    let APIString = "";
    if(process.env.NODE_ENV !== 'production'){
      APIString = "/photography";
    }else{
      APIString = "https://perosnal-site-backend.herokuapp.com/photography";
    }

    fetch(`${APIString}/collection-half-res/${this.props.collectionName}`)
    .then(response => response.json())
    .then(response => this.setState({photoLinks: response}))

  }

  render(){
    return (
        <div className="ContentSection">
          <h1 className="Header">{`collection name here`}</h1>
          {
            this.state.photoLinks.map(photo => (
              <img src={photo.url} alt=""/>
            ))
          }
        </div>
    );
  }
}

export default Collection
