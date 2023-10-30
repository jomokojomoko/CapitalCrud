// import packages
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import EmployeeModalForm from '../forms/employeeModalForm';
// modal that adds or edits employees
function EmployeeModal({ setModalInfo, modalInfo, updateList }) {
    //set variables
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [salary, setSalary] = useState("");

    //close modal
    function handleClose() {
        setModalInfo([false, ""]);
    };

    //updates employee list and resets modal forms
    function handleSubmit(event) {
        //prevent page from resetting on submit
        event.preventDefault();
        var data = {
            salary: salary,
            first_name: firstName,
            last_name: lastName
        };
        updateList(data);
        setModalInfo([false, ""]);
        setFirstName("");
        setLastName("");
        setSalary("");
    }

    return (
        <Modal show={modalInfo[0]} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{modalInfo[1]} an employee</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <EmployeeModalForm label="First Name" value={firstName} placeholder="Enter your first name" setValue={setFirstName} type="text" />
                    <EmployeeModalForm label="Last Name" value={lastName} placeholder="Enter your last name" setValue={setLastName} type="text" />
                    <EmployeeModalForm label="Salary" value={salary} placeholder="Enter your salary" setValue={setSalary} type="number"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit">
                    {modalInfo[1]} Employee
                </Button>
            </Modal.Footer>
        </Form>
        </Modal >
    );
}

export default EmployeeModal;