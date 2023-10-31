// import statements
import EmployeeService from '../services/employeeService';
// import packages
import { useEffect, useState } from 'react';
// this files purpose is to call employeeService.js and process the http calls provided

// retrieve all the data and return data to the state passed in
// function currently not being used, but is bug free and ready to use
export function GetAllData(refresh, setRefresh) {
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        if (refresh === true) {
            setRefresh(false);
        }
        EmployeeService.getAll()
            .then((response) => {
                console.log(response.data);
                setAllData(response.data);
            })
            .catch(e => {
                console.log(e);
            },);
    }, [refresh]);
    return allData;
}

// retrieve a pages data and return its to the state passed in
export function GetPageData(page, amount, refresh, setRefresh) {
    const [pageData, setPageData] = useState([]);
    useEffect(() => {
        if (refresh === true) {
            setRefresh(false);
        }
        EmployeeService.getPageData(page, amount)
            .then(response => {
                console.log(response.data);
                setPageData(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }, [refresh]);
    return pageData;
}

// retrieve a pages data and return its to the state passed in
export function GetCount(refresh, setRefresh) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (refresh === true) {
            setRefresh(false);
        }
        EmployeeService.getCount(setCount)
            .then(response => {
                console.log(response.data);
                setCount(response.data[0].count);
            })
            .catch(e => {
                console.log(e);
            });
    }, [refresh]);
    return count;
}

// update an employee by id
export function UpdateEmployee(id, employeeData, setRefresh) {
    EmployeeService.updateEmployee(id, employeeData)
        .then((response) => {
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    setRefresh(true);
}

// create an new employee
export function CreateEmployee(employeeData, setRefresh) {
    EmployeeService.createEmployee(employeeData)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    setRefresh(true);
}

// delete an employee by id
export function DeleteEmployee(id, setRefresh) {
    EmployeeService.deleteEmployee(id)
        .then(response => {
            console.log(response.data)
        }).catch(e => {
            console.log(e);
        });
    setRefresh(true);
}
