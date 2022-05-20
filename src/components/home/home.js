import "./home.css";
import Sidebar from "../sidebar/sidebar";

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

      <button className="btn btn-primary" onClick={alertMe}>
        Click
      </button>
    </div>
  );
}

export default Home;
