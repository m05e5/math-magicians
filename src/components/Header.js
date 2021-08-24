import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Math Magicians</h1>
    <nav>
      <ul className="navUl">
        <li>
          <Link to="/" className="navLink">home</Link>
        </li>
        |
        <li>
          <Link to="/calculator" className="navLink">calculator</Link>
        </li>
        |
        <li>
          <Link to="/quote" className="navLink">quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
