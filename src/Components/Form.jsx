import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionsCreators } from '../States';
import { formBgDesktop, formBgMobile } from './SVG-images';
import { btnHover, btnMouseLeave } from './mouseEvents';
export default function Form() {
    const dispatch = useDispatch();

    const { shortenLink } = bindActionCreators(actionsCreators, dispatch);

    let input = "";

    const handleChange = e => {
        input = e.target.value;
    }
    const handleSubmit = e => {
        e.preventDefault();
        shortenLink(input);
    }

    return <form className="form" onSubmit={handleSubmit}>
        <input className="form-input" type="text" onChange={handleChange} required />
        <button className="btn form-btn" type="submit" onMouseLeave={btnMouseLeave} onMouseOver={btnHover}>Submit</button>
    </form >
}