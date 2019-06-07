import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../styles/collectionsPreview.css';


class CollectionPreview extends Component {
  constructor(props){
    super(props);
    this.state = {
      previewURL: "",
      // remove trailing / from key so it can be displayed nicely
      previewTitle: this.props.imageKey.slice(0, this.props.imageKey.length -1),
      creationDate: this.props.created.split("T")[0]
    }
  }

  componentDidMount = () => {
    let APIString = "";
    if(process.env.NODE_ENV !== 'production'){
      APIString = "/photography";
    }else{
      APIString = "https://perosnal-site-backend.herokuapp.com/photography";
    }

    fetch(`${APIString}/collection-preview/${this.props.imageKey}`)
    .then(response => response.json())
    .then(response => this.setState({previewURL: response.URL}))

  }

  render() {
    return (
      <div className="PreviewContainer">
        <Card className="Preview">
          <CardImg className="previewIMG" width="50%" src={this.state.previewURL} alt="Card image cap" />
          <CardBody>
            <CardTitle className="PreviewTitle">{this.state.previewTitle}</CardTitle>
            <CardText className="PreviewDate">
              <small>Collection created on {this.state.creationDate}</small>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CollectionPreview
