import React from 'react';

export default function StatisticItem({ _logo, _title, _content }) {

    return <article className="stt-items">
        <img src={_logo} alt="" className="logo" />
        <div>
            <h1>{_title}</h1>
            <p>{_content}</p>
        </div>
    </article>
}