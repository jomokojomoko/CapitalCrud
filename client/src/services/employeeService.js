//import statements
import http from "../httpCommon";
// employee service class to connect to backend server
class EmployeeService {
  // retrieve all employees
  getAll() {
    return http.get("/employees");
  }

  // retrieve employee data for one page
  getPageData(page,amount){
    return http.get("/employees/"+page+"/"+amount);
  }

  // retrieve employee count
  getCount(){
    return http.get("/employees/count");
  }

  // create a new employee
  createEmployee(employeeData) {
    return http.post("/employees", employeeData);
  }

  // delete a employee by id
  deleteEmployee(id) {
    return http.delete("/employees/" + id);
  }

  // update a employee by id and employeeData
  updateEmployee(id, employeeData) {
    return http.put("/employees/" + id, employeeData);
  }
}

export default new EmployeeService();