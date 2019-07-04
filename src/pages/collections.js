import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import '../App.css';

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
      APIString = "https://rm-backend-services.herokuapp.com/photography";
    }


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
              <Col xs="12" sm="12" md="6" xl="4">
                <CollectionPreview key={collection.Key} imageKey={collection.Key}
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
