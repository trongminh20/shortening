import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionsCreators } from '../States';
import { formBgDesktop, formBgMobile } from './SVG-images';
import { btnHover, btnMouseLeave } from './mouseEvents';
import { useSelector } from 'react-redux';
export default function Form() {
    const dispatch = useDispatch();
    const request = useSelector(state => state.requestReducer);
    const { shortenLink, setResult } = bindActionCreators(actionsCreators, dispatch);

    let input = "";

    const handleChange = e => {
        input = e.target.value;
    }
    const handleSubmit = e => {
        e.preventDefault();
        //set request to requestState
        shortenLink(input);
    }

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

    useEffect(() => {
        fetchData();
    }, [request])

    return <form className="form" onSubmit={handleSubmit}>
        <input className="form-input" type="text" onChange={handleChange} required />
        <button className="btn form-btn" type="submit" onMouseLeave={btnMouseLeave} onMouseOver={btnHover}>Submit</button>
    </form >
}