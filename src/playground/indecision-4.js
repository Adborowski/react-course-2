class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            options: []
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount(){ // this is a lifecycle function, class-based components only

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

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            console.log("componentDidUpdate - saving data")
            const json = JSON.stringify(this.state.options);
            console.log(json);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount()")
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
                    handleDeleteOption={this.handleDeleteOption} // we're starting a prop chain here, later we pass on to option
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
            
        )
    }

    handleDeleteOptions(){

        this.setState(()=>({options: []  }))

    } 

    handleDeleteOption(optionToRemove){
        
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

    handleAddOption(option){

        if(!option){
            return "Enter valid value"
        } else if(this.state.options.indexOf(option) > -1){
            return "Option already in the system"
        }

        this.setState((prevState)=>({options: prevState.options.concat(option)}))

        console.log(option);

    }

    handlePick(){

        let randomOptionNumber = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[randomOptionNumber]);

    } 
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

// stateless functional component (faster than class-based)
const Options = (props) => {

    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {!props.options.length && <p>Please add an item</p>}
        <p>{props.options.length}</p>
            <ol>
                {props.options.map((option, index) => (
                    <Option 
                        key={index} 
                        optionText={option}
                        handleDeleteOption = {props.handleDeleteOption}
                    />)  
                )}
            </ol>
        </div>
    )
}

// stateless functional component (faster than class-based)
const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button onClick={()=>{

                    props.handleDeleteOption(props.optionText)

                }}>delete</button>
        </div>
    )
}

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

        this.setState(()=>({error: error}))

        if (!error){
            e.target.elements.newOption.value = '';
        }
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
