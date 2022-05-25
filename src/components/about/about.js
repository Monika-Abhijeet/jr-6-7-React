import { useSelector } from "react-redux";
function About() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  if (!isLogged) {
    return <div>Please login to view this page</div>;
  }
  return (
    <div>
      <h1>About page</h1>
      <h3>Count: {counter}</h3>
      <h3>isLogged:{isLogged.toString()} </h3>
    </div>
  );
}

export default About;
