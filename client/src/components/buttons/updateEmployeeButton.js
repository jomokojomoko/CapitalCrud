// import statements
import { Button } from "react-bootstrap";
 
// css import
import "./button.css"

function UpdateEmployeeButton({ setShowUpdateModal, uId, setUId}) {
    function showUpdateModal(){
        setShowUpdateModal(true);
        setUId(uId);
    }
    return (
        <Button className="Edit-Button" onClick={showUpdateModal}>Edit</Button>
    );
}

export default UpdateEmployeeButton;