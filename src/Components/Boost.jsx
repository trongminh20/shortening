import React from 'react';
import { btnHover, btnMouseLeave } from './mouseEvents';
export default function Boost() {
    return <section className="boost">
        <img className="boost-bg" src="./images/bg-boost-desktop.svg" alt="" />
        <div className="boost-info">
            <h1>Boost your links today</h1>
            <button className="btn boost-btn" onMouseOver={btnHover} onMouseLeave={btnMouseLeave}>Get Started!</button>
        </div>
    </section>
}