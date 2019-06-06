import React, { Component } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, DropdownItem } from 'reactstrap';
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
      <Navbar className="Navigation" light expand="md">
        <NavbarBrand href="/">Reece Mercer</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/collections">Collections</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://reecemercer.dev">Parent site</NavLink>
            </NavItem>
            <DropdownItem divider />
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/reece-mercer/"><FaLinkedin/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Reeceeboii"><FaGithub/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.instagram.com/reece_mercer/"><FaInstagram/></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation
