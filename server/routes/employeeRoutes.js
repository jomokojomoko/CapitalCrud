module.exports = app => {
    // initialize imports, for router and controller
    const employee = require("../controllers/employeeController.js");
    var router = require("express").Router();

    // retrieve all employees
    router.get("/", employee.getAll);

    // create a new employee
    router.post("/", employee.create);

    // delete a employee with id header
    router.delete("/:id", employee.delete);

    // update a employee with id
    router.put("/:id", tutorials.updateById);

    // initialize router and route
    app.use('/api/employees', router);
};