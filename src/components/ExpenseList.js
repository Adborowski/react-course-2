import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

// the props here are dependent on Provider and Connect from React-Redux
// for more, see app.js and ExpenseDashboardPage.js

const ExpenseList = (props) => (
    <div className="component">
        <h1>Expense List</h1>
        <ol>
            {props.expenses.map((expense, index)=>(
                <ExpenseListItem key = {expense.id} {...expense}/>
            ))}
        
        </ol>
    </div>
)

const mapStateToProps = (state) =>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);