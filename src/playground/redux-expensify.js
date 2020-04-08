console.log("[REDUX-EXPENSIFY.JS]");
import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE action
const addExpense = ({description = '', notes = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(), // from a library
        description,
        notes,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE action

const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE action

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER action

const setTextFilter = (textFilter = '') => ({
    type: 'SET_TEXT_FILTER',
    textFilter
});


const sortByAmount = (amount = 0) => ({
    type: 'SORT_BY_AMOUNT',
    amount
})

const sortByDate = (date = 0) => ({
    type: 'SORT_BY_DATE',
    date
})

// .filter basics - return a filtered array
    // var lucky = numbers.filter(function(number) {
    //     return number > 7;
    //   });

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    console.log("")
    console.log(action);
    switch (action.type){

        case 'ADD_EXPENSE':
            return [...state, action.expense];

        case 'REMOVE_EXPENSE':
            return state.filter((expense)=>{
                return expense.id !== action.id
            });

        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if (expense.id === action.id){

                    return {
                        ...expense, 
                        ...action.updates
                    }

                } else {

                    return expense
                    
                }
            })
        
        default: 
            return state;
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type){

        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.textFilter
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }

        default: 
            return state
    }
}

const store = createStore(
    combineReducers(
        {
            expenses: expensesReducer,
            filters: filtersReducer
        }
    )
);
console.log(store.getState());

store.subscribe(()=>{
    console.log(store.getState());
})

// const expenseOne = store.dispatch(addExpense({description: 'Pre-paid fee for hosting', amount: 100}));
// const expenseTwo = store.dispatch(addExpense({description: 'Lawyer to sue HostGator', amount: 100}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 420}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

const demoState = {
    expenses: [{
        id: 'qwerty',
        description: 'march rent',
        note: 'this is what i paid for my flat for march',
        amount: 54500, // represented in pennies
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

