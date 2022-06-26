export const initState = {
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

// const filterProjects = (state, action) => state.projects.filter((project) => project.id === action.payload.id);

// const isEqual = (obj1, obj2) => {
//   const obj1Keys = Object.keys(obj1);
//   for (const objKey of obj1Keys) {
//     if (obj1[objKey] !== obj2[objKey]) {
//       return false;
//     }
//     return true;
//   }
//   return false;
// };

// export const projectsReducer = (state = initState, action) => {
//   switch (action.type) {
//     case projectDeleted:
//       return {
//         ...state,
//         projects: state.projects.filter((project) => project.id !== action.payload.id),
//       };
//     case projectEdited:
//       filterProjects(state, action).name = action.payload.name;
//       filterProjects(state, action).position = action.payload.position;
//       filterProjects(state, action).age = action.payload.age;
//       filterProjects(state, action).start_date = action.payload.start_date;
//       filterProjects(state, action).salary = action.payload.salary;
//       filterProjects(state, action).status = action.payload.status;

//       return {
//         ...state,
//         projects: !isEqual(state.projects, action.payload) ? [...state.projects.filter((project) => project.id !== action.payload.id), action.payload]
//           : [...state.projects, action.payload],
//       };
//     case projectAdded:
//       return {
//         ...state,
//         projects: [...state.projects, action.payload],
//       };
//     default: return state;
//   }
// };
