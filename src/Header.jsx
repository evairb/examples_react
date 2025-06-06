import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to='/' end>
        Home
      </NavLink>{' '}
      | <NavLink to='sobre'>Sobre</NavLink>
    </nav>
  );
};

export default Header;
