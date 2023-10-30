// import statements
import { useEffect, useState } from 'react';
import EmployeeService from '../services/employeeService';
// this files purpose is to call employeeService.js and process the http calls provided

// retrieve all the data and return data
export function GetAllData(refresh, setRefresh) {
    const [employeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        if (refresh === true) {
            setRefresh(false);
        }
        EmployeeService.getAll()
            .then((response) => {
                console.log(response.data);
                setEmployeeData(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }, [refresh]);

    return employeeData;
}

// update an employee by id
export function UpdateEmployee(setRefresh, id, employeeData) {
    setRefresh(false);
    EmployeeService.updateEmployee(id, employeeData)
        .then((response) => {
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
}

// create an new employee
export function CreateEmployee(setRefresh, employeeData) {
    setRefresh(false);

    EmployeeService.createEmployee(employeeData)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}

