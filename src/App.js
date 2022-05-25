import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import EmployeeDetails from "./components/emp-details/emp-details";
import MaterialUI from "./components/material-ui/material-ui";
import ParentHook from "./components/hooks/parent";
import ParentLifecycle from "./components/lifecycle-methods/parent-lifecycle";
import FetchComponent from "./components/http/fetch";
import AxiosRequest from "./components/http/axios";
import SignIn from "./components/signin/signin";
import Signup from "./components/signin/signup";
import ParentErrorBoundary from "./components/errorBoundary/parentErrorBoundary";
import ErrorParent from "./components/errorBoundary/ErrorParent";
import ParentRegularPure from "./components/pureComponent/parentRegPure";
import ParenHoc from "./components/hoc/parentHoc";
import CounterRedux from "./components/redux-demo/counter";
import { useSelector } from "react-redux";
import AdminHome from "./components/adminHome/adminhome";
import ListUsers from "./components/adminHome/ListUsers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header
          title="Shopping application"
          subtitle="one stop solution for all your groceries"
        ></Header>
        <div style={{ marginTop: "12vh", marginBottom: "6vh " }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/emp-details/:id" element={<EmployeeDetails />} />
            <Route path="/ui" element={<MaterialUI />} />
            <Route path="/hooks" element={<ParentHook />} />
            <Route path="http" element={<FetchComponent />} />
            <Route path="/axios" element={<AxiosRequest />} />
            <Route path="/lifecycle" element={<ParentLifecycle />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/error" element={<ParentErrorBoundary />} />
            <Route path="/errorBoundary" element={<ErrorParent />} />
            <Route path="/pureDemo" element={<ParentRegularPure />} />
            <Route path="/hoc" element={<ParenHoc />} />
            <Route path="/redux" element={<CounterRedux />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/list-users" element={<ListUsers />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer email="abc@gmail.com" address="bangalore"></Footer>
    </div>
  );
}

export default App;
