import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import * as serviceWorker from './serviceWorker';
import Router from './components/router';

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();