//import statements
import { Button } from "react-bootstrap";
import EmployeeService from "../../services/employeeService";

function AddEmployeeButton({setShowAddModal}){
    
    function addEmployee() {
       /* var data = {
            salary: salary,
            first_name: first_name,
            last_name: last_name
        };

        EmployeeService.createEmployee(data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });*/
            setShowAddModal(true);
    }

    return(
        <Button onClick={addEmployee}>Add Employee</Button>
    );
}

export default AddEmployeeButton;