import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return <nav>
        <div className="navbar-items">
            <Link to="/">
                <img src="" alt="" />
            </Link>
            <Link to="/features">
                <div><p>Features</p></div>
            </Link>
            <Link to="/pricing">
                <div>
                    <p>Pricing</p>
                </div>
            </Link>
            <Link to="/resources">
                <div>
                    <p>Resources</p>
                </div>
            </Link>
        </div>
        <div className="navbar-items">
            <Link to="/login">
                <div>
                    <p>Login</p>
                </div>
            </Link>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
        </div>
    </nav>
}