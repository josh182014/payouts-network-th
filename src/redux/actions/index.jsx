export const TEST = 'TEST';
export const ADDEMPLOYEES = 'ADDEMPLOYEES';

export const test = () => ({
  type: TEST,
});

export const addemployees = (employees) => ({
  type: ADDEMPLOYEES,
  payload: employees,
});
