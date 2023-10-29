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