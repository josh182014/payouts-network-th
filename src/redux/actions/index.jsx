export const ADDEMPLOYEES = 'ADDEMPLOYEES';

export const addemployees = (employees) => ({
  type: ADDEMPLOYEES,
  payload: employees,
});
