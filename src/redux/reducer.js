/* eslint-disable no-restricted-syntax */
import {
  workerDeleted, workerEdited, workerAdded,
} from './actionTypes';

export const initState = {
  navbarIsOpened: false,
  workers: [
    {
      id: 0,
      name: 'Ahmed Omar',
      position: 'Front-End Developer',
      age: 22,
      start_date: '16/7/2021',
      salary: '3000$',
      status: 'Part-Time',
    },
    {
      id: 1,
      name: 'Ahmed Aymen',
      position: 'Front-End Developer',
      age: 22,
      start_date: '10/1/2021',
      salary: '4000$',
      status: 'Full-Time',
    },
    {
      id: 2,
      name: 'Omar Adel',
      position: 'Front-End Developer',
      age: 25,
      start_date: '20/8/2020',
      salary: '7000$',
      status: 'Full-Time',

    },
  ],
};

const filterWrokers = (state, action) => state.workers.filter((worker) => worker.id === action.payload.id);

const isEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  for (const objKey of obj1Keys) {
    if (obj1[objKey] !== obj2[objKey]) {
      return false;
    }
    return true;
  }
  return false;
};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case workerDeleted:
      return {
        ...state,
        workers: state.workers.filter((worker) => worker.id !== action.payload.id),
      };
    case workerEdited:
      filterWrokers(state, action).name = action.payload.name;
      filterWrokers(state, action).position = action.payload.position;
      filterWrokers(state, action).age = action.payload.age;
      filterWrokers(state, action).start_date = action.payload.start_date;
      filterWrokers(state, action).salary = action.payload.salary;
      filterWrokers(state, action).status = action.payload.status;
      return {
        ...state,
        workers: !isEqual(state.workers, action.payload) ? [...state.workers.filter((worker) => worker.id !== action.payload.id), action.payload]
          : [...state.workers, action.payload],

      };
    case workerAdded:
      return {
        ...state,
        workers: [...state.workers, action.payload],
      };
    default: return state;
  }
};
