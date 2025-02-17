import {
  SAVE_PROJECTS,
  TasksActions,
  SAVE_TASKS,
  ProjectsActions,
  UPDATE_TASK
} from "./actions.ts";

export interface Task {
  id: number;
  header: string;
  title: string;
  createDate: string;
  timeWork: string;
  endDate: string;
  priority: Prioritys;
  attachedFiles: string[];
  currentStatus: CurrentStatusTask;
  comment: Comment[];
  projectId: string;
}

export enum Prioritys {
  Low,
  Medium,
  High,
  Critical,
}

export enum CurrentStatusTask {
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
export interface Searh {
  id: string;
  title: string;
}

export interface State {
  tasks: Task[];
  projects: Project[];
  search: Searh[];
}

export const initialState: State = {
  tasks: [],
  projects: [],
  search: [],
};

export const taskReducer = (
  state: State["tasks"] | undefined = initialState.tasks,
  action: TasksActions
) => {
  switch (action.type) {
    case SAVE_TASKS:
      return action.payload;
      case UPDATE_TASK: {
        const { taskId, newStatus } = action.payload;
        return state.map(task =>
          task.id === taskId ? { ...task, currentStatus: newStatus } : task
        );
      }
    default:
      return state;
  }
};

export const projectReducer = (
  state: State["projects"] | undefined = initialState.projects,
  action: ProjectsActions
) => {
  switch (action.type) {
    case SAVE_PROJECTS:
      return action.payload;
    default:
      return state;
  }
};
