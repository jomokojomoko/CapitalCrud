// import statements
import { Button } from "react-bootstrap";
 
// css import
import "./button.css"

function UpdateEmployeeButton({ setModalInfo, uId, setUId}) {
    function showUpdateModal(){
        setModalInfo([true,"Update"]);
        setUId(uId);
    }
    return (
        <Button className="Edit-Button" onClick={showUpdateModal}>Edit</Button>
    );
}

export default UpdateEmployeeButton;