import { ADDEMPLOYEES } from '../actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADDEMPLOYEES:
      return { ...state, employees: [...action.payload] };
    default:
      return state;
  }
};

export const initialState = {
  employees: [],
};
