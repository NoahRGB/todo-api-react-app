import TodoHolder from "./TodoHolder";
import OptionsHolder from "./OptionsHolder";
import { useState, useEffect } from "react";
import "./style.css";

const API_URL = "";

function App() {
  const [todos, setTodos] = useState([]); 

  useEffect(() => {
    const getTodos = async () => {
      const newTodos = await retrieveTodos();
      setTodos(newTodos);
    }
    getTodos();
  }, []);

  const retrieveTodos = async () => {
    const rawTodos = await fetch(`${API_URL}/gettodo`);
    return await rawTodos.json();;
  }

  const onAddTodo = async (text) => {
    const res = await fetch(`${API_URL}/addtodo`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        item: text
      })
    });

    const newTodos = await retrieveTodos();
    setTodos(newTodos);
  }

  const onCheckedTodo = async (todoText, newCheckedStatus) => {
    const res = await fetch(`${API_URL}/setCheckedTodo`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        todoText: todoText,
        newCheckedStatus: newCheckedStatus
      })
    });

    const newTodos = await retrieveTodos();
    setTodos(newTodos);
  }

  const deleteDoneTodos = async () => {
    const res = await fetch(`${API_URL}/deleteDoneTodos`);
    const newTodos = await retrieveTodos();
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <TodoHolder todos={todos} onCheck={onCheckedTodo}/>
      <OptionsHolder onDelete={deleteDoneTodos} onAdd={onAddTodo}/>
    </div>
  );
}

export default App;
