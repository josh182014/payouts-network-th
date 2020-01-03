import { TEST, ADDEMPLOYEES } from '../actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case TEST:
      return { ...state, count: state.count + 1 };
    case ADDEMPLOYEES:
      console.log(action.payload)
      return { ...state, employees: [...action.payload] };
    default:
      return state;
  }
};

export const initialState = {
  count: 0,
  employees: [],
};
