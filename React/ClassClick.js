import React, { Component } from 'react';
import Message from './Message';

class ClassClick extends Component {
    constructor(props) {
        super(props);
        this.state ={message:'Hello'} 
        this.clickHandler=this.clickHandler.bind(this)
    }
    
    clickHandler(){
       this.setState({
        message:'GoodBye'
        
       })
       console.log(this)
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        );
    }
}

export default ClassClick;