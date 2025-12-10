React To-Do List App

A simple React To-Do List app that allows users to add, complete, and delete tasks. Tasks are persisted in localStorage, so they remain after page reloads. The app uses a component-based architecture for maintainable and reusable code.

Live Demo: (Add your deployed URL here)

Features

Add new tasks dynamically.

Mark tasks as completed or incomplete.

Delete tasks from the list.

Tasks persist across browser reloads using localStorage.

Clean and responsive UI with component-based design.

Folder Structure
react-todo-list/
│
├─ node_modules/               # Installed dependencies
│
├─ public/                     # Static files
│   ├─ index.html
│   └─ favicon.ico
│
├─ src/
│   ├─ components/             # All React components
│   │   ├─ TaskInput.jsx       # Input field to add new tasks
│   │   ├─ TaskList.jsx        # Renders list of tasks
│   │   └─ TaskItem.jsx        # Represents a single task (complete/delete)
│   │
│   ├─ App.jsx                 # Main app logic and state management
│   ├─ App.css                 # Styling for App and components
│   └─ main.jsx                # React entry point
│
├─ .gitignore
├─ package.json
├─ package-lock.json
├─ vite.config.js
└─ README.md

Component Overview

App.jsx

Manages tasks state and loads/saves tasks from localStorage.

Provides addTask, toggleComplete, and deleteTask functions to children.

TaskInput.jsx

Handles user input for adding tasks.

Calls addTask from App to update state.

TaskList.jsx

Receives tasks as props and renders each TaskItem.

TaskItem.jsx

Displays a single task.

Toggles completion and deletes tasks using functions from App.

Getting Started

Clone the repository:

git clone https://github.com/your-username/react-todo-list.git


Navigate to the project folder:

cd react-todo-list


Install dependencies:

npm install


Start the development server:

npm run dev


Open the app in your browser (usually at http://localhost:5173).

Technologies Used

React (Functional Components, Hooks: useState, useEffect)

JavaScript (ES6+)

HTML & CSS

LocalStorage for persistent data
