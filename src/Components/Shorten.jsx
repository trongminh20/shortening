import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionsCreators } from '../States';
import Form from './Form';
import { formBgDesktop, formBgMobile } from './SVG-images';
import { btnHover, btnMouseLeave } from './mouseEvents';
import ResultItem from './ResultItem';
export default function Shorten() {
    const results = useSelector(state => { return state.resultReducer });
    console.log(results);
    return <div>
        <div className="form-block">
            <img className="form-bg" src="./images/bg-shorten-desktop.svg" alt="" />
            <Form />
        </div>
        <div className="result-list">
            {
                (results.length !== 0) ? results.map(res => {
                    if (res.ok) {
                        return <ResultItem _original={res?.result?.original_link} _shorten={res?.result?.short_link2} />
                    } else {
                        return <ResultItem _error="There is no Link was sent" _button="no" />
                    }

                }) : <ResultItem _error="No Link" _button="no" />
            }
        </div>
    </div>
}