// imports
import EmployeeService from '../../services/employeeService';
import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'
import EmployeeRow from '../table/employeeRow';

// creates a react-bootstrap list component displaying Employee Data
function EmployeeList() {
    //variables
    const [listItems, setListItems] = useState([]);

    //Pull Employee Data and push it into listItems as an array of ListGroup.Item
    useEffect(() => {
        EmployeeService.getAll()
            .then((response) => {
                console.log(response.data);

                setListItems(response.data.map((employee) =>
                    <ListGroup.Item id={employee.id}>
                        <EmployeeRow employeeData={employee} />
                    </ListGroup.Item>
                ));
            })
            .catch(e => {
                console.log(e);
            });

    }, []);



    return (
        <ListGroup>
            <Container>

                {listItems}
            </Container>
        </ListGroup>
    );
}

export default EmployeeList;