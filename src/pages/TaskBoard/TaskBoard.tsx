import '../../index.css';
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "../../store/actions.ts";
import { TaskField } from "../../components/task-column/TaskColumn.tsx";
import { useSearchParams } from "react-router-dom";
import { CurrentStatusTask, State, Task } from "../../store/reducers.ts";
import { Search } from "../../components/Search/Search.tsx";

type GrouppedTasks = {
  [K in CurrentStatusTask]: Task[];
};

export const TaskComponent = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: State) => state.tasks);
  const [queryParams, setQueryParams] = useSearchParams();
  const projectId = queryParams.get("projectId");

  useEffect(() => {
    const fetchData = async () => {
      dispatch(loadTasks({ projectId: projectId ?? undefined }));
    };

    fetchData();
  }, [dispatch, projectId]);

  const handleSearch = (term) => {
    // Логика поиска по номеру задачи и названию
    console.log("Ищем:", term);
  };

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

  return (
    <div>
      <h1 className="default-font">Список задач</h1>
      <Search onSearch={handleSearch}/>
      <TaskField
        todoTasks={groupedTasks[CurrentStatusTask.Queue]}
        inProgressTasks={groupedTasks[CurrentStatusTask.Development]}
        doneTasks={groupedTasks[CurrentStatusTask.Done]}
      />
    </div>
  );
};
