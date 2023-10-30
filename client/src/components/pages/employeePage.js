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
  const [refresh, setRefresh] = useState(false);


  return (
    <div >
      <EmployeeModal mShow={showAddModal} setRefresh={setRefresh} setShow={setShowAddModal} />
      <EmployeeList setRefresh={setRefresh} refresh={refresh}/>
      <div className="Add-Button">
        <AddEmployeeButton setShowAddModal={setShowAddModal} />
      </div>
    </div>
  );
}

export default EmployeePage;
