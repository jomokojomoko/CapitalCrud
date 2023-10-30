// imports
import EmployeeService from '../../services/employeeService';
import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'
import EmployeeRow from '../table/employeeRow';
import { GetAllData } from '../../data/employeeData';

// creates a react-bootstrap list component displaying Employee Data
function EmployeeList() {
    //variables
    const [listItems, setListItems] = useState([]);
    const [deleted, setDeleted] = useState(false);
    //Pull Employee Data and push it into listItems as an array of ListGroup.Item
    const employeeData = GetAllData();

    useEffect(() => {
        if (deleted === true) {
            setDeleted(false);
        } else {
            console.log(employeeData);
            setListItems(employeeData.map((employee) =>
                <ListGroup.Item id={employee.id}>
                    <EmployeeRow setDeleted={setDeleted} employeeData={employee} />
                </ListGroup.Item>
            ));
        }


    }, [deleted, employeeData]);



    return (
        <ListGroup>
            <Container>
                {listItems}
            </Container>
        </ListGroup>
    );
}

export default EmployeeList;