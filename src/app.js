console.log("[APP.JS]");

import ReactDOM from 'react-dom';
import React from 'react';
import '../node_modules/normalize.css/normalize.css' // css reset
import './styles/styles.scss';

const appRoot = document.getElementById("app");

ReactDOM.render(<p>Welcome to Adam's ReactJS boilerplate.</p>, appRoot); // you can straight up stick your component JSX tag in there
