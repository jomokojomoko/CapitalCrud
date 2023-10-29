//import statements
import { Button } from "react-bootstrap";
import EmployeeService from "../../services/employeeService";

function DeleteEmployeeButton({setShowAddModal}){
    
    function addEmployee() {
       
            setShowAddModal(true);
    }

    return(
        <Button className="Delete-Button" onClick={deleteEmployee}>Delete</Button>
    );
}

export default Delete;