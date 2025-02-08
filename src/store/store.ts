import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { taskReducer, projectReducer } from "./reducers.ts";
import { watchTasks } from "./saga.ts";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    tasks: taskReducer,
    projects: projectReducer,
  }),
  undefined,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchTasks);
