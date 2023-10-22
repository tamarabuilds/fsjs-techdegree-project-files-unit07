import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink to="/" end style={({isActive}) => isActive? {background: 'tomato'} : undefined }>Home</NavLink></li>
      <li><NavLink to="about" className={({isActive}) => isActive ? 'custom-class' : undefined}>About</NavLink></li>
      <li><NavLink to="teachers">Teachers</NavLink></li>
      <li><NavLink to="courses">Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;