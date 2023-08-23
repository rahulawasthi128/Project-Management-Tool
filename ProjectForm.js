import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectForm({ onCreateProject }) {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectDueDate, setProjectDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      title: projectTitle,
      description: projectDescription,
      dueDate: projectDueDate,
      // Add more fields as needed
    };
    onCreateProject(newProject);
    setProjectTitle('');
    setProjectDescription('');
    setProjectDueDate('');
  };

  return (
    <div>
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
        />
        <textarea
          placeholder="Project Description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <input
          type="date"
          value={projectDueDate}
          onChange={(e) => setProjectDueDate(e.target.value)}
        />
        {/* Add more input fields */}
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
  function ProjectForm() {
    // ...your existing code
  
    return (
      <div>
        <h2>Create Project</h2>
        {/* ...form fields */}
        <button type="submit">Create Project</button>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default ProjectForm;

