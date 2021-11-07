import React from 'react';
import { footerLogo } from './SVG-images';
export default function Footer() {
    return <footer className="footer">
        <section className="footer-logo">
            {footerLogo}
        </section>
        <section className="footer-sitebar">
            <div>
                <h3>Features</h3>
                <div className="footer-sitebar-menu">
                    <div>Link Shortening</div>
                    <div>Branded divnks</div>
                    <div>Analytics</div>
                </div>
            </div>
            <div>
                <h3>Resources</h3>
                <div className="footer-sitebar-menu">
                    <div>Block</div>
                    <div>Developers</div>
                    <div>Support</div>
                </div>
            </div>
            <div>
                <h3>Company</h3>
                <div className="footer-sitebar-menu">
                    <div>About</div>
                    <div>Our Team</div>
                    <div>Careers</div>
                    <div>Contact</div>
                </div>
            </div>
        </section>
        <section className="footer-socials">
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