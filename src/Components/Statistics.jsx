import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionsCreators } from '../States';
import { bindActionCreators } from 'redux';
import StatisticItem from './StatisticsItem';
export default function Statistic() {
    const sttData = useSelector(state => state.sttDataReducer);
    const dispatch = useDispatch();
    const { setSttData } = bindActionCreators(actionsCreators, dispatch);

    const getData = async () => {
        try {
            const rawData = await fetch("./data.json");
            const data = await rawData.json();
            setSttData(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return <section>
        <h1>Advance Statistics</h1>
        {
            Object.values(sttData).map(item => {
                return <StatisticItem _logo={item.logo} _title={item.header} _content={item.content} />
            })
        }
    </section>
}