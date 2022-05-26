import React from 'react';
import './App.css';

import TodoInput from "./components/todo-input"
import TodoItem from "./components/todo-item"
import TodosFooter from "./components/todos-footer"

function App() {
  return (
    <div className="container">
      <div className="todoapp">
        <header>
          <h1>todos</h1>
        </header>
        <div className="main">
          <TodoInput />
          <ul className="todo-list">
            <TodoItem value="The first todo" />
            <TodoItem value="A second todo item" />
          </ul>
        </div>
        <TodosFooter />
      </div>
    </div>
  );
}

export default App;
