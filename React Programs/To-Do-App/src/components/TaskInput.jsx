import { useState } from "react";
import Button from "./Button";

function TaskInput({ onAddTask }) {
  const [taskName, setTaskName] = useState("");

  const handleAdd = () => {
    if (taskName.trim() === "") return;
    onAddTask(taskName);
    setTaskName("");
  };

  return (
    <div style={{ display: "flex", marginBottom: "12px" }}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Add new task..."
        style={{ flex: 1, padding: "8px", marginRight: "8px" }}
      />
      <Button label="Add Task" onClick={handleAdd} />
    </div>
  );
}

export default TaskInput;
