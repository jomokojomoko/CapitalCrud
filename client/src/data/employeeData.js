// import statements
import EmployeeService from '../services/employeeService';
// this files purpose is to call employeeService.js and process the http calls provided
// retrieve all the data and return data to the state passed in
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

// retrieve a pages data and return its to the state passed in
export function GetPageData(page, amount, setData) {
    EmployeeService.getPageData(page, amount)
        .then(response => {
            console.log(response.data);
            setData(response.data);
        })
        .catch(e => {
            console.log(e);
        });
}

// retrieve a pages data and return its to the state passed in
export function GetCount(setCount) {
    EmployeeService.getCount(page, amount)
        .then(response => {
            console.log(response.data);
            setCount(response.data);
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
