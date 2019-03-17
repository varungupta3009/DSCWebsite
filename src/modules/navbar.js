import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import logo from '../images/webpage/dsc.png'


class navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      dsc: 'Developer Student Club',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color = 'dark' dark expand="md" fixed="top" id = 'navbar' >
          <NavbarBrand href="/"><img src = {logo} alt = 'dsc.png' id = 'dsc' />{this.state.dsc}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#about" id = 'aboutUs'>About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#team" id = 'Team'>Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" id = 'events'>Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = '' id = 'contactUs'>Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default navbar
