import React from 'react';

export default function Result({ _original, _result }) {

    return <div className="result">
        <p className="original">
            {_original}
        </p>
        <p className="result">
            {_result}
        </p>
    </div>
}