import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "../../store/actions.ts";
import { TaskField } from "../../components/TaskField/TaskField.tsx";
import { useSearchParams } from "react-router-dom";
import { CurrentStatusTask, State, Task } from "../../store/reducers.ts";

type GrouppedTasks = {
  [K in CurrentStatusTask]: Task[];
};

export const TaskComponent = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: State) => state.tasks);
  const [queryParams, setQueryParams] = useSearchParams();
  const projectId = queryParams.get("projectId");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      dispatch(loadTasks({ projectId: projectId ?? undefined }));
      setLoading(false);
    };

    fetchData();
  }, [dispatch, projectId]);

  console.log({ tasks: tasks });

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
      <h1>Список задач</h1>
      <TaskField
        todoTasks={groupedTasks[CurrentStatusTask.Queue]}
        inProgressTasks={groupedTasks[CurrentStatusTask.Development]}
        doneTasks={groupedTasks[CurrentStatusTask.Done]}
      />
    </div>
  );
};
