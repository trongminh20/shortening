import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionsCreators } from '../States';

import { btnHover, btnMouseLeave } from './mouseEvents';
import { useSelector } from 'react-redux';
export default function Form() {
    const dispatch = useDispatch();
    const request = useSelector(state => state.requestReducer);
    const { shortenLink, setResult } = bindActionCreators(actionsCreators, dispatch);
    const [bg, setBg] = useState("");
    let input = "";

    const handleChange = e => {
        input = e.target.value;
    }
    const handleSubmit = e => {
        e.preventDefault();
        //set request to requestState
        shortenLink(input);
    }

    //fetching data from shortening api
    const fetchData = () => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${request}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    throw res;
                }
            }).then(data => {
                setResult(data);
            });
    }
    const setFormBg = () => {
        if (window.innerWidth < 800) {
            setBg("./images/bg-shorten-mobile.svg");
        } else if (window.innerWidth >= 800) {
            setBg("./images/bg-shorten-desktop.svg");
        }
    }
    useEffect(() => {
        fetchData();
    }, [request])

    useEffect(() => {
        window.addEventListener('resize', setFormBg());
        return () => {
            window.removeEventListener('resize', setFormBg());
        }
    }, [])
    return <div className="form-block">
        <img className="form-bg" src={bg} alt="" />
        <form className="form" onSubmit={handleSubmit}>
            <input className="form-input" type="text" onChange={handleChange} placeholder="Shorten a link here" required />
            <button className="btn form-btn" type="submit" onMouseLeave={btnMouseLeave} onMouseOver={btnHover}>Submit</button>
        </form >
    </div>
}