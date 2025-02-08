import {
  SAVE_PROJECTS,
  TasksActions,
  SAVE_TASKS,
  ProjectsActions,
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

export interface State {
  tasks: Task[];
  projects: Project[];
}

export const initialState: State = {
  tasks: [],
  projects: [],
};

export const taskReducer = (
  state: State["tasks"] | undefined = initialState.tasks,
  action: TasksActions
) => {
  switch (action.type) {
    case SAVE_TASKS:
      return action.payload;
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
