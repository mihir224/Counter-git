import React from "react";

function App() {
  const [count,setCount] = React.useState(0);  

  function increaseCount(){
    setCount(count+1); //this will update the value of initial state to count + 1 
    //everytime increaseCount() is called 
  }
  function decreaseCount(){
    if(count>0){
    setCount(count-1);}
    else{
      alert("count already 0");
    }
  }
  return (
    <div className="container">
    <h1>{count}</h1>
    <button onClick={increaseCount}>+</button>
    <button onClick={decreaseCount}>-</button>
  </div>
  );
}

export default App;
