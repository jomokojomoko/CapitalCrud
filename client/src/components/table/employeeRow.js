// import statements
import { useEffect } from "react";
import Col from 'react-bootstrap/Col';

//All the components that is part of a row for employmentList
function EmployeeRow({ employeeData }) {

    return (
        <div>
            <Col>{employeeData["first_name"]}</Col><Col>{employeeData["last_name"]}</Col><Col>{employeeData["salary"]}</Col>
        </div>
    )

}
export default EmployeeRow;