import React from 'react';

function TodoItem({ task, onToggleCompletion, onDelete }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggleCompletion}
      />
      <span>{task.description}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
