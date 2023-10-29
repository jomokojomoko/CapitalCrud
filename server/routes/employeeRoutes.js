module.exports = app => {
    // initialize imports, for router and controller
    const employee = require("../controllers/employeeController.js");
    var router = require("express").Router();

    // retrieve all employees
    router.get("/", employee.getAll);

    // create a new employee
    router.post("/",employee.create);

    //Initialize router and route
    app.use('/api/employees', router);
};