import React from "react";
import Todo from "../Todo/Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo={todo} /> // rendering each todo item usin map
                ))}
            </ul>
        </div>
    )
};

export default TodoList;