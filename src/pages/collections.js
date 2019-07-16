import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import '../App.css';

import APIString from '../misc-modules/backend-url';
import CollectionPreview from '../components/collectionPreview';


class Collections extends Component {
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

  render(){
    return (
        <div className="ContentSection">
          <h1 className="Header">Collections</h1>

          <Row>
          {
            this.state.collections.map(collection => (
              <Col key={collection.Key} xs="12" sm="12" md="6" xl="4">
                <CollectionPreview imageKey={collection.Key}
                created={collection.LastModified}/>
              </Col>
            ))
          }
          </Row>
        </div>
    );
  }
}

export default Collections
