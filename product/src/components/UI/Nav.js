import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class NavBar extends Component{
    render(){
        return( <div>           
            <Nav>
              <NavItem>
                <NavLink>Product Listing Application</NavLink>
              </NavItem>              
            </Nav>            
          </div>
        );
    }
}
export default NavBar;