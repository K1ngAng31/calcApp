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

  //Now we create our function


}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
