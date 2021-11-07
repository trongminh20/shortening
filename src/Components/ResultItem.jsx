import React from 'react';
import { btnHover, btnMouseLeave } from './mouseEvents';
export default function ResultItem({ _original, _shorten, _error, _button }) {

    return <div className="result-item">
        <div className="original-link">
            <p>
                {(_error) ? _error : _original}
            </p>
        </div>
        <div className="shorten-link">
            {_shorten ? <p>{_shorten}</p> : ""}
            {(_button !== "no") ?
                <button className="btn btn-copy"
                    onMouseLeave={btnMouseLeave}
                    onMouseOver={btnHover} >Copy </button> : ""}
        </div>
    </div>
}