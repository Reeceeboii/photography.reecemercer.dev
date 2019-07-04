import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import '../App.css';
import '../styles/collection.css';

import SingleImage from '../components/singleImage';

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
      APIString = "https://personal-site-backend.herokuapp.com/photography";
    }

    fetch(`${APIString}/collection-contents/${this.props.collectionName}`)
    .then(response => response.json())
    .then(response => this.setState({photoLinks: response}))

  }

  render(){
    return (
        <div className="ContentSection">
          <h1 className="Header">{this.props.collectionName}</h1>
          <div className="CollectionContainer">
            <Row>
            {
              this.state.photoLinks.map(photo => (
                <Col xs="12" sm="12" md="4" xl="4">
                  <SingleImage halfurl={photo.halfurl} fullurl={photo.fullurl}/>
                </Col>
              ))
            }
            </Row>
          </div>
        </div>
    );
  }
}

export default Collection
