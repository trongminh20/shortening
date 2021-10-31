import React from 'react';

export default function StatisticItems({ _logo, _header, _content }) {
    return <div className="st-items">
        <img className="logo" src={_logo} alt="" />
        <h3 className='header'>{_header}</h3>
        <p className="content">{_content}</p>
    </div>
}