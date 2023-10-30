// import statements
import './App.css';
import { useEffect, useState } from 'react';
import EmployeeList from '../lists/employeeList';
import EmployeeModal from '../modals/employeeModal';
import AddEmployeeButton from '../buttons/addEmployeeButton';
import UpdateModal from '../modals/updateModal';
// the front page that is displayed that allows to view and edit employee table
function EmployeePage() {
  //variables
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [uId, setUId] = useState(-1);

  return (
    <div >
      <EmployeeModal mShow={showAddModal} setRefresh={setRefresh} setShow={setShowAddModal} />
      <UpdateModal mShow={showUpdateModal} setRefresh={setRefresh} setShow={setShowUpdateModal} uId={uId} />
      <EmployeeList setShowUpdateModal={setShowUpdateModal} setRefresh={setRefresh} refresh={refresh} setUId={setUId} />
      <div className="Add-Button">
        <AddEmployeeButton setShowAddModal={setShowAddModal} />
      </div>
    </div>
  );
}

export default EmployeePage;
