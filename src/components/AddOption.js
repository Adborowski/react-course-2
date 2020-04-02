import React from 'react';

export default class AddOption extends React.Component{

    state = {
        error: undefined
    }

    // we're using arrow function for methods here. they take whatever "this" keyword exists in the parent scope, ie the class instance, so there's no need for binding

    handleAddOption = (e) =>{
        e.preventDefault();
        const option = e.target.elements.newOption.value.trim();
        const error = this.props.handleAddOption(option);
        // this.props.handleAddOption(option);

        this.setState(()=>({error: error}))

        if (!error){
            e.target.elements.newOption.value = '';
        }
    }
 
    render(){
        return(
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}> 
                    <input className="add-option__input" id="txtNewOption" type="text" name="newOption" placeholder="new option text"></input>
                    <button className="button">Submit</button>
                </form> 
            </div>
        )
    }
}