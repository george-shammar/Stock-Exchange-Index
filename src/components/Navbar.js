import React from 'react';
import { Link } from 'react-router-dom';
import '../Index.css';

const NavBar = () => (
  <div>
    <h1 className="app-name">Stockastics</h1>
    <div>
      <Link to="/">Home</Link>
    </div>
  </div>
);

export default NavBar;
