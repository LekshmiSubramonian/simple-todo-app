import React from "react";
import { TiTick } from "react-icons/ti";
import { RiDeleteBin3Fill } from "react-icons/ri";

const Todo = ({ text, todos, setTodos, todo, }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (todo.id === item.id) {
                return {
                    ...item, completed: !item.completed // changing completed state to vise versa onclicking completed button (true/false )
                };
            };
            return item;
        }));
    };






    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""} `}>{text}</li>
            <button className={`complete-btn ${todo.completed ? "completed" : ""}`} onClick={completeHandler}><TiTick /></button>
            <button className="delete-btn" onClick={deleteHandler}><RiDeleteBin3Fill /></button>
        </div>
    )
};

export default Todo;