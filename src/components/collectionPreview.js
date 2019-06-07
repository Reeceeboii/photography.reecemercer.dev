import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CollectionPreview extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default CollectionPreview
