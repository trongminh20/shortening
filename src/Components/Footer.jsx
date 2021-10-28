import React from 'react';
import { Link } from 'react-router-dom';
const Form = () => {
    return (
        <footer>
            <section className="logo"></section>
            <section className="site-map">
                <div className="items">
                    <h4>Features</h4>
                    <ul>
                        <Link>
                            <li>Link Shortening</li>
                        </Link>
                        <Link>
                            <li>Branded Links</li>
                        </Link>
                        <Link>
                            <li>Analytics</li>
                        </Link>
                    </ul>
                </div>
                <div className="items">
                    <h4>Resources</h4>
                    <ul>
                        <Link>
                            <li>Blog</li>
                        </Link>
                        <Link>
                            <li>Developers</li>
                        </Link>
                        <Link>
                            <li>Support</li>
                        </Link>
                    </ul>
                </div>
                <div className="items">
                    <h4>Company</h4>
                    <ul>
                        <Link>
                            <li>About</li>
                        </Link>
                        <Link>
                            <li>Our Team</li>
                        </Link>
                        <Link>
                            <li>Careers</li>
                        </Link>
                        <Link>
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
            </section>
            <section className="social-links">
                <div><i className="fab fa-facebook"></i></div>
                <div><i className="fab fa-twitter"></i></div>
                <div><i className="fab fa-instagram"></i></div>
                <div><i className="fab fa-pinterest"></i></div>
            </section>
        </footer>
    )

}

export default Form;