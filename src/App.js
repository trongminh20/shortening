import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Features from './Components/Features';
import Home from './Components/Home';
export default function App() {

    return <div className="app">
        <Navbar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/features" component={Features} />
        </Switch>
        <Footer />
    </div>
}