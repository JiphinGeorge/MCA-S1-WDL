import { useState } from "react";
import Button from "./Button";
import "./TaskItem.css";

function TaskItem({ task, onDelete, onToggleComplete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);

  const handleSave = () => {
    if (editedName.trim() === "") return;
    onEdit(task.id, editedName);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {/* Task Name / Edit Input */}
      {isEditing ? (
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          className="task-edit-input"
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          className="task-name"
        >
          {task.name}
        </span>
      )}

      <div className="task-buttons">
        <Button
          label={task.completed ? "Undo" : "Complete"}
          onClick={() => onToggleComplete(task.id)}
        />
        {isEditing ? (
          <Button label="Save" onClick={handleSave} />
        ) : (
          <Button
            label="Delete"
            onClick={() => onDelete(task.id)}
            className="delete-btn"
          />
        )}
      </div>
    </div>
  );
}

export default TaskItem;
