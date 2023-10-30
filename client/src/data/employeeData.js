import { useEffect, useState } from 'react';
import EmployeeService from '../services/employeeService';
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

export function UpdateEmployee(setRefresh, id, employeeData) {
    setRefresh(false);
    console.log(id);
    EmployeeService.updateEmployee(id, employeeData)
        .then((response) => {
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
}