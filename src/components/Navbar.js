import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <h1>Stockastics</h1>
            <div>
            <Link to="/">Home </Link>
        </div>
        </div>
    )
}

export default NavBar;