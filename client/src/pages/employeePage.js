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
  const [refresh, setRefresh] = useState(false);

  // constants
  const headers = ["First Name", "Last Name", "Salary", ""];
  const numPerPage = 10;

  // populate employeeData and Count
  const employeeData = GetPageData(page, numPerPage, refresh, setRefresh);
  const employeeCount = GetCount(refresh, setRefresh);

  // update employeeData by adding or updating an employee
  function updateEmployeeData(data) {
    if (modalInfo[1] === "Add") {
      CreateEmployee(data, setRefresh);
    } else if (modalInfo[1] === "Update") {
      UpdateEmployee(uId, data, setRefresh);
    }
  }

  // delete a employee
  function deleteEmployeeData(id) {
    DeleteEmployee(id, setRefresh);
  }

  // called when a page is selected on the pagination
  function changePage(page) {
    setPage(page);
    setRefresh(true);
  }

  return (
    <div >
      <Container>
        <h1>Employees</h1>
        <TitleRow headers={headers} />
        <hr></hr>
        <EmployeeModal modalInfo={modalInfo} setModalInfo={setModalInfo} updateList={updateEmployeeData} />
        <EmployeeList setModalInfo={setModalInfo} deleteEmployeeData={deleteEmployeeData} employeeData={employeeData} setUId={setUId} />
        <Row className="Below-List">
          <Col md={3}>
            <EmployeeListPagination numPerPage={numPerPage} numItems={employeeCount} page={page} changePage={changePage} />
          </Col>
          <Col md={3} className="Button-Col">
            <div className="Add-Employee">
              <AddEmployeeButton className="Add" setModalInfo={setModalInfo} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EmployeePage;
