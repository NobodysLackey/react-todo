import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            List Mania
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/'>Home</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/todos'>To Do List</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/tobuys'>To Buy List</Link>
        </nav>
    )
}

export default Header;