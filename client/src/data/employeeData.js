import { useEffect, useState } from 'react';
import EmployeeService from '../services/employeeService';
export function GetAllData() {
    const [employeeData, setEmployeeData] = useState([]);

    useEffect(()=>{
        EmployeeService.getAll()
        .then((response) => {
            console.log(response.data);
            setEmployeeData(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    },[]);
       
    return employeeData;
}