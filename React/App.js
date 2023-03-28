import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Hello from './Components/Hello';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Count from './Components/Count';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import Apps from './Components/Apps';
import Guest from './Components/Guest';
import NameList from './Components/NameList';
import Style from './Components/Style';
// import  './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Components/Form'
import Carousel from './Components/Carousel';
class App extends Component{
  render(){
    return (
      <div className="App">
        <Carousel />
        {/* <Form /> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Style primary={true}/> */}
        {/* <NameList /> */}
        {/* <Guest /> */}
       {/* <Apps /> */}
        {/* { <Count /> } */}
        {/* <Message /> */}
         {/* <Greet name="Priya" heroName="HR">
          <p>Priya is the supervisor</p>
        </Greet> */}
        {/* <Greet name="siva" heroName="Team Leader"></Greet>
         <Greet name="madhu" heroName="Admin"></Greet>
         <Hello name="Priya" heroName="HR" />
         <Hello name="siva" heroName="TL" />*/}
         {/* <Hello name="Priya" heroName="Admin" /> 

         <ClassClick />
        <FunctionClick />  */}
        {/* <Welcome name="Priya" heroName="HR" /> 
        <Welcome name="siva" heroName="Team Leader"/> 
        <Welcome  name="madhu" heroName="Admin"></Welcome> */}
      </div>
    );
  }
  
  // return React.createElement('div',null,'Hello World')

}
export default App;
