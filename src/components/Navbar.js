import React from 'react';
import { Link } from 'react-router-dom';
import '../Index.css';

const NavBar = () => (
  <div className="d-flex mb-3 border">
    <h1 className="app-name">Stochastics</h1>
    <Link to="/" className="mx-5 btn btn-outline-primary">Home</Link>
  </div>
);

export default NavBar;
