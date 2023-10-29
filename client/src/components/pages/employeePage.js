// import statements
import './App.css';
import { useEffect, useState } from 'react';
import EmployeeList from '../lists/employeeList';

// the front page that is displayed that allows to view and edit employee table
function EmployeePage() {
  //variables
  // load employee data
  
  
  return (
    <div >
      <EmployeeList/>
    </div>
  );
}

export default EmployeePage;
