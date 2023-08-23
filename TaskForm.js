import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function TaskForm({ onCreateTask }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      dueDate: taskDueDate,
      // Add more fields as needed
    };
    onCreateTask(newTask);
    setTaskTitle('');
    setTaskDescription('');
    setTaskDueDate('');
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <input
          type="date"
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
        />
        {/* Add more input fields */}
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
  function TaskForm() {
    // ...your existing code
  
    return (
      <div>
        <h2>Create Task</h2>
        {/* ...form fields */}
        <button type="submit">Create Task</button>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default TaskForm;





