import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>To-Do List</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;