import React, { useState, useEffect } from 'react';
import StatisticItems from './StatisticItems';

export default function Statistics() {
    const [items, setItems] = useState({});

    const getData = async () => {
        try {
            let data = await fetch("./data.json");
            let result = await data.json();
            setItems(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return <div>
        {
            Object.values(items).map(i => {
                return <StatisticItems _logo={i.logo}
                    _header={i.header}
                    _content={i.content} />
            })
        }
    </div>
}