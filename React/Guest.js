import React, { Component } from 'react';

class Guest extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoggedIn:true
        }
        
    }
    
    render() {
        //      short circuit method
        return this.state.isLoggedIn&&<div>Welcome Laya!!</div>


        //    Ternary operator
        // return this.state.isLoggedIn ? (
        // <div>Welcome Laya!!</div>
        // ):(
        // <div>Welcome Guest</div>
        // )


        //    Element-variables
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Layashree!!</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
        // return message


        //      if-else method
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Layashree!!</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome Guest!</div>
        //     )
        // }
        //     }
}
}
export default Guest;