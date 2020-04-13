import React from 'react';
import ExpenseList from './ExpenseList';
import {connect} from 'react-redux';

// since we're using the arrow function, this is a stateless functional component. we're using normal brackets (xyz) as shorthand for {return(xyz)}
const ExpenseDashboardPage = () => (
    <ExpenseList/>
);

const mapStateToProps = (state)=>{
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseList);