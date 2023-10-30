// import database methods
const Employee = require('../models/employeeModel.js');

// retrieve all employees from database
exports.getAll = (req, res) => {
    
    Employee.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving employees."
            });
        else res.send(data);
    });
};

// get the employee data needed for one page
exports.getPageData = (req, res) => {
    // get page data from database
    Employee.getPageData(req.params.page, req.params.amount, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving employees."
            });
        else res.send(data);
    });
}

// create and save a new employee
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a employee
    const employee = new Employee(req.body);

    // save employee in the database
    Employee.create(employee, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the employees."
            });
        else res.send(data);
    });
};

// delete a employee with the specified id in the request
exports.delete = (req, res) => {
    Employee.remove(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Could not delete employee with id " + req.params.id
            });
        } else res.send({ message: `Employee was deleted successfully!` });
    });
};

// update a Employee identified by the id in the request
exports.updateById = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Employee.updateById(
        req.params.id,
        new Employee(req.body),
        (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error updating employee with id " + req.params.id
                });
            } else res.send(data);
        }
    );
};

