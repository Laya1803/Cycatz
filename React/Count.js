import React,{Component} from "react";
class Count extends Component{
    styles = {
        main: {
          padding :"20px",
          height:"10px",
          margin:"10px",
        },
      };
    constructor(props){
        super(props);
        this.state={count:0}
    }
    increment = ()=>{
        this.setState({count:this.state.count+1});
    }
    decrement = ()=>{
        this.setState({count:this.state.count-1});
    }
    render(){
        return(
            <div>
            <h1>Start Counting...</h1>
            <button onClick={this.increment}  style={this.styles.main}>+</button>
            <button onClick={this.decrement}  style={this.styles.main}>-</button>
            <h2 style={this.styles.main}>{this.state.count}</h2>
            </div>
        )
    }
}
export default Count