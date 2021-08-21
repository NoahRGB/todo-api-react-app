import "./style.css";
import { useState } from "react";

const Todo = ({ todoText, isChecked, onCheck }) => {
  return (
    <div className="todo">
      <h1>{todoText}</h1>
      <input className="checkbox" type="checkbox" checked={isChecked} onChange={() => onCheck(todoText, !isChecked)}></input>
    </div>
  );
}

export default Todo;