import { useParams } from "react-router-dom";

let employees = [
  {
    empId: 12,
    name: "monika",
    email: "monika@gmail.com",
    phNo: 12345,
  },
  {
    empId: 13,
    name: "vinayak",
    email: "vinayak@gmail.com",
    phNo: 79873,
  },
  {
    empId: 14,
    name: "manasa",
    email: "manasa@gmail.com",
    phNo: 1278787345,
  },
];

function EmployeeDetails() {
  const { id } = useParams();

  let employee = employees.filter((emp) => {
    console.log(emp.empId, id);
    return emp.empId.toString() === id;
  });
  employee = employee[0];
  console.log(employee);
  return (
    <div>
      <h1>Employee details</h1>
      <p>emp id : {employee.empId}</p>
      <p>Name : {employee.name}</p>
      <p>email : {employee.email}</p>
      <p>Ph nO : {employee.phNo}</p>
    </div>
  );
}

export default EmployeeDetails;
