import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionsCreators } from '../States';
import { bindActionCreators } from 'redux';
import StatisticItem from './StatisticsItem';
import Shorten from './Shorten';
import Form from './Form';
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


    return <section className="stt-block" >
        <div className="input-link">
            <Form />
        </div>
        <Shorten />
        <div className="statistics">
            <div className="block-title">
                <h1>Advance Statistics</h1>
            </div>
            <div className="stt-items-list">
                {
                    Object.values(sttData).map(item => {
                        return <StatisticItem _id={item.header.replace(" ", "-").toLowerCase()} _logo={item.logo} _title={item.header} _content={item.content} />
                    })
                }
            </div>
        </div>
    </section>
}