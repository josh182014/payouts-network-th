import React from 'react';
import './employee.scss';
import Axios from 'axios';

const Employee = ({ employee }) => {

  const handleActivation = () => {
    if (!employee.active) {
      Axios.patch(`${process.env.REACT_APP_API_ENDPOINT}/employees/${employee.id}`);
    } else {
      Axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/employees/${employee.id}`);
    }
  };
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
        <td>{employee.active ? <span onClick={handleActivation}>Active X</span> : <span onClick={handleActivation}>Inactive +</span>}</td>
      </tr>
    </>
  );
};

export default Employee;
