import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)//calls the constructor of the parent class
    this.state = {
      display: "0", // this will show 0
      equation:"" // this will handle the input equation
    }
    // create our inputs to use
    //use our bind method to pass the context of this
    this.numberInput = this.numberInput.bind(this);
    this.operationInput = this.operationInput.bind(this);
    this.decimalInput = this.decimalInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  //Now we create our function for numberInput
  numberInput(num){

  }


}

export default App;
