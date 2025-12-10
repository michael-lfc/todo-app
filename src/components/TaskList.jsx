import TaskItem from "./TaskItem";
import "./tasks.css";

export default function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((item) => (
        <TaskItem
          key={item.id}
          item={item}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
