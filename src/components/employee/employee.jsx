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
        <td><a href={`mailto:${employee.email}`}>{employee.email}</a></td>
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
        <td>{employee.active ? `Active ${'X'}` : `Inactive ${'+'}`}</td>
      </tr>
    </>
  );
};

export default Employee;
