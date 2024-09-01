import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Menuitems } from './Menuitems';

class Navbar extends Component {
  render() {
    return (
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>trekOtour</h1>

        <ul className='nav-menu'>
          {Menuitems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className=''></i>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
