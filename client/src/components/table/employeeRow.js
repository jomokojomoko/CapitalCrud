// import statements
import { useEffect } from "react";
import Col from 'react-bootstrap/Col';
import DeleteEmployeeButton from "../buttons/deleteEmployeeButton";
import UpdateEmployeeButton from "../buttons/updateEmployeeButton";
import Row from 'react-bootstrap/Row';

//All the components that is part of a row for employmentList
function EmployeeRow({ employeeData, setRefresh, setModalInfo, setUId }) {
    const formattedSalary = employeeData.salary.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      });

    return (
        <Row>
            <Col >{employeeData["first_name"]}</Col><Col>{employeeData["last_name"]}</Col><Col>{formattedSalary}</Col><Col><UpdateEmployeeButton setUId={setUId} uId={employeeData.id} setModalInfo={setModalInfo}/><DeleteEmployeeButton dId={employeeData.id} setRefresh={setRefresh} /></Col>
        </Row>
    );

}
export default EmployeeRow;