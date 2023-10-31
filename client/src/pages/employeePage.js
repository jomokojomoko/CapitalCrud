// imports css
import './App.css';
// import packages
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import components
import EmployeeList from '../components/lists/employeeList';
import EmployeeModal from '../components/modals/employeeModal';
import AddEmployeeButton from '../components/buttons/addEmployeeButton';
import TitleRow from '../components/table/titleRow';
import { CreateEmployee, DeleteEmployee, GetCount, GetPageData, UpdateEmployee, } from '../data/employeeData';
import EmployeeListPagination from '../components/paginations/employeeListPagination';
// the front page that is displayed that allows to view and edit employee table
function EmployeePage() {
  // variables
  const [modalInfo, setModalInfo] = useState([false, ""]);
  const [uId, setUId] = useState(-1);
  const [page, setPage] = useState(1);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [employeeData, setEmployeeData] = useState(null);
  // constants
  const headers = ["First Name", "Last Name", "Salary", ""];
  const numPerPage = 5;

  // populate employeeData
  function getEmployeeData() {
    GetCount(setEmployeeCount);
    console.log(employeeCount);
    GetPageData(page, numPerPage, setEmployeeData);
  }

  // update employeeData by adding or updating an employee
  function updateEmployeeData(data) {
    if (modalInfo[1] === "Add") {
      CreateEmployee(data);
    } else if (modalInfo[1] === "Update") {
      UpdateEmployee(uId, data);
    }
    setEmployeeData(null);
  }

  // delete a employee
  function deleteEmployeeData(id) {
    DeleteEmployee(id);
    if (employeeData.length === 1) {
      setEmployeeData([]);
    } else {
      setEmployeeData(null);

    }
  }

  // initialize employee data on start
  useEffect(() => {
    if (employeeData == null) {
      getEmployeeData();
    }
  }, [employeeData]);

  return (
    <div >
      <Container>
        <h1>Employees</h1>
        <TitleRow headers={headers} />
        <hr></hr>
        <EmployeeModal modalInfo={modalInfo} setModalInfo={setModalInfo} updateList={updateEmployeeData} />
        <EmployeeList setModalInfo={setModalInfo} deleteEmployeeData={deleteEmployeeData} employeeData={employeeData} setUId={setUId} />
        <EmployeeListPagination numPerPage={numPerPage} setPage={setPage} numItems={employeeCount} />
        <Row>
          <Col md={3} className="Button-Col">
            <div className='Add-Button'>
              <AddEmployeeButton setModalInfo={setModalInfo} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EmployeePage;
