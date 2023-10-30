//import statements
import { Button } from "react-bootstrap";

function AddEmployeeButton({setModalInfo}){
    
    function addEmployee() { 
            setModalInfo([true,"Add"]);
    }

    return(
        <Button onClick={addEmployee}>Add Employee</Button>
    );
}

export default AddEmployeeButton;