import { useState } from "react";

const OptionsHolder = ({ onDelete, onAdd }) => {
  const [todoText, setTodoText] = useState("");
  
  return (
    <div className="options-holder">
      <button onClick={onDelete} className="btn"><h2>Delete done todos</h2></button>
      <div>
        <input className="input-text" type="text" value={todoText} onChange={(e) => setTodoText(e.currentTarget.value)}/>
        <button className="btn" onClick={() => { onAdd(todoText); setTodoText(""); }}><h2>Add new todo</h2></button>
      </div>
    </div>
  );
}

export default OptionsHolder;