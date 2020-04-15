import React from 'react';

import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';

import moment from 'moment';
const now = moment();
// console.log(now.format('MMM Do YYYY'));

export default class ExpenseForm extends React.Component {

    state = { // local component state
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false
    };

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

        // ^\d*(\.\d{0,2})?$
        // we're gonna use Regular Expressions for validation
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState( () => ({amount}) )
        } else {
            console.log("Currency validation failed");
        }
    }

    onDateChange = (createdAt) => {
        this.setState(()=>({
            createdAt
        }))
    }

    onFocusChange = ({focused}) => {
        this.setState(()=>({
            calendarFocused: focused
        }))
    }

    render(){
        return(

            <div>
                <h1>ExpenseForm</h1>
                <form>

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
                    isOutsideRange = {()=> false}
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

