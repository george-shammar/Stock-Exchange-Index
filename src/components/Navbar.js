import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <h1>Stockistics</h1>
            <div>
            <Link to="/">Home </Link>
            <Link to="/detailPage">See Statistics</Link>
        </div>
        </div>
    )
}

export default NavBar;