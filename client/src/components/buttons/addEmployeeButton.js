//import statements
import { Button } from "react-bootstrap";

function AddEmployeeButton({setShowAddModal}){
    
    function addEmployee() {
       
            setShowAddModal(true);
    }

    return(
        <Button onClick={addEmployee}>Add Employee</Button>
    );
}

export default AddEmployeeButton;