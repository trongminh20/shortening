import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import ListResult from './ListResults';
import Statistics from './Statistics';
import Footer from './Footer';
export default function Home() {

    return <>
        <Navbar />
        <Header />
        <ListResult />
        <Statistics />
        <Footer />
    </>
}