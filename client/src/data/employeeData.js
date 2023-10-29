import EmployeeService from "../services/employeeService";
// class to retrieve data from employeeService

class EmployeeData {
    getAll(setData) {
        EmployeeService.getAll()
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
}

export default new EmployeeData();