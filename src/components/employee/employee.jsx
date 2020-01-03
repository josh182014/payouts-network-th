import React from 'react';
import './employee.scss';

const Employee = ({ employee }) => {
  return (
    <>
      <tr>
        <td>
          {employee.firstName}
          {' '}
          {employee.lastName}
        </td>
        <td>{employee.email}</td>
        <td>{employee.phone}</td>
        <td>
          {employee.address}
          {' '}
          {employee.city}
          {', '}
          {employee.state}
          {' '}
          {employee.zipcode}
        </td>
        <td>{employee.status ? 'Inactive' : 'Active'}</td>
      </tr>
    </>
  );
};

export default Employee;
