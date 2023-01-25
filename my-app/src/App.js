import {useState, useEffect} from "react";

function Hello(){
  useEffect(()=>{
    console.log("created!");
  },[]);
  return <h1>Hello</h1>;
}

function Bye(){
  useEffect(()=>{
    console.log("GoodBye~");
  },[]);
}

function App() {
  const [showing,setShowing] = useState(false);
  const onClick = () => setShowing( (prev) => !prev );
  return (
  <div>
    {showing ? <Hello/> : <Bye /> }
    <button onClick={onClick}>{showing ? "Hide" : "Show" }</button>
  </div>
);
}

export default App;
