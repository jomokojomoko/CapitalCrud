const sql = require("./index.js");

// constructor
const Employee = function (employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
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

        console.log("employees: ", res);
        result(null, res);
    });
};

// create a employee from information in newEmployee
Employee.create = (newEmployee, result) => {
    sql.query("INSERT INTO employees SET ?", newEmployee, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created employees: ", { id: res.insertId, ...newEmployee });
        result(null, { id: res.insertId, ...newEmployee });
    });
}

// delete a employee with the given id
Employee.remove = (id, result) => {
    sql.query("DELETE FROM employees WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("deleted employee with id: ", id);
        result(null, res);
    });
};

module.exports = Employee;