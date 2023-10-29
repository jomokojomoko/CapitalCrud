const Employee = require('../models/employeeModel.js');

// retrieve all employees from database
exports.getAll = (req, res) => {

    Employee.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
};

// create and save a new r,[;purr]
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a employee
    const employee = new Employee({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        salary: req.body.salary
    });

    // save employee in the database
    Employee.create(employee, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        else res.send(data);
    });
};