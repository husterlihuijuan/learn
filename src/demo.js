
class App extends Component{
    state={checked:false}
    render(){
        return(
            <ToggleButton text="toggle me" checked={this.state.checked}/>
        );
    }
}

class ToggleButton extends Component{
    constructor(props){
        super(props);
        this.state={
            checked:this.props.checked,
            text:this.props.text
        }
    }

    render(){
        
        return(
            <div>
            {this.state.text}:<input type="checkbox" checked={this.state.checked}/>
            </div>
        );
    }
}