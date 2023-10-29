// import statements
import { Button } from "react-bootstrap";
import EmployeeService from "../../services/employeeService";
// css import
import "./button.css"

function DeleteEmployeeButton({dId}){
    
    function deleteEmployee() {
        EmployeeService.deleteEmployee(dId)
        .then(response => {
          console.log(response.data)
        }).catch(e => {
          console.log(e);
        });
  
    }

    return(
        <Button className="Delete-Button" onClick={deleteEmployee}>Delete</Button>
    );
}

export default DeleteEmployeeButton;