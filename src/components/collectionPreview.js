import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

import APIString from '../misc-modules/backend-url';
import '../styles/collectionsPreview.css';


class CollectionPreview extends Component {
  constructor(props){
    super(props);
    this.state = {
      previewURL: "",
      desc: "",
      // remove trailing / from key so it can be displayed nicely
      previewTitle: this.props.imageKey.slice(0, this.props.imageKey.length -1),
      creationDate: this.props.created.split("T")[0]
    }
  }

  componentDidMount = () => {
    fetch(`${APIString}/collection-preview/${this.props.imageKey}`)
    .then(response => response.json())
    .then(response => this.setState({previewURL: response.URL}))

    fetch(`${APIString}/collection-description/${this.props.imageKey}`)
    .then(response => response.json())
    .then(response => this.setState({desc: response.desc}))


  }

  render() {
    return (
      <div className="PreviewContainer">
        <Link className="collectionLink" to={`collection/${this.props.imageKey}`}>
          <Card className="Preview">
            <CardImg className="previewIMG" width="50%" src={this.state.previewURL} alt="" />
            <CardBody>
              <CardTitle className="PreviewTitle">{this.state.previewTitle}</CardTitle>
              <CardText className="Description">{this.state.desc}</CardText>
              <CardText className="PreviewDate">
                <small>Collection created on {this.state.creationDate}</small>
              </CardText>
            </CardBody>
          </Card>
        </Link>
      </div>
    );
  }
}

export default CollectionPreview
