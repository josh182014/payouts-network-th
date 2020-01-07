import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mockEmployees from './mockemployees';
import './App.scss';
import Employees from './components/employees/employees';
import { addemployees } from './redux/actions';
import Axios from 'axios';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addemployees(mockEmployees));
    Axios.get(`${process.env.REACT_APP_API_ENDPOINT}/employees`)
      .then((response) => {
        dispatch(addemployees(response.data));
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line
      });
  });


  return (
    <div className="App">
      <div className="sidebar">
        <span className="icon">Icon</span>
      </div>
      <Employees />
    </div>
  );
}

export default App;
