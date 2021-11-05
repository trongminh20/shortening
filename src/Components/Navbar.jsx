import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from './SVG-images';

export default function Navbar() {
    return <nav>
        <Link to="/">
            <div className="logo">
                {logo}
            </div>
        </Link>
        <div className="nav-menu">
            <Link to="/features">
                <p>Features</p>
            </Link>
            <Link to="/pricing">
                <p>Pricing</p>
            </Link>
            <Link to="/resources">
                <p>Resouces</p>
            </Link>
        </div>
        <div className="">
            <Link to="/login">
                <div>Login</div>
            </Link>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
        </div>
    </nav>
}