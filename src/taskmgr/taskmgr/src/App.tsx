import React from 'react';

import './App.css';
import { AddTaskButton } from './components/Buttons/AddTaskButton';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { TasksTable } from './components/TasksTable/TasksTable';

function App() {
  return (
    <div className="App">
      <TasksView />
    </div>
  );
}

const TasksView = () => {
  return (
    <ErrorBoundary>
      <>
        <h1>Tasks</h1>
        <AddTaskButton />
        <TasksTable />
      </>
    </ErrorBoundary>
  );
}

export default App;
