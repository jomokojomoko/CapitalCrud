// import statements
import { useEffect } from "react";
import Col from 'react-bootstrap/Col';
import DeleteEmployeeButton from "../buttons/deleteEmployeeButton";
import Row from 'react-bootstrap/Row';

//All the components that is part of a row for employmentList
function EmployeeRow({ employeeData }) {

    return (
        <Row>
            <Col >{employeeData["first_name"]}</Col><Col>{employeeData["last_name"]}</Col><Col>{employeeData["salary"]}</Col><Col><DeleteEmployeeButton dId={employeeData.id}/></Col>
        </Row> 
    );

}
export default EmployeeRow;