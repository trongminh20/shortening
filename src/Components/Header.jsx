import React from 'react';
import { HeaderImg } from './SVG-images';
export default function Header() {
    return <header className="header">
        <section className="header-intro">
            <h1 className="intro-title">More than just shorter links</h1>
            <p className="intro-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sint! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, magni?
            </p>
            <button className="header-btn">Get Started</button>
        </section>
        <section className="header-img">
            {HeaderImg}
        </section>
    </header>
}