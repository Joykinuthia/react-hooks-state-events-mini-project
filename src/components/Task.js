import React from 'react';

function Task({ task, text, category, id, onDelete, omDelete }) {
  // Support both prop structures:
  const actualId = id || task?.id;
  const actualText = text || task?.text;
  const actualCategory = category || task?.category;
  const handleDelete = omDelete || onDelete;

  return (
    <div className="task" data-testid="task">
      <div className="label" data-testid="task-category">
        {actualCategory}
      </div>
      <div className="text" data-testid="task-text">
        {actualText}
      </div>
      <button
        className="delete"
        onClick={() => handleDelete(actualId)}
        aria-label="Delete task"
      >
        X
      </button>
    </div>
  );
}

export default Task;