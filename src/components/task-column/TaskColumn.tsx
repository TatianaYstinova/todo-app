import '../../index.css';
import React from "react";
import "./TaskColumn.css";
import { CardTask } from "../CardTask/CardTask.tsx";

export const TaskField = ({ todoTasks, inProgressTasks, doneTasks }) => {
  return (
    <div className="container">
      <div className="column default-font">
        <h3>Ожидает</h3>
        {todoTasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
      <div className="column default-font">
        <h3>В процессе</h3>
        {inProgressTasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
      <div className="column default-font">
        <h3>Завершено</h3>
        {doneTasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
