import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Update this line
import AddTask from './AddTask';
import EditTask from './EditTask';
import TasksList from './TasksList';

function App() {
  return (
    <Router>
      <div>
        <h1>TODO App</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Task</Link></li>
          </ul>
        </nav>
        <Routes> 
          <Route path="/add" element={<AddTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="/" element={<TasksList />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
