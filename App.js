import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import TaskForm from './TaskForm';
import ProgressDisplay from './ProgressDisplay';

import Routes from './Routes';

function App() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const handleCreateProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handleCreateTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <ProjectForm onCreateProject={handleCreateProject} />
      <TaskForm onCreateTask={handleCreateTask} />
      <ProgressDisplay projects={projects} tasks={tasks} />
    </div>
  );
  function App() {
    return (
      <div>
        <h1>Project Management Tool</h1>
        <Routes />
      </div>
    );
  }
}

export default App;




