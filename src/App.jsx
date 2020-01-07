import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import mockEmployees from './mockemployees';
import './App.scss';
import Employees from './components/employees/employees';
import { addemployees } from './redux/actions';
import Axios from 'axios';
import NewEmployee from './components/addemployee/NewEmployee';

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
      <Route
        exact
        path="/"
        render={() => (
          <Employees />
        )}
      />
      <Route
        path="/addemployee"
        render={() => (
          <NewEmployee />
        )}
      />
    </div>
  );
}

export default App;
