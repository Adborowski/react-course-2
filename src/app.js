console.log("[APP.JS]");

import ReactDOM from 'react-dom';
import React from 'react';
import '../node_modules/normalize.css/normalize.css' // css reset
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters';
import {Provider} from 'react-redux';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

store.dispatch(addExpense({description: 'water bill', notes:'paid this for water', amount: 4500, createdAt: 600}));
store.dispatch(addExpense({description: 'gas bill', notes:'paid this for gas', amount: 3200, createdAt: 400}));
store.dispatch(addExpense({description: 'car bill', notes:'paid this for the car', amount: 2000, createdAt: 800}));
store.dispatch(addExpense({description: 'tea', notes:'paid this for tea', amount: 4200, createdAt: 200}));

const appRoot = document.getElementById("app");

const jsx = (
    <Provider store={store}> 
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, appRoot); // you can straight up stick your component JSX tag in there
