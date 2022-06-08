import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Store from './redux/reduxStore.js';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
//  basename={process.env.PUBLIC_URL}
ReactDOM.render(
    <HashRouter>
        <Provider store={Store}>
            <App />
        </Provider>
    </HashRouter>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
