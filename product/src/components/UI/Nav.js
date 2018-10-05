import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter, Link } from 'react-router-dom';
import Routing from '../Routing'
class NavBar extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav>
            <NavItem>
              <NavLink>Product Listing Application</NavLink>
              <NavLink className="float"><Link to={{ pathname: '/Form' }}>Form</Link></NavLink>
              <NavLink className="float"><Link to={{ pathname: '/ProductList' }}>Product List</Link></NavLink>
              <NavLink className="float"><Link to={{ pathname: '/About' }}>About</Link></NavLink>
            </NavItem>            
          </Nav>
          <Routing/>
        </div>
      </BrowserRouter>
    );
  }
}
export default NavBar;