console.log("[REDUX-EXPENSIFY.JS]");
import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// action generators

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

const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (textFilter = '') => ({
    type: 'SET_TEXT_FILTER',
    textFilter
});

const sortByAmount = (amount = undefined) => ({
    type: 'SORT_BY_AMOUNT',
    amount
});

const sortByDate = (date = undefined) => ({
    type: 'SORT_BY_DATE',
    date
});

const setStartDate = (startDate = undefined) => ({ // there is actually no need for the default - undefined parameters already have that default
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})

// .filter basics - return a filtered array
    // var lucky = numbers.filter(function(number) {
    //     return number > 7;
    //   });

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    // console.log(action);
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
        
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            }

        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            }

        default: 
            return state
    }
}

// creating the store

const store = createStore(
    combineReducers(
        {
            expenses: expensesReducer,
            filters: filtersReducer
        }
    )
);

// functions to get VISIBLE expenses (filtered, sorted etc)

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=>{

        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // always results in if it's not a number ie nothing was input
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof expense.description !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a,b)=>{
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }

        // this will put greater value first
        if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    });
    
}

// subscribing for monitoring the state on every change

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(state.filters);
    console.log(visibleExpenses);
})

// dummy expenses

const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 100, createdAt: 1000}));
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 420}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate()); // empty parameter to CLEAR the start date

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(1250));

// store.dispatch(setTextFilter('water'));
// store.dispatch(setTextFilter(''));
// store.dispatch(setTextFilter('rEnT'));

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

