import {
  workerDeleted, workerEdited, workerAdded,
} from './actionTypes';

export const deleteWorker = (id) => ({
  type: workerDeleted,
  payload: {
    id,
  },
});

export const editWorker = (id, name, position, age, startDate, salary, status) => ({
  type: workerEdited,
  payload: {
    id,
    name,
    position,
    age,
    startDate,
    salary,
    status,
  },
});

export const addWorker = (id, name, position, age, startDate, salary, status) => ({
  type: workerAdded,
  payload: {
    id,
    name,
    position,
    age,
    startDate,
    salary,
    status,
  },
});
