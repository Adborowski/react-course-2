import React from 'react';

// since we're using the arrow function, this is a stateless functional component. we're using normal brackets (xyz) as shorthand for {return(xyz)}
const EditExpensePage = (props) => {

    console.log(props);

    onSubmit = (expense) => {
        console.log("X");
        console.log(expense);
    }

    return (
        <div className="component">This is EditExpensePage component. You're editing item {props.match.params.id}.</div>
    );
}

export default EditExpensePage;