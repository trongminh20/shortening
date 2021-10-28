import React from 'react';
import ReactDOM from 'react-dom';
import { AppContextProvider } from './Components/AppContext';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
ReactDOM.render(
    <Router>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </Router>,
    document.getElementById('root')
)