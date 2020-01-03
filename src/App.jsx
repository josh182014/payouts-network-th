import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mockEmployees from './mockemployees';
import './App.scss';
import Employees from './components/employees/employees';
import { addemployees } from './redux/actions';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addemployees(mockEmployees));
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
