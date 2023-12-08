import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'https://crudapi.co.uk/api/v1';

function AddTask() {
  const [newTask, setNewTask] = useState({
    name: '',
    isCompleted: false,
    term: '',
    assigneeName: '',
    assigneeSurname: '',
    additionalInfo: '',
  });

  const navigate = useNavigate();

  const addTask = async () => {
    try {
      await axios.post(`${API_BASE_URL}/tasks`, newTask);
      navigate('/');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <label htmlFor="taskName">Task Name:</label>
      <input
        type="text"
        id="taskName"
        value={newTask.name}
        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        required
      />
      <button type="button" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;