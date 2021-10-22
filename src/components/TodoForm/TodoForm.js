import React from 'react';
import { GrAdd } from 'react-icons/gr';
// import { FcSearch } from "react-icons/fc";

const TodoForm = ({ inputText, todos, setInputText, setTodos, setStatus }) => {

    const inputHandler = (e) => {
        //console.log(e.target.value);
        setInputText(e.target.value); // getting input todo text using event handler
    };

    const submitTodo = (e) => {
        e.preventDefault(); // prevents refreshing the page everytime when add button is clicked

        if (/^\s*$/.test(inputText)) { // testing the input string : It shouldn't be blank or whitespaces
            return
        }

        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 10000 }, // adding todos
        ]);
        setInputText(''); // setting input text to null after adding a todo





        // const newTodos = [todo, ...todos];

        // setTodos(newTodos);
        // console.log(todo, ...todos);
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    // const searchHandler = (e) => {
    //     setSearch(e.target.value);
    // };


    // const getSearch = (e, search) => {

    //     e.preventDefault();

    //     setSearch(search);
    //     if (search !== "") {
    //         const newSearchTodo = todos.filter((todo) => {
    //             return Object.values(todo).join("").includes(search);

    //         });
    //         setSearchResults(newSearchTodo);
    //     }
    //     else {
    //         setSearchResults(todos);
    //     }
    //     //   setSearchResults(todos.filter((todo) => todo.text === search));
    //     // }
    //     // else {
    //     //   setSearchResults(todos);
    //     // }
    // };




    return (
        <div className="todo-container">
            <form className="todo-form">
                <input type="text" className="todo-input" value={inputText} onChange={inputHandler} placeholder="Add a Task" />
                <button className="todo-add-btn" onClick={submitTodo}><GrAdd /></button>
                {/* <div>
                    <input type="submit" value="all" onChange={statusHandler} />
                    <button className="todo-All-btn" value="all" onClick={statusHandler} >ALL</button>
                    <button className="todo-complete-btn" value="completed" onClick={statusHandler} >COMPLETED</button>
                    <button className="todo-Active-btn" value="active" onClick={statusHandler} >ACTIVE</button>

                </div> */}

                {/* <div className="search">
                    <div className="search-icon">
                        <input type="text" placeholder="Search" className="search-text" input={inputText} onChange={searchHandler} />
                        <button className="search-btn" onClick={getSearch}><FcSearch /></button>
                    </div>
                </div> */}

                <div className="todo-options">
                    <select size="2" className="todo-select-options" onChange={statusHandler}>
                        <option className="options" value="all" >ALL</option>
                        <option className="options" value="completed" >COMPLETED</option>
                        <option className="options" value="active" >ACTIVE</option>
                    </select>

                    {/* <button value="all" onClick={statusHandler}>ALL</button>
                    <button value="completed" onChange={statusHandler}>COMPLETED</button>
                    <button value="active" onChange={statusHandler}>ACTIVE</button> */}

                    {/* <input type="text" value="ALL" />
                    <input type="text" value="COMPLETED" />
                    <input type="text" value="ACTIVE" /> */}

                </div>
            </form>
        </div>
    );
}

export default TodoForm;