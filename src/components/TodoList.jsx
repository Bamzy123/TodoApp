import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [searchText, setSearchText] = useState('');

  const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const taskDescription = taskInput.value.trim();

    if (taskDescription) {
      setTasks([...tasks, { description: taskDescription, completed: false }]);
      taskInput.value = '';
      saveTasksToLocalStorage();
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    saveTasksToLocalStorage();
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    saveTasksToLocalStorage();
  };

  const saveTasksToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const searchTasks = () => {
    setSearchText(document.getElementById('searchInput').value.toLowerCase());
  };

  const filteredTasks = tasks.filter((task) =>
    task.description.toLowerCase().includes(searchText)
  );

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="search-container">
        <input
          type="text"
          id="searchInput"
          placeholder="Search tasks..."
          onInput={searchTasks}
        />
      </div>
      <div>
        <input type="text" id="taskInput" placeholder="Enter a task" />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onToggleCompletion={() => toggleTaskCompletion(index)}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;