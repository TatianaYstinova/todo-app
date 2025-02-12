import "../../index.css";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "../../store/actions.ts";
import { TaskField } from "../../components/task-column/TaskColumn.tsx";
import { useSearchParams } from "react-router-dom";
import { CurrentStatusTask, State, Task } from "../../store/reducers.ts";
import { Search } from "../../components/Search/Search.tsx";
import { Modal } from "../../modals/Modal.tsx";

type GrouppedTasks = {
  [K in CurrentStatusTask]: Task[];
};

export const TaskComponent = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: State) => state.tasks);
  const [query, setQuery] = useSearchParams();
  const projectId = query.get("projectId");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchQuery = query.get("search") || ""; // используем одно поле для поиска
  

  useEffect(() => {
    const fetchData = async () => {
      const [taskNumber, taskHeader] = searchQuery.split(" "); // разбиваем строку на номер и заголовок
      dispatch(
        loadTasks({
          projectId: projectId ?? undefined,
          taskNumber: taskNumber || undefined,
          taskHeader:taskHeader || undefined
        })
      );
    };

    fetchData();
  }, [dispatch, projectId,searchQuery]);

  const groupedTasks = useMemo(
    () =>
      tasks.reduce<GrouppedTasks>(
        (_grouppedTasks, task) => {
          _grouppedTasks[task.currentStatus].push(task);

          return _grouppedTasks;
        },
        {
          [CurrentStatusTask.Queue]: [],
          [CurrentStatusTask.Done]: [],
          [CurrentStatusTask.Development]: [],
        }
      ),
    [tasks]
  );
  useEffect(() => {
    if (tasks.length === 0 && searchQuery) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [tasks, searchQuery]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const setSearchFieldValue = (value?: string) => {
    setQuery((prev) => {
      if (value) {
        prev.set("search", value);
      } else {
        prev.delete("search");
      }

      return prev;
    });
  };
  const onDragEnd = (result) => {
    if (!result.destination) return;

    // Получаем задачу
    const draggedTask = tasks[result.source.index];

    // Обновляем статус задачи в зависимости от столбца
    const newStatus = result.destination.droppableId;

    // Здесь вам нужно будет обновить статус задачи в вашем состоянии
    // Например, вызвать действие Redux для обновления статуса задачи
    dispatch(updateTaskStatus(draggedTask.id, newStatus));

    
  };

  return (
    <div>
      <h1 className="default-font">Список задач</h1>
      <Search value={searchQuery} onChange={setSearchFieldValue} />
      <TaskField
        todoTasks={groupedTasks[CurrentStatusTask.Queue]}
        inProgressTasks={groupedTasks[CurrentStatusTask.Development]}
        doneTasks={groupedTasks[CurrentStatusTask.Done]}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={`Задача с номером  и названием 
          не найдена.`}
        children={undefined}
      />
    </div>
  );
};
