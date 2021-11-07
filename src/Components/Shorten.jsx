import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { actionsCreators } from '../States';
// import Form from './Form';
import ResultItem from './ResultItem';
export default function Shorten() {
    const results = useSelector(state => { return state.resultReducer });
    // const [bg, setBg] = useState("");

    // const setFormBg = () => {
    //     if (window.innerWidth < 800) {
    //         setBg("./images/bg-shorten-mobile.svg");
    //     } else if (window.innerWidth >= 800) {
    //         setBg("./images/bg-shorten-desktop.svg");
    //     }
    // }
    // console.log(bg);
    // useEffect(() => {
    //     window.addEventListener('resize', setFormBg());
    //     return window.removeEventListener('resize', setFormBg());
    // }, [])
    // return <div className="shorten">
    {/* <div className="form-block">
            <img className="form-bg" src={bg} alt="" />
            <Form />
        </div> */}
    return <div className="result-list">
        {
            (results.length !== 0) ? results.map(res => {
                if (res.ok) {
                    return <ResultItem _original={res?.result?.original_link} _shorten={res?.result?.short_link2} />
                } else {
                    return <ResultItem _error="There is no Link was sent" _button="no" />
                }

            }) : ""
        }
    </div>
    // </div>
}