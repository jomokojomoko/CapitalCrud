// import statements
import './App.css';
import { useEffect, useState } from 'react';
import EmployeeList from '../lists/employeeList';
import EmployeeModal from '../modals/employeeModal';
import AddEmployeeButton from '../buttons/addEmployeeButton';
import UpdateModal from '../modals/updateModal';
import { Col, Container, Row } from 'react-bootstrap';
import TitleRow from '../table/titleRow';
// the front page that is displayed that allows to view and edit employee table
function EmployeePage() {
  //variables
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [uId, setUId] = useState(-1);
  const headers = ["First Name", "Last Name", "Salary",""];
  return (
    <div >
      <Container>
        <h1>Employees</h1>
        <TitleRow headers={headers} />
        <hr></hr>
        <EmployeeModal mShow={showAddModal} setRefresh={setRefresh} setShow={setShowAddModal} />
        <UpdateModal mShow={showUpdateModal} setRefresh={setRefresh} setShow={setShowUpdateModal} uId={uId} />
        <EmployeeList setShowUpdateModal={setShowUpdateModal} setRefresh={setRefresh} refresh={refresh} setUId={setUId} />
        <Row>
          <Col md={3} className="Button-Col">
            <div className='Add-Button'>
              <AddEmployeeButton setShowAddModal={setShowAddModal} />
            </div>
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default EmployeePage;
