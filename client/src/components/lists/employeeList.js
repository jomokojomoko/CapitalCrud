// import packages
import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
// import components
import EmployeeRow from '../table/employeeRow';
// creates a react-bootstrap ListGroup component displaying Employee Data
function EmployeeList({ deleteEmployeeData, setModalInfo, setUId, employeeData }) {
    //variables
    const [listItems, setListItems] = useState([]);
    
    //map employee data into EmployeeRow objects and list items 
    //refreshses when employeeData is updated
    useEffect(() => {
        if (employeeData.length != 0) {
            setListItems(employeeData.map((employee) =>
                <ListGroup.Item id={employee.id}>
                    <EmployeeRow deleteEmployeeData={deleteEmployeeData} employeeData={employee} setModalInfo={setModalInfo} setUId={setUId} />
                </ListGroup.Item>
            ));
        }
    }, [employeeData]);

    return (
        <ListGroup>
            {listItems}
        </ListGroup>
    );
}

export default EmployeeList;