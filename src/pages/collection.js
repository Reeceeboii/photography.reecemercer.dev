import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import '../App.css';
import '../styles/collection.css';

import SingleImage from '../components/singleImage';
import APIString from '../misc-modules/backend-url';
import CollectionPreview from '../components/collectionPreview';


class Collection extends Component {
  constructor(props){
    super(props);
    this.state = {
      photoLinks: []
    }
  }

  componentDidMount = () => {
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
                <Col key={photo.fullurl} className="ImageCol" xs="4" sm="4" md="4" xl="4">
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
