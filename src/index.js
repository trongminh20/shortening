import React from 'react';
import ReactDOM from 'react-dom';
// import { AppContextProvider } from './Components/AppContext';
import { BrowserRouter as Router } from 'react-router-dom';
// import "./SASS/index.scss";
import { Provider } from 'react-redux';
import { store } from './States/store';

import App from './App';
ReactDOM.render(
    // <Router>
    <Provider store={store}>
        <App />
    </Provider>,
    // </Router>,
    document.getElementById('root')
)