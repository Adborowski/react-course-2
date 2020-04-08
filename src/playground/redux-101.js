// console.log("[REDUX-101.JS] Remember the changed entry value in webpack config");

import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count}) => ({
    type: 'SET',
    count
})

const countReducer = (state = {count:0}, action) => {

    console.log(action);

    switch (action.type){

        case "INCREMENT": 
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count- action.decrementBy
            }
        case "SET":
            return{
                count: action.count
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return state
    }
}
    
const store = createStore(countReducer);


// don't use this
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});
// unsubscribe();

// let's increment the count
store.dispatch(incrementCount(10));

// let's decrement the count
store.dispatch({
    type: "DECREMENT",
    decrementBy: 10
}); // this is the longhand method prone to errors

store.dispatch(decrementCount({decrementBy : 5})); // this is the safe method

store.dispatch(setCount({count: 420}));

// let's reset
store.dispatch(resetCount());