import React, { useState } from "react";

import "./App.css";
function Eachtodo({ index, todo, deleteBtn, doneBtn }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
      {todo.title} <button onClick={() => doneBtn(index)}>Complete</button>
      <button onClick={() => deleteBtn(index)}>X</button>
    </div>
  );
}
function Addtodo({ addInput }) {
  const [inputvalue, setinput] = useState("");
  const Submitting = (e) => {
    e.preventDefault();
    addInput(inputvalue);
    if (!inputvalue) return;
    setinput("");
  };
  return (
    <form onSubmit={Submitting}>
      <input
        type="text"
        placeholder="input something..."
        value={inputvalue}
        onChange={(e) => setinput(e.target.value)}
      ></input>
    </form>
  );
}
function App() {
  const [todos, setTodo] = useState([
    {
      title: "gogo",
      isCompleted: false,
    },
    {
      title: "eat",
      isCompleted: false,
    },
    {
      title: "sleep",
      isCompleted: false,
    },
  ]);
  const deleteBtn = (index) => {
    const deleteUpdate = [...todos];
    deleteUpdate.splice(index, 1);
    setTodo(deleteUpdate);
  };
  const doneBtn = (index) => {
    const doneUpdate = [...todos];
    doneUpdate[index].isCompleted = true;
    setTodo(doneUpdate);
  };
  const addInput = (title) => {
    const addUpdate = [...todos, { title }];
    setTodo(addUpdate);
  };
  return (
    <div>
      {todos.map((todo, index) => (
        <Eachtodo
          index={index}
          key={index}
          todo={todo}
          deleteBtn={deleteBtn}
          doneBtn={doneBtn}
        />
      ))}
      <Addtodo addInput={addInput} />
    </div>
  );
}

export default App;
