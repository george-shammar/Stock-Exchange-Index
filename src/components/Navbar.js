import React from 'react';
import { Link } from 'react-router-dom';
import '../Index.css';

const NavBar = () => (
  <div className="d-flex">
    <h1 className="app-name">Stockastics</h1>
    <Link to="/" className="mx-5 mt-3">Home</Link>
  </div>
);

export default NavBar;
