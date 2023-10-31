// mport packages
import { Button } from "react-bootstrap";
// import css
import "./button.css"
// button that displays add modal
function AddEmployeeButton({ setModalInfo }) {
    // sets modal config info
    function addEmployee() {
        setModalInfo([true, "Add"]);
    }

    return (
        <Button className="Add-Button" onClick={addEmployee}>Add Employee</Button>
    );
}

export default AddEmployeeButton;