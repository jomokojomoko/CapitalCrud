const sql = require("./index.js");

// constructor
const Employee = function (employee) {
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.salary = employee.salary;
};

module.exports = Employee;