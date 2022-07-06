import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from "../../IFs";

interface InitState {
  projects: Project[];
}

export const initialState: InitState = {
  projects: [
    {
      id: 0,
      name: 'Freeeze',
      clientName: 'Client one',
      budget: '100$',
      deadLine: '16/7/2021',
      teamNum: 3,
      status: 'On Going'
    },
    {
      id: 1,
      name: 'For You My Country',
      clientName: 'Client Two',
      budget: '150$',
      deadLine: '16/7/2021',
      teamNum: 2,
      status: 'Done'
    },
    {
      id: 2,
      name: 'Leader Dashboard',
      clientName: 'Client Two',
      budget: '200$',
      deadLine: '16/7/2021',
      teamNum: 4,
      status: 'On Going'
    },
    {
      id: 3,
      name: 'Credit Suite',
      clientName: 'Client Two',
      budget: '1000$',
      deadLine: '16/7/2021',
      teamNum: 5,
      status: 'On Going'
    },
    {
      id: 4,
      name: 'Green Galaxy',
      clientName: 'Client Two',
      budget: '380$',
      deadLine: '16/7/2021',
      teamNum: 2,
      status: 'On Going'
    },
  ],
};

const filterProjectsSlice = (state: InitState, action: PayloadAction<Project>) => {
  return state.projects.filter((project) => project.id === action.payload.id)
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects = [...state.projects, action.payload];
    },
    editProject: (state, action: PayloadAction<Project>) => {
      const projectIndex = state.projects.findIndex((project) => project.id === action.payload.id);
      if (projectIndex != -1) {
        const newProjectsData = [...state.projects];
        newProjectsData[projectIndex] = action.payload;
        state.projects = newProjectsData;
      }
    },
    deleteProject: (state, action: PayloadAction<number>) => {
      state.projects = state.projects.filter((project) => project.id !== action.payload);
    },
  }
});

export const { addProject, editProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;