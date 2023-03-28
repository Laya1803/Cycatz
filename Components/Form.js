import React, { Component } from 'react';
import './myStyles.css'
class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            comments:'',
            topic:'React'
        }
        }
        handleChangeUsername=(event)=>{
            this.setState({
                username:event.target.value
            })
        }
        handleChangeComments=event=>{
                this.setState({
                    comments:event.target.value
                })
        }
        handleChangeTopic = (event)=>{
            this.setState({
                topic:event.target.value
            })
        }
        handleSubmit = event =>{
            alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
            event.preventDeefault();
        }
    render() {
        return (
            <form onSubmit={this.handleSubmit}  className='container'>
                <div className='main'>
                    <h1>FORM HANDLING</h1>
                </div>
                <div className='form_1'>
                    {/* <label>Username:&nbsp;</label> */}
                    <input type={Text} value ={this.state.username} onChange={this.handleChangeUsername} placeholder='Username' id='ip1'></input>
                </div>
                <div className='form_2'>
                    {/* <label>Comments:&nbsp;</label> */}
                    <textarea value={this.state.comments} onChange={this.handleChangeComments} placeholder='Comments' id='ip2'></textarea>
                </div>
                <div className='form_3'>
                    {/* <label>Topic:&nbsp;</label> */}
                    <select value={this.state.topic} onChange={this.handleChangeTopic} placeholder='Topic' id='ip3'>
                        <option value={'React'}>React</option>
                        <option value={'HTML'}>HTML</option>
                        <option value={'CSS'}>CSS</option>
                    </select>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        );
    }
}

export default Form;