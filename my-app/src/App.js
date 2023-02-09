import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
// import { useState, useEffect } from "react";

// 2nd
// function Hello() {
//   useEffect(() => {
//     console.log("created!");
//   }, []);
//   return <h1>Hello</h1>;
// }

// function Bye() {
//   useEffect(() => {
//     console.log("GoodBye~");
//   }, []);
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);
//   return (
//     <div>
//       {showing ? <Hello /> : <Bye />}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   );
// }

// export default App;

// 1st
// import Button from "./Button";
// import styles from "./App.module.css";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   useEffect(() => {
//     console.log("I run only once");
//   }, []);
//   useEffect(() => {
//     console.log("I run when 'keyword' changes.. ");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("I run when 'counter' changes.. ");
//   }, [counter]);
//   useEffect(() => {
//     console.log("I run when keyword&counter changes..");
//   }, [keyword, counter]);
//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here..."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }
// export default App;
