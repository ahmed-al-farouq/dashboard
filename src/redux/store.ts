import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from "./slices/employeesSlice";
import projectsReducer from './slices/projectsReducer';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    projects: projectsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
