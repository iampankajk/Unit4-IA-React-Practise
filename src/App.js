import Header from "./components/Header";
import React from 'react'
// import Button from "./components/Button";
function App() {
  const [count,setCount]=React.useState(0);
  const [toggle, setToggle] = React.useState(true);

  const countHandler = ()=>{
    setCount(count+1);
    setToggle(!toggle);
  }
  return (
    <div>
      <Header></Header>
      <button onClick={countHandler}>Click here</button>
      <h2>Let's get started!{count}</h2>
      {toggle && <p>Toggle me</p>}
      <div></div>
    </div>
  );
}

export default App;
