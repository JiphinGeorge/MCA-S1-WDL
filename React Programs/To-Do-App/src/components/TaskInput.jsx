import { useState } from "react";
import Button from "./Button";
import "./TaskInput.css";

function TaskInput({ onAddTask }) {
  const [taskName, setTaskName] = useState("");

  const handleAdd = () => {
    if (taskName.trim() === "") return;
    onAddTask(taskName);
    setTaskName("");
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Add new task..."
        className="task-input"
      />
      <Button label="Add Task" onClick={handleAdd} />
    </div>
  );
}

export default TaskInput;
