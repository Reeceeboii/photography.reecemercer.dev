import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MdFileDownload, MdCancel } from 'react-icons/md';

import '../styles/singleImage.css'

class SingleImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({ modal: !prevState.modal }));
  }


  render() {
        const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Link><img className="SingleImage" src={this.props.halfurl} onClick={this.toggle} alt=""/></Link>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="xl">
          <ModalBody>
            <img className="LargeSingleImage" src={this.props.halfurl} alt=""/>
          </ModalBody>
          <ModalFooter>
            <a href={this.props.fullurl}>
              <Button color="primary"><MdFileDownload/>Go to full size image</Button>
            </a>
            <Button color="secondary" onClick={this.toggle}><MdCancel/></Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SingleImage
