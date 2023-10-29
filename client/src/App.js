// import statements
import './App.css';
import { useEffect, useState } from 'react';
import EmployeeData from './data/employeeData';
function App() {
  //variables
  const [employeeData,setEmployeeData]=useState([]);
  // load employee data
  useEffect(() => {
    EmployeeData.getAll(setEmployeeData)
    console.log(employeeData);
  },[]);
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
