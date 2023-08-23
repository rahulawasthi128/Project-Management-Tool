import React from 'react';
import { Link } from 'react-router-dom';

function ProgressDisplay({ projects }) {
  const calculateProjectProgress = (project) => {
    // Calculate project progress logic
    // Return a value representing progress percentage
  };

  return (
    <div>
      <h2>Project Progress</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>Progress: {calculateProjectProgress(project)}%</p>
          {/* Display tasks and their progress */}
        </div>
      ))}
    </div>
  );
  function ProgressDisplay() {
    // ...your existing code
  
    return (
      <div>
        <h2>Create Progress</h2>
        {/* ...form fields */}
        <button type="submit">Create Progress</button>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default ProgressDisplay;

