//import statements
import http from "../httpCommon";

// employee service class to connect to backend server
class EmployeeService{
    // retrieve all employees
     getAll() {
        return  http.get("/employees");
      }
}

export default new EmployeeService();