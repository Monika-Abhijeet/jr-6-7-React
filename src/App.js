import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import EmployeeDetails from "./components/emp-details/emp-details";
import MaterialUI from "./components/material-ui/material-ui";

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
          </Routes>
        </div>
      </BrowserRouter>
      <Footer email="abc@gmail.com" address="bangalore"></Footer>
    </div>
  );
}

export default App;
