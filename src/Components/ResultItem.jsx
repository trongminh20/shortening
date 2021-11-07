import React from 'react';
import { btnHover, btnMouseLeave } from './mouseEvents';
export default function ResultItem({ _original, _shorten, _error, _button }) {

    return <div className="result-item">
        <div className="original">
            <p className="original">
                {_original}
            </p>
        </div>
        <h4 className="error-message">{_error}</h4>
        <div className="shorten">
            <p>{_shorten}</p>
            {(_button !== "no") ? <button className="btn btn-copy" onMouseLeave={btnMouseLeave} onMouseOver={btnHover}>Copy</button> : ""}
        </div>
    </div>
}