import { configureStore } from '@reduxjs/toolkit';
import WorkersReducer from "./slices/workersSlice";

export const store = configureStore({
  reducer: {
    workers: WorkersReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
