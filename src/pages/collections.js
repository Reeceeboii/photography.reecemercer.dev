import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import '../App.css';

import CollectionPreview from '../components/collectionPreview';

class Collections extends Component {
  render(){
    return (
        <div className="ContentSection">
          <h1 className="Header">Collections</h1>
          <Row>
          {
            this.props.collections.map(collection => (
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

export default Collections;