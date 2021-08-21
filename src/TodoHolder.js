import Todo from "./Todo";
import "./style.css";

const TodoHolder = ({ todos, onCheck }) => {
  return (
    <div className="todo-holder">
      {todos.map(todo => {
        return <Todo key={todo.id} onCheck={onCheck} todoText={todo.item_text} isChecked={todo.checked}></Todo>
      })}
    </div>
  );
}

export default TodoHolder;