import React,{useState, useEffect} from 'react';
import './App.css';


function App() {
  const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);

  useEffect(()=>{
    document.title = "Calc App"
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

  const Divide = (e) =>{
    e.preventDefault();
    if(clear)setClear(false);
    let currentNum = document.querySelector('#num').value
    if(currentNum === '')
    return;
    let sum = currentSum / parseInt(currentNum);
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
    <div className="App" style={{ color: 'Black' }}>
    <body>
      <div className="app-title">
        <h1 style={{ color: 'Blue'}}><u> Basic Calculator </u></h1>
        <h3>Instructions:</h3>
          <li>Replace <u>Enter a number</u> with number you want.</li>
          <li>Choose the operator</li>
          <li>Do step 1 again.</li>
          <li>Result will be shown at the bottom.</li>
      </div>
      <form>
        <div class = "row">
          <input type="text" id="num" placeholder="Enter a number" />
        </div>
        <div class = "row">
          <button class = "button buttonAdd" style={{ color: 'black'}} onClick={Add}>Add</button>
          <button class = "button buttonSubtract" style={{ color: 'black'}} onClick={Subtract}>Subtract</button>
        </div>
        <div class = "row">
          <button class = "button buttonMultiply" style={{ color: 'black'}} onClick={Multiplication}>Multiplication</button>
          <button class = "button buttonDivide" style={{ color: 'black'}} onClick={Divide}>Divide</button>
        </div>
        <button class = "button buttonClear" style={{ color: 'black'}} onClick={Clear}>Clear</button>
        <div class = "row">
          <input type="text" id="result" placeholder="Result" value={currentSum}  readOnly />
        </div>
      </form>
    <footer align = "left" style={{color:"white"}}>Angel Santana 2020 </footer>
    </body>
    </div>
  );
}

export default App;
