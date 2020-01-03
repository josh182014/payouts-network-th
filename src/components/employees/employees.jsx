import React from 'react';
import { useSelector } from 'react-redux';
import Employee from '../employee/employee';
import './employees.scss';

const Employees = () => {
  const employees = useSelector((state) => state.employees);
  console.log('here', employees)
  return (
    <div className="employees-wrapper">
      <h3>Manage Recipients</h3>
      <button type="button" className="new-button">Create New Recipient</button>
      <div className="form-container">
        <input
          className="search"
          placeholder="Search"
        />
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
          {employees.map((each) => (
            <Employee employee={each} />
          ))}
        </table>
        <div className="see-more">
          View More
        </div>
      </div>
    </div>
  );
};

export default Employees;
