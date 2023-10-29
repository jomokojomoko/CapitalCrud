//import statements
import http from "../httpCommon";

// employee service class to connect to backend server
class EmployeeService{
    // retrieve all employees
     getAll() {
        return  http.get("/employees");
      }

      // create a new employee
      createEmployee(employeeData){
        return http.post("employees",employeeData);
      }
}

export default new EmployeeService();