import { useEffect } from "react";

function FetchComponent() {
  // get request
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>demo of fetch</h1>
    </div>
  );
}

export default FetchComponent;
