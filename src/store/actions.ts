export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const LOAD_TASKS = 'LOAD_TASKS';
export const ADD_SUBTASK = 'ADD_SUBTASK';
export const LOAD_PROJECTS = 'LOAD_PROJECTS';

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const editTask = (task) => ({ type: EDIT_TASK, payload: task });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });
export const loadTasks = (tasks) => ({ type: LOAD_TASKS ,payload:tasks});
export const addSubtask = (id, subtask) => ({ type: ADD_SUBTASK, payload: { id, subtask } });
export const loadProjects = (projects) => ({ type: LOAD_PROJECTS, payload: projects });