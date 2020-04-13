import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => (
    <div className="expenseListItem">
        {description} - ${amount} - created {createdAt}
        <button onClick={ () => {dispatch(removeExpense({id})) } }>Remove Expense</button>
    </div>
)

export default connect()(ExpenseListItem) // without an arg in the first bracket, all it does is give access to store dispatch


//export default connect(mapStateToProps)(ExpenseListFilters);