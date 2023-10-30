// import packages
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import components
import DeleteEmployeeButton from "../buttons/deleteEmployeeButton";
import UpdateEmployeeButton from "../buttons/updateEmployeeButton";
//All the components that is part of a row for employmentList
function EmployeeRow({ employeeData, deleteEmployeeData, setModalInfo, setUId }) {
    // salary to money format
    const formattedSalary = employeeData.salary.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    
    return (
        <Row>
            <Col >{employeeData["first_name"]}</Col><Col>{employeeData["last_name"]}</Col><Col>{formattedSalary}</Col><Col><UpdateEmployeeButton setUId={setUId} uId={employeeData.id} setModalInfo={setModalInfo} /><DeleteEmployeeButton dId={employeeData.id} deleteEmployeeData={deleteEmployeeData} /></Col>
        </Row>
    );

}

export default EmployeeRow;