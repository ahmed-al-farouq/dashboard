import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../../IFs';

interface InitState {
  navbarIsOpened: boolean;
  employees: Employee[];
}

export const initialState :  InitState = {
  navbarIsOpened: false,
  employees: [
    {
      id: 0,
      name: 'Ahmed Omar',
      position: 'Front-End Developer',
      age: "22",
      start_date: '16/7/2021',
      salary: '3000$',
      status: 'Part-Time',
    },
    {
      id: 1,
      name: 'Ahmed Aymen',
      position: 'Front-End Developer',
      age: "22",
      start_date: '10/1/2021',
      salary: '4000$',
      status: 'Full-Time',
    },
    {
      id: 2,
      name: 'Omar Adel',
      position: 'Front-End Developer',
      age: "25",
      start_date: '20/8/2020',
      salary: '7000$',
      status: 'Full-Time',

    },
  ],
};

const filterEmployeesSlice = (state: InitState, action: PayloadAction<Employee>) => {
  return state.employees.filter((employee) => employee.id === action.payload.id)
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees = [...state.employees, action.payload];
    },
    editEmployee: (state, action: PayloadAction<Employee>) => {
      const employeeIndex = state.employees.findIndex((employee) => employee.id === action.payload.id);
      if (employeeIndex != -1) {
        const newEmployeesData = [...state.employees];
        newEmployeesData[employeeIndex] = action.payload;
        state.employees = newEmployeesData;
      }
    },
    deleteEmployee: (state, action: PayloadAction<number>) => {
      state.employees = state.employees.filter((employee) => employee.id !== action.payload);
    },
  }
});

export const { addEmployee, editEmployee, deleteEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;