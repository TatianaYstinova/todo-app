import React from "react";
import "./TaskField.css";
import { CardTask } from "../../components/CardTask/CardTask.tsx";

export const TaskField = ({ todoTasks, inProgressTasks, doneTasks }) => {
  return (
    <div className="container">
      <div className="field">
        <h2>Ожидает</h2>
        {todoTasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
      <div className="field">
        <h2>В процессе</h2>
        {inProgressTasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
      <div className="field">
        <h2>Завершено</h2>
        {doneTasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
