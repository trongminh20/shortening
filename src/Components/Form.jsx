import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionsCreators } from '../States';

export default function Form() {
    const dispatch = useDispatch();

    const { shortenLink, } = bindActionCreators(actionsCreators, dispatch);

    let input = "";

    const handleChange = e => {
        input = e.target.value;
    }
    const handleSubmit = e => {
        e.preventDefault();
        shortenLink(input);
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} required />
        <button type="submit">Submit</button>
    </form >
}