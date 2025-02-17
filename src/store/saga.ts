import { takeEvery, call, put, debounce } from "redux-saga/effects";
import axios from "axios";
import {
  loadTasks,
  LOAD_TASKS,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  LOAD_PROJECTS,
  ADD_SUBTASK,
  saveProjects,
  saveTasks,
  UPDATE_TASK,
  SAVE_TASKS,
  updateTask,
} from "./actions.ts";
import { Task } from "./reducers.ts";

const API_URL = "http://localhost:777";

// Функции для выполнения запросов
function* fetchTasks(action: ReturnType<typeof loadTasks>) {
  try {
    const { projectId, taskNumber, taskHeader } = action.payload;

    const response = yield call(axios.get<Task>, `${API_URL}/tasks`, {
      params: JSON.parse(
        JSON.stringify({ projectId, id: taskNumber, header: taskHeader })
      ),
    });

    yield put(saveTasks(response.data));
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}
function* updateTaskSaga(action: ReturnType<typeof updateTask>) {  
  try {
    const { taskId, newStatus } = action.payload;
    const response = yield call(axios.put<Task>, `${API_URL}/tasks/${taskId}`, {
      currentStatus: newStatus,
    });
  } catch (error) {
    console.error("Error updating task status:", error);
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
  yield debounce(400, LOAD_TASKS, fetchTasks);
  yield takeEvery(LOAD_PROJECTS, fetchProjects);
  yield takeEvery(UPDATE_TASK, updateTaskSaga);
}
