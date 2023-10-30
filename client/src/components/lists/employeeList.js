// imports
import EmployeeService from '../../services/employeeService';
import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'
import EmployeeRow from '../table/employeeRow';
import { GetAllData } from '../../data/employeeData';

// creates a react-bootstrap list component displaying Employee Data
function EmployeeList({ deleteEmployeeData, setModalInfo, setUId, employeeData }) {
    //variables
    const [listItems, setListItems] = useState([]);
    //Pull Employee Data and push it into listItems as an array of ListGroup.Item
    useEffect(() => {
        console.log(employeeData);
        setListItems(employeeData.map((employee) =>
            <ListGroup.Item id={employee.id}>
                <EmployeeRow deleteEmployeeData={deleteEmployeeData} employeeData={employee} setModalInfo={setModalInfo} setUId={setUId} />
            </ListGroup.Item>
        ));

    }, [employeeData]);



    return (
        <ListGroup>
            {listItems}
        </ListGroup>
    );
}

export default EmployeeList;