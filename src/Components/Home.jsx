import React from 'react';
import Shorten from './Shorten';
import Header from './Header';
import Statistic from './Statistics';
import Boost from './Boost';
export default function Home() {
    return <>
        <Header />
        <Shorten />
        <Statistic />
        <Boost />
    </>
}