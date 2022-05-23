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

  //   post
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "hello",
      body: "this is a description",
      userd: 1,
    }),
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

  //   put

  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "monika",
      body: "details of monika",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

  // delete
  fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "DELETE" })
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div>
      <h1>demo of fetch</h1>
    </div>
  );
}

export default FetchComponent;
