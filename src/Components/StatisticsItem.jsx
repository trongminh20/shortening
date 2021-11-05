import React from 'react';

export default function StatisticItem({ _id, _logo, _title, _content }) {

    return <div id={_id} className="stt-items">
        <div className="item-logos"><img src={_logo} alt="" /></div>
        <div className="item-info">
            <h3>{_title}</h3>
            <p>{_content}</p>
        </div>
    </div>
}