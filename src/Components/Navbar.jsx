import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {

    return <nav>
        <Link to="/features">
            <div className="nav-items">
                <p>Features</p>
            </div>
        </Link>
        <Link to="/pricing">
            <div className="nav-items">
                <p>Pricing</p>
            </div>
        </Link>
        <Link to="/resources">
            <div className="nav-items">
                <p>Resources</p>
            </div>
        </Link>
        <Link to="/login">
            <div className="nav-items">
                <p>Login</p>
            </div>
        </Link>
        <Link to="/signup">
            <div className="nav-items"><button>Sign Up</button></div>
        </Link>
    </nav>

}