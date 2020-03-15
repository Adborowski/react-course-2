class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a machine";
        const options = ["eat", "sleep", "rave", "repeat"];

        return(

            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
            
        )
    }
}

class Header extends React.Component{ 
    // always use ^this, that's what makes it a React component as opposed to just an ES6 class
    // every React component requires a render() method

    render(){
       
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }

}

class Action extends React.Component{

    handlePick(){
        alert("handlePick");
    }

    render(){
        return (
            <div>
               <button onClick={this.handlePick}>What do I do?</button>
            </div>
        )
    }
}

class Options extends React.Component{

    constructor(props){
        super(props); 
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll(){
        // alert("Removing all");
        console.log(this.props);
    }

    render(){

        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
            <p>{this.props.options.length}</p>
                <ol>
                    {this.props.options.map((option, index) => <Option key={index} optionText={option}/>)}
                </ol>
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>{this.props.optionText}</div>
        )
    }
}

class AddOption extends React.Component{

    handleSubmit(e){
        e.preventDefault();
        const newOptionName = e.target.elements.newOption.value.trim();
        newOptionName && alert(newOptionName);
    }
 
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <input id="txtNewOption" type="text" name="newOption" placeholder="new option text"></input>
                    <button>Submit</button>
                </form> 
            </div>
        )
    }
}

const appRoot = document.getElementById("app");
ReactDOM.render(<IndecisionApp/>, appRoot); // you can straight up stick your component JSX tag in there lol