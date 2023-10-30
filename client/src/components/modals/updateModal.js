import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { UpdateEmployee } from '../../data/employeeData';
function UpdateModal({ mShow, setShow, setRefresh, uId}) {
    //set variables
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [salary, setSalary] = useState("");

    function handleClose() {
        setShow(false);
    };

    function handleSubmit(event) {

        event.preventDefault();
        var data = {
            salary: salary,
            first_name: firstName,
            last_name: lastName
        };
        UpdateEmployee(setRefresh,uId,data);
        
        setRefresh(true);
        setShow(false);
        setFirstName("");
        setLastName("");
        setSalary("");
    }

    function onSalaryChange(event) {
        setSalary(event.target.value)
    }

    function onLastChange(event) {
        setLastName(event.target.value)
    }

    function onFirstChange(event) {
        setFirstName(event.target.value)
    }

    return (
        <Modal show={mShow} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update employee with id {uId}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            placeholder="Enter the first name"
                            autoFocus
                            value={firstName}
                            onChange={onFirstChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            placeholder="Enter the last name"
                            autoFocus
                            value={lastName}
                            onChange={onLastChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control
                            placeholder="Enter the salary"
                            autoFocus
                            value={salary}
                            onChange={onSalaryChange}
                            required
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Update Employee
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default UpdateModal;