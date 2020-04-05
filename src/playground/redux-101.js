// console.log("[REDUX-101.JS] Remember the changed entry value in webpack config");

import {createStore} from 'redux';

const store = createStore( (state = {count:0}, action) => {

    switch (action.type){

        case "INCREMENT": 

            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count+incrementBy
            }

        case "DECREMENT":

            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1
            return {
                count: state.count-decrementBy
            }

        case "RESET":
            return {
                count: 0
            }

        default:
            return state

    }
});

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

// unsubscribe();

// let's increment the count
store.dispatch({
    type: "INCREMENT",
    incrementBy: 5
});

// let's increment the count
store.dispatch({
    type: "INCREMENT"
});

// let's reset
store.dispatch({
    type: "RESET"
});

// let's decrement the count
store.dispatch({
    type: "DECREMENT"
});