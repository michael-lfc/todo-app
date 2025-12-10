import "./tasks.css";

export default function TaskItem({ item, toggleComplete, deleteTask }) {
  return (
    <li
      className={`task-item ${item.completed ? "completed" : ""}`}
    >
      <span>{item.task}</span>

      <div className="task-actions">
        <button
          onClick={() => toggleComplete(item.id)}
          className="complete-button"
        >
          {item.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => deleteTask(item.id)}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
