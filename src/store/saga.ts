import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  loadTasks,
  LOAD_TASKS,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  loadProjects,
  LOAD_PROJECTS,
  ADD_SUBTASK,
  saveProjects,
  saveTasks,
} from "./actions.ts";
import { Task } from "./reducers.ts";

//  API
const API_URL = "http://localhost:777";

// Функции для выполнения запросов
function* fetchTasks(action:ReturnType<typeof loadTasks>) {
  try {
    const { projectId } = action.payload;
    const response = yield call(axios.get<Task>, `${API_URL}/tasks`, {
      params: { projectId},
    });
    yield put(saveTasks(response.data));
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

function* editTask(action) {
  try {
    const response = yield call(
      axios.put<Task>,
      `${API_URL}/tasks/${action.payload.id}`,
      action.payload
    );
    yield put({ type: EDIT_TASK, payload: response.data });
  } catch (error) {
    console.error("Error editing task:", error);
  }
}

function* deleteTask(action) {
  try {
    yield call(axios.delete, `${API_URL}/tasks/${action.payload}`);
    yield put({ type: DELETE_TASK, payload: action.payload });
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}

// Сага для добавления подзадачи
function* addSubtask(action) {
  try {
    const response = yield call(
      axios.post,
      `${API_URL}/tasks/${action.payload.id}/subtasks`,
      action.payload.subtask
    );
  } catch (error) {
    console.error("Error adding subtask:", error);
  }
}
function* fetchProjects() {
  try {
    const response = yield call(axios.get, `${API_URL}/projects`);

    yield put(saveProjects(response.data));
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

// Основная функция для запуска саг
export function* watchTasks() {
  yield takeEvery(LOAD_TASKS, fetchTasks);
  yield takeEvery(EDIT_TASK, editTask);
  yield takeEvery(DELETE_TASK, deleteTask);
  yield takeEvery(LOAD_PROJECTS, fetchProjects);
  yield takeEvery(ADD_SUBTASK, addSubtask);
}
