import Header from "./components/header";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Header
        title="Shopping application"
        subtitle="one stop solution for all your groceries"
      ></Header>
      <h1>This is a react application</h1>
      <Footer email="abc@gmail.com" address="bangalore"></Footer>
    </div>
  );
}

export default App;
