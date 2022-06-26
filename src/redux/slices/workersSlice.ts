import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Worker {
  id: number;
  name: string;
  position: string;
  age: number;
  start_date: string;
  salary: string;
  status: string;
}

interface InitState {
  navbarIsOpened: boolean;
  workers: Worker[];
}

export const initialState :  InitState = {
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

const filterWorkers = (state:InitState, action: PayloadAction<Worker>) => {
  return state.workers.filter((worker) => worker.id === action.payload.id)
};

// const isEqual = (obj1: Worker, obj2: Worker) => {
//   const obj1Keys = Object.keys(obj1);
//   for (const objKey of obj1Keys) {
//     if (obj1[objKey] !== obj2[objKey]) {
//       return false;
//     }
//     return true;
//   }
//   return false;
// };

const workersSlice = createSlice({
  name: 'workers',
  initialState,
  reducers: {
    addWorker: (state, action: PayloadAction<Worker>) => {
      state.workers = [...state.workers, action.payload];
    },
    // editWorker: (state, action: PayloadAction<Worker>) => {
    //   filterWorkers(state, action)[0].name = action.payload.name;
    //   filterWorkers(state, action)[0].position = action.payload.position;
    //   filterWorkers(state, action)[0].age = action.payload.age;
    //   filterWorkers(state, action)[0].start_date = action.payload.start_date;
    //   filterWorkers(state, action)[0].salary = action.payload.salary;
    //   filterWorkers(state, action)[0].status = action.payload.status;

    //   if (!isEqual(state.workers, action.payload)) {
    //     state.workers = [...state.workers.filter((worker) => worker.id !== action.payload.id), action.payload];
    //   } else {
    //     state.workers = [...state.workers, action.payload];
    //   }
    // },
    deleteWorker: (state, action: PayloadAction<number>) => {
      state.workers = state.workers.filter((worker) => worker.id !== action.payload);
    },
  }
});

export default workersSlice.reducer;