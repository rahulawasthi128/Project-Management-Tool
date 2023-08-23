import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import TaskForm from './TaskForm';
import ProgressDisplay from './ProgressDisplay';

function Routes() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/progress">Progress</Link>
          </li>
        </ul>
      </nav>
      
      <Switch>
        <Route path="/projects">
          <ProjectForm />
        </Route>
        <Route path="/tasks">
          <TaskForm />
        </Route>
        <Route path="/progress">
          <ProgressDisplay />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
