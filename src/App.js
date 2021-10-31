import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Form from './Components/Form';
import ListResult from './Components/ListResults';
import Statistics from './Components/Statistics';
import Features from './Components/Features';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
export default function App() {
    return <div className="app">
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/features" component={Features} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
        </Switch>
    </div>
}