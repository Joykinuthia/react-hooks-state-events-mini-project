import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  console.log("Rendering TaskList with tasks:", tasks); // <-- Add here
  
  return (
    <div className="tasks">
        {tasks.map((task, index) => (
          <Task 
            key={task.id || `task-${index}`}  // Fallback to index if no id
            task={task}
            onDelete={onDeleteTask}
          />
        ))}
    </div>
  );
}

export default TaskList;