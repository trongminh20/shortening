import React, { useState, useEffect } from 'react';
import { btnHover, btnMouseLeave } from './mouseEvents';
export default function Boost() {
    const [bg, setBg] = useState("");

    const setBackground = () => {
        if (window.innerWidth < 800) {
            setBg("./images/bg-boost-mobile.svg");
        } else if (window.innerWidth >= 800) {
            setBg("./images/bg-boost-desktop.svg");
        }
    }
    useEffect(() => {
        window.addEventListener('resize', setBackground());
        return () => {
            window.removeEventListener('resize', setBackground());
        }
    }, [])
    return <section className="boost">
        <img className="boost-bg" src={bg} alt="" />
        <div className="boost-info">
            <h1>Boost your links today</h1>
            <button className="btn boost-btn" onMouseOver={btnHover} onMouseLeave={btnMouseLeave}>Get Started!</button>
        </div>
    </section>
}