import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {taskReducer,projectReducer} from './reducers.ts';
import { watchTasks } from './saga.ts';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  task: taskReducer,
  project: projectReducer,
});
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchTasks);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

