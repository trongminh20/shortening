import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionsCreators } from '../States';
import Form from './Form';

export default function Shorten() {
    const result = useSelector(state => { return state.resultReducer });
    const request = useSelector(state => { return state.requestReducer });
    const dispatch = useDispatch();
    const { setResult } = bindActionCreators(actionsCreators, dispatch);

    useEffect(() => {
        setResult(request);
    })

    return <div>
        <p>{result}</p>
        <Form />
    </div>
}