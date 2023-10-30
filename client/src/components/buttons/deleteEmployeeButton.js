// import statements
import { Button } from "react-bootstrap";
import EmployeeService from "../../services/employeeService";
// css import
import "./button.css"

function DeleteEmployeeButton({ dId, deleteEmployeeData }) {
    function deleteEmployee(){
        deleteEmployeeData(dId);
    }
    return (
        <Button className="Delete-Button" onClick={deleteEmployee}>Delete</Button>
    );
}

export default DeleteEmployeeButton;