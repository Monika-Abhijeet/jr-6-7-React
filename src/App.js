import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
function App() {
  return (
    <div className="App">
      <Header
        title="Shopping application"
        subtitle="one stop solution for all your groceries"
      ></Header>
      <Home></Home>
      <Footer email="abc@gmail.com" address="bangalore"></Footer>
    </div>
  );
}

export default App;
