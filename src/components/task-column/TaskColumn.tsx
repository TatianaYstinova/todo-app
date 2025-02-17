import "../../index.css";
import React from "react";
import "./TaskColumn.css";
import { CardTask } from "../CardTask/CardTask.tsx";
import { useDrop } from "react-dnd";
import { CurrentStatusTask } from "../../store/reducers.ts";
interface DragItem {
  id: string;
}
export const TaskField = ({
  todoTasks,
  inProgressTasks,
  doneTasks,
  moveCard,
}) => {
  const [, dropTodo] = useDrop({
    accept: "TASK",
    drop: (item: DragItem) => {
      moveCard(item.id, CurrentStatusTask.Queue);
    },
  });

  const [, dropInProgress] = useDrop({
    accept: "TASK",
    drop: (item: DragItem) => {
      moveCard(item.id, CurrentStatusTask.Development);
    },
  });

  const [, dropDone] = useDrop({
    accept: "TASK",
    drop: (item: DragItem) => {
      moveCard(item.id, CurrentStatusTask.Done);
    },
  });
  return (
    <div className="container">
      <div
        ref={(arg) => {
          dropTodo(arg);
        }}
        className="column default-font"
      >
        <h3>Ожидает</h3>
        {todoTasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
      <div
        ref={dropInProgress as unknown as React.Ref<HTMLDivElement>}
        className="column default-font"
      >
        <h3>В процессе</h3>
        {inProgressTasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
      <div
        ref={dropDone as unknown as React.Ref<HTMLDivElement>}
        className="column default-font"
      >
        <h3>Завершено</h3>
        {doneTasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
