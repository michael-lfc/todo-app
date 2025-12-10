import { useState } from "react";
import "./tasks.css";

export default function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="task-input"
      />
      <button className="add-button">Add</button>
    </form>
  );
}
