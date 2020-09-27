// import React, { Component } from 'react';
// import './App.css';
//
// class App extends Component{
//   constructor(props){
//     super(props)//calls the constructor of the parent class
//     this.state = {
//       display: "0", // this will show 0
//       equation:"" // this will handle the input equation
//     }
//     // create our inputs to use
//     //use our bind method to pass the context of this
//     this.numberInput = this.numberInput.bind(this);
//     this.operationInput = this.operationInput.bind(this);
//     this.decimalInput = this.decimalInput.bind(this);
//     this.clearInput = this.clearInput.bind(this);
//     this.calculate = this.calculate.bind(this);
//   }
//
//   //Now we create our function for numberInput
//   numberInput(num){
//     //create if and else statements that will match our number input
//     if(this.state.equation.match(/[0-9.]$/) && !this.state.equation.includes("=")){
//       //if equation is null
//       if(this.state.equation.match(/[+-*/]$/) == null){
//         //create a val to set the current value
//         let val = this.state.equation + num.currentTarget.value;
//         this.setState({
//           display: val,
//           equation: val
//         });
//       }else {//just display the recent
//         this.setState({
//           display: this.state.display +num.currentTarget.value,
//           equation: this.state.equation + num.currentTarget.value
//         });
//       }
//     }else if(this.state.equation.match(/[+-*/]$/)){
//       let val = this.state.equation + num.currentTarget.value;
//       this.setState({
//         display: num.currentTarget.value,
//         equation: val
//       });
//     }else if((this.state.display === "0" && num.currentTarget.value !== "0") || this.state.equation.includes("=")){
//       this.setState({
//         display: num.currentTarget.value,
//         equation: num.currentTarget.value
//       });
//     }
//   }
//
//
//
// }
//
// export default App;
import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])

  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })

  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum ==='')
    return;
    let sum= currentSum+parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";

  }
  const Subtract =(e) =>{
    e.preventDefault();
    if(clear)setClear(false);
    let currentNum = document.querySelector('#num').value
    if(currentNum === '')
    return;
    let sum = currentSum - parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value = "";
  }

  const Clear=(e)=>{
    e.preventDefault();
    console.log('sum:', currentSum);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }

  return (
    <div className="App">
      <div className="app-title">
        <h1> Basic Form Calculator</h1>
      </div>
      <form>
            <input type="text" id="result" value={currentSum}  readOnly />
            <input type="text" id="num" placeholder="enter a number" />
            <button onClick={Add}>Add</button>
            <button onClick={Subtract}>Subtract</button>
            <button onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}

export default App;
