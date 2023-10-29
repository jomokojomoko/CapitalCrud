// import statements
import './App.css';
import { useEffect, useState } from 'react';
import EmployeeList from '../lists/employeeList';
import EmployeeModal from '../modals/employeeModal';
import AddEmployeeButton from '../buttons/addEmployeeButton';
// the front page that is displayed that allows to view and edit employee table
function EmployeePage() {
  //variables
  const [showAddModal, setShowAddModal] = useState(false);
  // load employee data
  
  
  return (
    <div >
      <EmployeeModal mShow={showAddModal} setShow={setShowAddModal}/>
      <EmployeeList />
      <AddEmployeeButton setShowAddModal={setShowAddModal}/>
    </div>
  );
}

export default EmployeePage;
