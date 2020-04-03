console.log("[APP.JS]");

import ReactDOM from 'react-dom';
import React from 'react';
import '../node_modules/normalize.css/normalize.css' // css reset
import './styles/styles.scss';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AppRouter from './routers/AppRouter';


const appRoot = document.getElementById("app");

ReactDOM.render(<AppRouter/>, appRoot); // you can straight up stick your component JSX tag in there
