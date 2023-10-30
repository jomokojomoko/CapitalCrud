// import statements
import './App.css';
import { useEffect, useState } from 'react';
import EmployeeList from '../lists/employeeList';
import EmployeeModal from '../modals/employeeModal';
import AddEmployeeButton from '../buttons/addEmployeeButton';
import { Col, Container, Row } from 'react-bootstrap';
import TitleRow from '../table/titleRow';
import { CreateEmployee, GetAllData, UpdateEmployee, } from '../../data/employeeData';
// the front page that is displayed that allows to view and edit employee table
function EmployeePage() {
  // variables
  const [modalInfo, setModalInfo] = useState([false,""]);
  const [refresh, setRefresh] = useState(false);
  const [uId, setUId] = useState(-1);
  const [employeeData, setEmployeeData] = useState([]);
  // constants
  const headers = ["First Name", "Last Name", "Salary", ""];

  // populate employeeData
  function getEmployeeData() {
    GetAllData(setEmployeeData);
  }

  // update employee
 function updateEmployeeData(data){
    if(modalInfo[1]==="Add"){
      CreateEmployee(data);

    }else{
      UpdateEmployee(uId,data);
    }
    setEmployeeData([]);
  }


  // initialize employee data on start
  useEffect(() => {
    if(employeeData.length==0){
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
        <EmployeeList setModalInfo={setModalInfo} employeeData={employeeData} setRefresh={setRefresh} refresh={refresh} setUId={setUId} />
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
