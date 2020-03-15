class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            options: props.options
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    render(){

        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a machine";

        return(

            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} // this passes down the function as a props
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
            
        )
    }

    handleDeleteOptions(){

        this.setState(()=>{
            return{
                options: []    
            }
        })

    } 

    handleAddOption(option){

        if(!option){
            return "Enter valid value"
        } else if(this.state.options.indexOf(option) > -1){
            return "Option already in the system"
        }

        this.setState((prevState)=>{
            return {
                options: prevState.options.concat(option)
            }
        })

        console.log(option);

    }

    handlePick(){

        let randomOptionNumber = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[randomOptionNumber]);

    } 
}

IndecisionApp.defaultProps = {
    options: ["1", "2", "3"]
}

// stateless functional component (faster than class-based)
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

// class-based component
// class Header extends React.Component{ 
//     // always use ^this, that's what makes it a React component as opposed to just an ES6 class
//     // every React component requires a render() method

//     render(){
       
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

// stateless functional component (faster than class-based)
const Action = (props) => {

    return (
        <div>
           <button 
           onClick={props.handlePick}
           disabled={!props.hasOptions}
           >
           What do I do?
           </button>
        </div>
    )

}

// class Action extends React.Component{

//     render(){
//         return (
//             <div>
//                <button 
//                onClick={this.props.handlePick}
//                disabled={!this.props.hasOptions}
//                >
//                What do I do?
//                </button>
//             </div>
//         )
//     }
// }

// stateless functional component (faster than class-based)
const Options = (props) => {

    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        <p>{props.options.length}</p>
            <ol>
                {props.options.map((option, index) => <Option key={index} optionText={option}/>)}
            </ol>
        </div>
    )
}

// class Options extends React.Component{

//     render(){

//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             <p>{this.props.options.length}</p>
//                 <ol>
//                     {this.props.options.map((option, index) => <Option key={index} optionText={option}/>)}
//                 </ol>
//             </div>
//         )
//     }
// }

// stateless functional component (faster than class-based)
const Option = (props) => {
    return(
        <div>{props.optionText}</div>
    )
}

// class Option extends React.Component{
//     render(){
//         return(
//             <div>{this.props.optionText}</div>
//         )
//     }
// }

class AddOption extends React.Component{

    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.newOption.value.trim();
        const error = this.props.handleAddOption(option);
        // this.props.handleAddOption(option);

        this.setState(()=>{
            return {
                error: error
            }
        })
    }
 
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}> 
                    <input id="txtNewOption" type="text" name="newOption" placeholder="new option text"></input>
                    <button>Submit</button>
                </form> 
            </div>
        )
    }
}

const User = (props) => {
    return(
        <div>
            <p>Name: {props.name} </p>
            <p>Age: </p>
        </div>
    )
}

const appRoot = document.getElementById("app");
ReactDOM.render(<IndecisionApp/>, appRoot); // you can straight up stick your component JSX tag in there lol
