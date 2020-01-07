import React, { useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { addemployees } from '../../redux/actions';
import './newemployee.scss';

const NewEmployee = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleSubmit = () => {
    Axios.post(`${process.env.REACT_APP_API_ENDPOINT}/employees`, form)
      .then((response) => {
        dispatch(addemployees(response.data));
      })
      .catch((error) => {
        console.log(error) // eslint-disable-line
      });
  };

  const handleChanges = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="new-employee-wrapper">
      <h3>Create New Recipient</h3>
      <a href="/">Cancel</a>
      <div className="form-container">
        <h2>Enter Recipient Details</h2>
        <form name="contact" onSubmit={handleSubmit}>
          <div>
            <div>First Name</div>
            <input
              autoCapitalize="none"
              type="text"
              name="firstName"
              placeholder="i.e. Johnathon"
              onChange={handleChanges}
              value={form.firstName}
              required
            />
          </div>
          <div>
            <div>Street Address</div>
            <input
              autoCapitalize="none"
              type="text"
              name="address"
              placeholder="i.e. 123 Forest Avenue"
              onChange={handleChanges}
              value={form.address}
              required
            />
          </div>
          <div>
            <div>Last Name</div>
            <input
              autoCapitalize="none"
              type="text"
              name="lastName"
              placeholder="i.e. Doe"
              onChange={handleChanges}
              value={form.lastName}
              required
            />
          </div>
          <div>
            <div>City</div>
            <input
              autoCapitalize="none"
              type="text"
              name="city"
              placeholder="i.e. Irvine"
              onChange={handleChanges}
              value={form.city}
              required
            />
          </div>
          <div>
            <div>Email</div>
            <input
              autoCapitalize="none"
              type="email"
              name="email"
              placeholder="i.e. johndoe@email.com"
              onChange={handleChanges}
              value={form.email}
            />
          </div>
          <div>
            <div>State</div>
            <input
              autoCapitalize="none"
              type="text"
              name="state"
              placeholder="i.e. California"
              onChange={handleChanges}
              value={form.state}
              required
            />
          </div>
          <div>
            <div>Phone</div>
            <input
              autoCapitalize="none"
              type="text"
              name="phone"
              placeholder="i.e. 123-456-7891"
              onChange={handleChanges}
              value={form.phone}
            />
          </div>
          <div>
            <div>Zip Code</div>
            <input
              autoCapitalize="none"
              type="text"
              name="zip"
              placeholder="i.e. 92289"
              onChange={handleChanges}
              value={form.zip}
              required
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default NewEmployee;
