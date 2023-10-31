// import packages
import { Button } from "react-bootstrap";
// css import
import "./button.css"
// button to press to delete employee of given id
function DeleteEmployeeButton({ dId, deleteEmployeeData }) {
    // calls function from employeePage.js to delete employee
    function deleteEmployee() {
       
        deleteEmployeeData(dId);
    }

    return (
        <Button className="Delete-Button" onClick={deleteEmployee}>Delete</Button>
    );
}

export default DeleteEmployeeButton;