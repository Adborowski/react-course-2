import React from 'react';

import AddOption from './AddOption.js';
import Options from './Options.js'
import Header from './Header.js'
import Action from './Action.js';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component{

    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () =>{

        this.setState(()=>({options: []  }))

    } 

    handleDeleteOption = (optionToRemove) =>{
        
        this.setState((prevState)=>({

            // .filter runs on each item in an array and returns a new array, in this case replacing options
            options: prevState.options.filter((option)=>{

                return optionToRemove !== option;
                // "option" is each item in the array
                // "optionToRemove" is an argument passed by the button
                // if the return expression evaluates to TRUE, the item stays in the new array
                // if the return expression evaluates to FALSE, the item is removed from the new array
                // so in this case, only the argument will be removed from the array, it's the only FALSE
                
                // you can further simplify this by removing the return syntax and doing it in line
                // i am not doing it - for the sake of readability
            })
        }))
    }

    handleAddOption = (option) =>{

        if(!option){
            return "Enter valid value"
        } else if(this.state.options.indexOf(option) > -1){
            return "Option already in the system"
        }

        this.setState((prevState)=>({options: prevState.options.concat(option)}))

        console.log(option);

    }

    handlePick = () => {

        let randomOptionNumber = Math.floor(Math.random()*this.state.options.length);
        let option = this.state.options[randomOptionNumber];
        // alert(this.state.options[randomOptionNumber]);

        this.setState(()=>({
            selectedOption: option
        }))

    } 

    handleClearSelectedOption = () => {
        this.setState(()=>({
            selectedOption: undefined
        }))
    }

    componentDidMount = () =>{ // this is a lifecycle function, class-based components only

        try{
            console.log("componentDidMount()")
            const json = localStorage.getItem('options')
            const options = JSON.parse(json);
            console.log(json);

            if (options){ // only if there is some data
                this.setState(()=>({options:options}))
                // set current app state to that data
                // this gives us persistence between page loads
            }

        }catch(e){

            console.log(e);

        }
        
        
    }

    componentDidUpdate = (prevProps, prevState) =>{
        if(prevState.options.length !== this.state.options.length){
            console.log("componentDidUpdate - saving data")
            const json = JSON.stringify(this.state.options);
            console.log(json);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount = () => {
        console.log("componentWillUnmount()")
    }

    render(){

        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a machine";

        return(

            <div>
                <Header title={title} subtitle={subtitle}/>
                
                <div className="container">

                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />

                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions} // this passes down the function as a props
                            handleDeleteOption={this.handleDeleteOption} // we're starting a prop chain here, later we pass on to option
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
            
                
                </div>
                
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
            
        )
    }
}

export {IndecisionApp as default}