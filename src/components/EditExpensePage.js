import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

// since we're using the arrow function, this is a stateless functional component. we're using normal brackets (xyz) as shorthand for {return(xyz)}
const EditExpensePage = (props) => {

    console.log("PARAMS ID: "+props.match.params.id);

    return (
        <div>
        <ExpenseForm
        expense = {props.expense}
        onSubmit={(expense) => {
            console.log('updated', expense);
            props.dispatch(editExpense(props.expense.id, expense));
            props.history.push('/');
        }}
        />

        <button onClick={ () => {
            props.dispatch(removeExpense(props.expense.id));
            props.history.push('/');
        }}>
        Remove Expense</button>
        
        </div>
    );
}

const mapStateToProps = (state, props) => {

    return {
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage);