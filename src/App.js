import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {


  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState("all"); // By default all todos will be displayed

  const [filteredTodos, setFilteredTodos] = useState([]);

  // Search

  // const [search, setSearch] = useState("");

  // const [searchResults, setSearchResults] = useState([]);





  useEffect(() => {
    getLocalTodos();
  }, [])


  useEffect(() => {
    //console.log("hey");  // the function runs only once when the component is first rendered
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    saveLocalTodos();
  }, [todos, status]); // can re-run the function by adding value to empty paranthesis. ie, everytime when we add a todo, we can make it run


  //saving locally



  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      let localTodo = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodo);
    }
  };



  return (
    <div className="App">
      <h1>THINGS TO DO!</h1>
      <TodoForm todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      <p>Items Left : {todos.length}</p>
    </div>
  );
}

export default App;
