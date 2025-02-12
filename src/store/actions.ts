import { CurrentStatusTask, Project, Task } from "./reducers";

export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const LOAD_TASKS = "LOAD_TASKS";
export const ADD_SUBTASK = "ADD_SUBTASK";
export const LOAD_PROJECTS = "LOAD_PROJECTS";
export const SAVE_PROJECTS = "SAVE_PROJECTS";
export const SAVE_TASKS = "SAVE_TASKS";
export const UPDATE_TASK_STATUS = "UPDATE_TASK_STATUS";

//--TASKS----------------------
export interface TasksFilters {
  taskHeader?: string;
  projectId?: string;
  taskNumber?: string;
}

export const loadTasks = (filters: TasksFilters) =>
  ({
    type: LOAD_TASKS,
    payload: filters,
  } as const);
export const saveTasks = (tasks: Task[]) =>
  ({
    type: SAVE_TASKS,
    payload: tasks,
  } as const);

export type TasksActions =
  | ReturnType<typeof loadTasks>
  | ReturnType<typeof saveTasks>
  | ReturnType<typeof updateTaskStatus>;

export const updateTaskStatus = (
  taskId: number,
  newStatus: CurrentStatusTask
) =>
  ({
    type: UPDATE_TASK_STATUS,
    payload: { taskId, newStatus },
  } as const);

//--PROJECTS------------------
export const loadProjects = () => ({ type: LOAD_PROJECTS } as const);
export const saveProjects = (projects: Project[]) =>
  ({
    type: SAVE_PROJECTS,
    payload: projects,
  } as const);

export type ProjectsActions =
  | ReturnType<typeof loadProjects>
  | ReturnType<typeof saveProjects>;
