import React from 'react';
import { logo } from './SVG-images';
export default function Footer() {
    return <footer>
        <section className="footer-items">
            {logo}
        </section>
        <section className="footer-items">
            <div>
                <h3>Features</h3>
                <ul>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <div>
                <h3>Resources</h3>
                <ul>
                    <li>Block</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </div>
            <div>
                <h3>Company</h3>
                <ul>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
        </section>
        <section className="footer-items footer-socials">
            <div>
                <i className="fab fa-facebook-square"></i>
            </div>
            <div>
                <i className="fab fa-twitter"></i>
            </div>
            <div>
                <i className="fab fa-pinterest"></i>
            </div>
            <div>
                <i className="fab fa-instagram"></i>
            </div>
        </section>
    </footer>
}