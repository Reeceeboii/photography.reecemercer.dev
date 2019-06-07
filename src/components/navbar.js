import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/nav.css'

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
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
