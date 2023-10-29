const sql = require("./index.js");

// constructor
const Employee = function (employee) {
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.salary = employee.salary;
};

// retrieve all employees from Employee database
Employee.getAll = result => {
    let query = "SELECT * FROM employees";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Employees: ", res);
        result(null, res);
    });
};

module.exports = Employee;