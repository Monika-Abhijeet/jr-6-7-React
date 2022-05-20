import "./home.css";
import Sidebar from "../sidebar/sidebar";

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

function Home() {
  let alertMe = () => {
    alert("hello!!! good morning");
  };
  let printName = () => {
    console.log("printing inside parent");
  };
  return (
    <div className="home-container">
      <Sidebar title="hiiiiiii" getName={printName}></Sidebar>
      <table className="table" style={{ width: "auto" }}>
        <thead>
          <tr>
            <th>empid</th>
            <th>Name</th>
            <th>email</th>
            <th>phone number</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phNo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={alertMe}>
        Click
      </button>
    </div>
  );
}

export default Home;
