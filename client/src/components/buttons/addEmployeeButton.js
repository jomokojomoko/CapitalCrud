//import packages
import { Button } from "react-bootstrap";
// button that displays add modal
function AddEmployeeButton({ setModalInfo }) {
    // sets modal config info
    function addEmployee() {
        setModalInfo([true, "Add"]);
    }
    
    return (
        <Button onClick={addEmployee}>Add Employee</Button>
    );
}

export default AddEmployeeButton;