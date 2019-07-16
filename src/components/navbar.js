import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
         UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FiHardDrive, FiImage } from 'react-icons/fi';

import APIString from '../misc-modules/backend-url';
import '../styles/nav.css'

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      stats: {}
    };
  }

  componentDidMount = () => {
    fetch(`${APIString}/S3-server-stats`)
    .then(response => response.json())
    .then(response => this.setState({stats: response}))

  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
      <Navbar className="Navigation" light expand="md" fixed={`top`}>
        <NavbarToggler onClick={this.toggle} />
        <NavbarBrand href="/">Reece Mercer</NavbarBrand>
        <NavLink className="smallNavIcon" href="https://www.linkedin.com/in/reece-mercer/"><FaLinkedin/></NavLink>
        <NavLink className="smallNavIcon" href="https://github.com/Reeceeboii"><FaGithub/></NavLink>
        <NavLink className="smallNavIcon" href="https://www.instagram.com/reece_mercer/"><FaInstagram/></NavLink>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/collections">Collections</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://reecemercer.dev?ref=rmphotography">Parent site</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="statsPopover" tag={Link} to="#">Stats</NavLink>
            </NavItem>

            <UncontrolledPopover placement="bottom" target="statsPopover">
                <PopoverHeader>Website statistics</PopoverHeader>
                <PopoverBody>
                <FiImage className="statsIcon" size={25}/>{' '}
                    I am currently hosting {this.state.stats.imageCount} images across {this.state.stats.collectionCount} collections.
                </PopoverBody>
                <PopoverBody>
                <FiHardDrive className="statsIcon" size={25}/>{' '}
                    {this.state.stats.storageGiB} GiB{' - '}
                    ({this.state.stats.storageMiB} MiB)            
                </PopoverBody>
            </UncontrolledPopover>

            <NavItem>
              <NavLink className="largeNavIcon" href="https://www.linkedin.com/in/reece-mercer/"><FaLinkedin/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="largeNavIcon" href="https://github.com/Reeceeboii"><FaGithub/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="largeNavIcon" href="https://www.instagram.com/reece_mercer/"><FaInstagram/></NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation
