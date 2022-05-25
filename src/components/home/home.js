import "./home.css";
import HomeStyles from "./home.module.css";
import Sidebar from "../sidebar/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const isLogged = useSelector((state) => state.isLogged);
  let navigate = useNavigate();
  let alertMe = () => {
    alert("hello!!! good morning");
  };
  let printName = () => {
    console.log("printing inside parent");
  };

  let goToDetails = (empId) => {
    navigate(`/emp-details/${empId}`);
  };
  if (!isLogged) {
    return <div>Please login to view this page</div>;
  }

  return (
    <div className="home-container">
      <Sidebar title="hiiiiiii" getName={printName}></Sidebar>
      <p className="intro-msg"> This is the employee details</p>
      <p style={{ backgroundColor: "red", fontSize: "20px", color: "white" }}>
        This is demo of inline css
      </p>
      <div className={HomeStyles.moduleDemo}>
        This is a small desciption to show module css
      </div>
      <div className={HomeStyles.success}>This is a success message</div>
      <div className="error">This is a failure message</div>
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
                <td>
                  {" "}
                  <Link to={`/emp-details/${employee.empId}`}>
                    {employee.empId}
                  </Link>
                </td>

                <td onClick={() => goToDetails(employee.empId)}>
                  {employee.name}
                </td>
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
