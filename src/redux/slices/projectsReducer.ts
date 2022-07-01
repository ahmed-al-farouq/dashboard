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
      budget: '200$',
      deadLine: '16/7/2021',
      whoWorksOnIt: 'Ahmed Omar, Mohamed Omar',
    },
    {
      id: 1,
      name: 'For You My Country',
      budget: '200$',
      deadLine: '16/7/2021',
      whoWorksOnIt: 'Ahmed Omar, Omar Adel',
    },
    {
      id: 2,
      name: 'Leader Dashboard',
      budget: '200$',
      deadLine: '16/7/2021',
      whoWorksOnIt: 'Ahmed Omar, Omar Adel',
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