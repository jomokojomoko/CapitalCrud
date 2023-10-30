import Form from 'react-bootstrap/Form';

// form entry component for EmployeeModal
function EmployeeModalForm({ label, placeholder, setValue, value, type }) {
    // set the value when input is recieved into form
    function onValueChange(event) {
        setValue(event.target.value)
    }
    if(type==="number"){
        const step=1;
    }
    return (
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                placeholder={placeholder}
                autoFocus
                type={type}
                step
                value={value}
                onChange={onValueChange}
                required
            />
        </Form.Group>
    );
}

export default EmployeeModalForm;