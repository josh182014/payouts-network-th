import { TEST } from '../actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case TEST:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export const initialState = {
  count: 0,
};
