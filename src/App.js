import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
export default function App() {
    return <div>
        <Navbar />
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
    </div>
}