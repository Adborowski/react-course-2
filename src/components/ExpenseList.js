import React from 'react';

// the props here are dependent on Provider and Connect from React-Redux
// for more, see app.js and ExpenseDashboardPage.js

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.filters.text}
        {props.expenses.length}
    </div>
)

export default ExpenseList;