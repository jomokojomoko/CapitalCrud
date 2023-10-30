// import packages
import { Button } from "react-bootstrap";
// css import
import "./button.css"
// button that displays update modal
function UpdateEmployeeButton({ setModalInfo, uId, setUId }) {
    // configure update modal and set id
    function showUpdateModal() {
        setModalInfo([true, "Update"]);
        setUId(uId);
    }
    
    return (
        <Button className="Edit-Button" onClick={showUpdateModal}>Edit</Button>
    );
}

export default UpdateEmployeeButton;