import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  LOAD_TASKS,
  LOAD_PROJECTS,
} from "./actions.ts";
export interface Task {
  id: number;
  header: string;
  title: string;
  createDate: string;
  timeWork: string;
  endDate: string;
  priority: Prioritys;
  attachedFiles: string [];
  currentStatus: CurrentStatusTask;
  comment:Comment[] ;
  
}
export enum Prioritys{
  Low,
  Medium,
  High,
  Critical
}
export enum CurrentStatusTask{
Queue,
Development,
Done,
}
export interface Comment {
  id: number;
  text: string;
  replies: Comment[];
}
export interface Project {
  id: string;
  title: string;
}
interface State {
  tasks: Task[];
  projects: Project[];
}
const initialState = {
  tasks: [],
  projects: [],
};

export const taskReducer = (state: State = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
       case EDIT_TASK:
           return {
               ...state,
               tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
           };
       case DELETE_TASK:
           return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    case LOAD_TASKS:
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS:
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};
