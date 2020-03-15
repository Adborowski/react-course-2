console.log("[APP.JS]");

class VisibilityToggle extends React.Component{

    constructor(props){

        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            title : "Visibility Toggle",
            visibility : false // default
        }
    }

    toggleVisibility(){
        
        this.setState((prevState) => {

            console.log("Visibility now: "+!prevState.visibility);
            return{
                visibility: !prevState.visibility
            }

        });
    }

    render(){
        return(
            <div>
                <h2>{this.state.title}</h2>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? "Hide" : "Show"}</button>
                {this.state.visibility && <h3>This is the secret content</h3>}
            </div>
        )
    }
}


const appRoot = document.getElementById("app");
ReactDOM.render(<VisibilityToggle/>, appRoot);