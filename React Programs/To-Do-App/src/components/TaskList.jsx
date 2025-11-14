import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onToggleComplete, onEdit }) {
  return (
    <div style={{ width: "100%", maxWidth: "400px" }}>
      {tasks.length === 0 ? (
        <p style={{ textAlign: "center", color: "#555" }}>No tasks yet!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
