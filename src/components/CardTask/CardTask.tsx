import "../../index.css";
import "./CardTask.css";
import React, { useState } from "react";
import { CurrentStatusTask, Prioritys } from "../../store/reducers.ts";
import { Modal } from "../../modals/Modal.tsx";
import { Typo } from "../../shared/index.ts";

export const CardTask = ({ task }) => {
  const [subTasks, setSubTasks] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addSubTask = () => {
    const newSubTask = prompt("Введите подзадачу:");
    if (newSubTask) setSubTasks([...subTasks, newSubTask]);
  };

  const getPriorityString = (priority: Prioritys): string => {
    switch (priority) {
      case Prioritys.Low:
        return "Низкий";
      case Prioritys.Critical:
        return "Критический";
      case Prioritys.High:
        return "Высокий";
      case Prioritys.Medium:
        return "Середина";
      default:
        return "Неизвестный приоритет";
    }
  };
  const getStatusString = (status: CurrentStatusTask): string => {
    switch (status) {
      case CurrentStatusTask.Queue:
        return "В очереди";
      case CurrentStatusTask.Development:
        return "В разработке";
      case CurrentStatusTask.Done:
        return "Завершено";
      default:
        return "Неизвестный статус";
    }
  };

  return (
    <div className="card-task">
      <div>
        <div className="card" key={task.id}>
          <div className="box">
            <div className="content default-font">
              <h4>
                {task.id} - {task.header}
              </h4>
              <Typo size="small">Дата создания :{task.createDate}</Typo>
              <Typo size="small">
                Приоритет : {getPriorityString(task.priority)}
              </Typo>
              <Typo size="small">
                Текущий статус :{getStatusString(task.currentStatus)}
              </Typo>
              <div className="details">
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  Детали
                </button>
              </div>
              <div>
                {task.attachedFiles.length > 0 && (
                  <div>
                    <h3>Прикрепленные файлы:</h3>
                    {task.attachedFiles.map((fileUrl, index) => (
                      <img
                        key={index}
                        src={fileUrl}
                        alt={`attached file ${index}`}
                        style={{ width: "100px", height: "100px" }}
                      />
                    ))}
                  </div>
                )}
              </div>
              <button onClick={addSubTask}>Добавить подзадачи</button>
              <button>Редактировать</button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Детали задачи"
      >
        <h2>Описание: {task.title}</h2>
        <p>Время в работе: {task.timeWork}</p>
        <p>Дата окончания: {task.endDate}</p>
        <h3>Подзадачи:</h3>
        <ul>
          {subTasks.map((subTask, index) => (
            <li key={index}>{subTask}</li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};
