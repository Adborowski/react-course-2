import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => {
    
    return (
    <div className="expenseListItem">

        <Link to={`/edit/${id}`}>
            <p>{description}</p>
        </Link>

        ${amount} - created {createdAt}

    </div>
    )
}

export default ExpenseListItem // without an arg in the first bracket, all it does is give access to store dispatch