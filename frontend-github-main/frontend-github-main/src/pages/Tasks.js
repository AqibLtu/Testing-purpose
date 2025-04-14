import React, { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Task Management</h2>
      <input
        type="text"
        className="form-control my-2"
        placeholder="Enter a new task..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button className="btn btn-success w-100" onClick={addTask}>Add Task</button>
      <ul className="list-group mt-3">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
