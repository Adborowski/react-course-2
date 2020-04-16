import React from 'react';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';

import moment from 'moment';
const now = moment();
// console.log(now.format('MMM Do YYYY'));

export default class ExpenseForm extends React.Component {

    constructor(props){

        super(props)

        this.state = { // local component state
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString(): '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState( () => ({description}) )
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState( () => ({note}) )
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

        // we're gonna use a Regular Expression for currency validation
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState( () => ({amount}) )
        } else {
            console.log("Currency validation failed");
        }
    }

    onDateChange = (createdAt) => { 
        if (createdAt){ // the condition prevents the user from deleting the content of the picker
            this.setState(()=>({
                createdAt
            }))
        } 
    }

    onFocusChange = ({focused}) => {
        this.setState(()=>({
            calendarFocused: focused
        }))
    }

    onSubmit = (e) => {

        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            
            // set error (this triggers conditional rendering of error message)
            this.setState(()=>({
                error: 'Error'
            }));

        } else {
            // clear error (in case you had one before, so it goes away)
            this.setState(()=>({
                error: ''
            }));

            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100, // gotta do this because amount is a string
                createdAt: this.state.createdAt.valueOf(), // .valueOf() is a Moment method
                note: this.state.note
            }); // this is defined in the parent component; it's one of the newer parts of ExpenseForm
        }
    }

    render(){
        return(

            <div>
                <h1>ExpenseForm</h1>
                <form onSubmit={this.onSubmit}>

                {this.state.error && <div style={{color: 'red'}}>Error - please provide description and amount</div>}

                    <input 
                    type="text" 
                    placeholder="description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange} // self defined above
                    >
                    </input>

                    <input
                    type="text" // we're gonna set up our own separate validation, so let's leave type as text
                    placeholder="amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    >
                    </input>

                    <SingleDatePicker
                    date = {this.state.createdAt} 
                    onDateChange = {this.onDateChange}
                    focused = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths = {1}
                    isOutsideRange = {()=> false} // always false, everything's in range
                    />

                    <textarea
                    placeholder="add a note"
                    value={this.state.note}
                    onChange={this.onNoteChange} // self defined above
                    >
                    </textarea>

                    <button>Add Expense</button>
                
                </form>
            </div>

        )
    } // end of render
} // end of class

