// import statements
import EmployeeService from '../services/employeeService';
// this files purpose is to call employeeService.js and process the http calls provided
// retrieve all the data and return data
export function GetAllData(setData) {
    EmployeeService.getAll()
        .then((response) => {
            console.log(response.data);
            setData(response.data);
        })
        .catch(e => {
            console.log(e);
        });
}

// update an employee by id
export function UpdateEmployee(id, employeeData) {
    EmployeeService.updateEmployee(id, employeeData)
        .then((response) => {
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
}

// create an new employee
export function CreateEmployee(employeeData) {
    EmployeeService.createEmployee(employeeData)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}

// delete an employee by id
export function DeleteEmployee(id) {
    EmployeeService.deleteEmployee(id)
        .then(response => {
            console.log(response.data)
        }).catch(e => {
            console.log(e);
        });
}
