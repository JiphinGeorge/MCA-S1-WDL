import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Button from "./components/Button";
import "./App.css";

function App() {
  // Initialize tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("All");

  // Persist tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (name) => {
    if (!name.trim()) return; // Prevent empty task
    setTasks([...tasks, { id: Date.now(), name: name.trim(), completed: false }]);
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle complete / undo
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Edit task name
  const editTask = (id, newName) => {
    if (!newName.trim()) return;
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, name: newName.trim() } : task))
    );
  };

  // Clear all completed tasks
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="app-container">
      <h2>Task Tracker App</h2>

      {/* Task input */}
      <TaskInput onAddTask={addTask} />

      {/* Filters */}
      <div className="filter-buttons">
        {["All", "Pending", "Completed"].map((f) => (
          <Button
            key={f}
            label={f}
            onClick={() => setFilter(f)}
            className={filter === f ? "active-filter" : ""}
          />
        ))}
      </div>

      {/* Clear Completed button */}
      {tasks.some((task) => task.completed) && (
        <Button label="Clear Completed" onClick={clearCompleted} className="delete-btn" />
      )}

      {/* Task counter */}
      <p className="task-count">{remainingTasks} task(s) remaining</p>

      {/* Task list */}
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;
