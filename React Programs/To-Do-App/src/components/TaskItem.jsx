import { useState } from "react";
import Button from "./Button";

function TaskItem({ task, onDelete, onToggleComplete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);

  const handleSave = () => {
    if (editedName.trim() === "") return;
    onEdit(task.id, editedName);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 12px",
        background: "#f0f0f0",
        borderRadius: "4px",
        marginBottom: "8px",
        textDecoration: task.completed ? "line-through" : "none",
      }}
    >
      {/* Task Name / Edit Input */}
      {isEditing ? (
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          style={{ flex: 1, marginRight: "8px", padding: "4px" }}
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          style={{ flex: 1, cursor: "pointer" }}
        >
          {task.name}
        </span>
      )}

      <div style={{ display: "flex", gap: "8px" }}>
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
