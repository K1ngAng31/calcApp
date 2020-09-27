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
  const Multiplication = (e) =>{
    e.preventDefault();
    if(clear)setClear(false);
    let currentNum = document.querySelector('#num').value
    if(currentNum === '')
    return;
    let sum = currentSum * parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value = "";
  }

  // const Divide = (e) =>{
  //   e.preventDefault();
  //   if(clear)setClear(false);
  //   let currentNum = document.que
  // }

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
        <h1><u> Basic Calculator </u></h1>
        <h3>Instructions:</h3>
          <li>Replace <u>Enter a number</u> with number you want.</li>
          <li>Choose the operator</li>
          <li>Do step 1 again.</li>

      </div>
      <form>
            <input type="text" id="result" placeholder="Result"value={currentSum}  readOnly />
            <input type="text" id="num" placeholder="enter a number" />
            <button class = "button buttonAdd" onClick={Add}>Add</button>
            <button class = "button buttonSubtract" onClick={Subtract}>Subtract</button>
            <button class = "button buttonMultiply"onClick={Multiplication}>Multiplication</button>
            <button class = "button buttonClear" onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}

export default App;
