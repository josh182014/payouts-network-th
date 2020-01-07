import React from 'react';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import { addemployees } from '../../redux/actions';
import './employee.scss';

const Employee = ({ employee }) => {
  const dispatch = useDispatch();

  const handleActivation = () => {
    if (!employee.active) {
      Axios.patch(`${process.env.REACT_APP_API_ENDPOINT}/employees/${employee.id}`)
        .then((response) => {
          dispatch(addemployees(response.data));
        })
        .catch((error) => {
          console.log(error) // eslint-disable-line
        });
    } else {
      Axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/employees/${employee.id}`)
        .then((response) => {
          dispatch(addemployees(response.data));
        })
        .catch((error) => {
          console.log(error) // eslint-disable-line
        });
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
