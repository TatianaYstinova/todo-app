import React from "react";
import './TaskField.css';

export const TaskField = ({ todoTasks, inProgressTasks, doneTasks }) => {
  console.log(todoTasks, inProgressTasks, doneTasks);
  return (
    <div className="container">
      <div className="field">
        <h2>Ожидает</h2>
        <ul>
        {todoTasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>Проект ID: {task.projectId}</p>
          </li>
        ))}
      </ul>
      </div>
      <div className="field">
        <h2>В процессе</h2>
        <ul>
          {inProgressTasks.map(task => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>Проект ID: {task.projectId}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="field">
        <h2>Завершено</h2>
        <ul>
          {doneTasks.map(task => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>Проект ID: {task.projectId}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};