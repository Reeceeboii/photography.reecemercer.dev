import React, { Component } from 'react';
import { Col, Row, Spinner } from 'reactstrap';
import {isMobile} from 'react-device-detect';

import '../App.css';
import '../styles/collection.css';

import SingleImage from '../components/singleImage';
import APIString from '../misc-modules/backend-url';


class Collection extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: 9,
      maxItems: null,
      loading: false,
      displayLoading: <Spinner color="secondary"/>,
      photoLinks: []
    }
  }

  componentDidMount = () => {
    this.refs.Scroll.addEventListener("scroll", () => {
      if(this.refs.Scroll.scrollTop + this.refs.Scroll.clientHeight >=
        this.refs.Scroll.scrollHeight){
          this.loadMore();
        }
    })


    fetch(`${APIString}/collection-contents/${this.props.collectionName}`)
    .then(response => response.json())
    .then(response => this.setState({ photoLinks: response }))
    .then(response => this.setState({ maxItems: this.state.photoLinks.length }))
    .then(response => isMobile ? this.setState({ items: 25 }) : this.setState({ items: this.state.items }))
  }

  renderItems = () => {
    var renderList = [];
    for(var i = 0; i < this.state.items; i++){
      const photo = this.state.photoLinks[i]
      let half, full;
      for(var key in photo){
        if(key === 'halfurl'){
          half = photo[key];
        }
        if(key === 'fullurl'){
          full = photo[key];
        }
      }
      
      renderList.push(
        <Col key={i} className="ImageCol" xs="4" sm="4" md="4" xl="4">
          <SingleImage halfurl={half} fullurl={full}/>
        </Col>
      );
    }
    return renderList;
  }


  loadMore = () => {
    if(this.state.items < this.state.maxItems){
      this.setState({ loading: true });
      this.setState({ items: this.state.items + 10, loading: false });
  
    }else{
      this.setState({ items: this.state.maxItems, loading: false, displayLoading: `You've reached the end of this collection! 
      More content coming soon :)` })
    }
    
  }

  render(){
    return (
        <div 
          className="ContentSection"
          ref="Scroll"
          >
          <h1 className="Header">{this.props.collectionName}</h1>
          <div className="CollectionContainer">
            <Row>
              {this.renderItems()}
            </Row>
            <div className="Loading">
              {this.state.displayLoading}
            </div>
          </div>
        </div>
    );
  }
}

export default Collection
