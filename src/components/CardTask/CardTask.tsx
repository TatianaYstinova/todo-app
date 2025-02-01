import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { loadTasks } from "../../store/actions";

export const CardTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task.tasks);

  useEffect(() => {
    dispatch(loadTasks(tasks));
  }, [dispatch]);

  const [subTasks, setSubTasks] = useState<string[]>([]);

  const addSubTask = () => {
    const newSubTask = prompt("Введите подзадачу:");
    if (newSubTask) setSubTasks([...subTasks, newSubTask]);
  };

  return (
    <div className="card-task">
      <div>
        {tasks.map((task) => (
          <div className="card" key={task.id}>
            <div className="box">
              <div className="content">
                <h1>
                  Номер : {task.id}
                  {task.header}
                </h1>
                <h2>Описание : {task.title}</h2>
                <div>
                  Дата создания :{task.createDate}
                  Время в работе :{task.timeWork}
                  Дата окончания :{task.endDate}
                </div>
                <div>Приоритет : {task.priority}</div>
                <div>Текущий статус :{task.currentStatus}</div>
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
        ))}
      </div>
    </div>
  );
};


