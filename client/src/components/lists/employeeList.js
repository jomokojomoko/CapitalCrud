// imports
import EmployeeService from '../../services/employeeService';
import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'


// creates a react-bootstrap list component displaying Employee Data
function EmployeeList() {
    //variables
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        EmployeeService.getAll()
            .then((response) => {
                console.log(response.data);
                setListItems(response.data.map((employee) =>
                    <ListGroup.Item id={employee.id}>
                        <Row>
                            <Col>{employee["first_name"]}</Col><Col>{employee["last_name"]}</Col><Col>{employee["salary"]}</Col>
                        </Row>
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