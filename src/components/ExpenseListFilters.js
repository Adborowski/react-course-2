import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses'
import {setTextFilter} from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
        }}>
        </input>
    </div>
)

const mapStateToProps = (state) =>{
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);