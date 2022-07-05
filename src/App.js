import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './Components/Form'
import ToDoList from './Components/TodoList'

function App() {

  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState("all");

  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    saveToLocal();
    filterHandler();
  }, [todos, status]);


  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveToLocal = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>My ToDo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;