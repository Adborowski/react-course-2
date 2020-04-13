import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

// since we're using the arrow function, this is a stateless functional component. we're using normal brackets (xyz) as shorthand for {return(xyz)}
const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>

);

export default ExpenseDashboardPage