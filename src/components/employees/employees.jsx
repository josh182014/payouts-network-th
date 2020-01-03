import React from 'react';
import { useSelector } from 'react-redux';
import Employee from '../employee/employee';

const Employees = () => {
  const employees = useSelector((state) => state.employees);
  console.log('here', employees)
  return (
    <div>
      {employees.map((each) => (
        <Employee employee={each} />
      ))}
    </div>
  );
};

export default Employees;
