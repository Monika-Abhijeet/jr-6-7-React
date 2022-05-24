import axios from "axios";
import { useEffect } from "react";

function AxiosRequest() {
  useEffect(() => {
    //   get request
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
    });

    // post request
    let requestBody = {
      title: "hello",
      body: "this is a description",
      userd: 1,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", requestBody)
      .then((response) => console.log(response.data));
  });

  //   put request
  let requestBody = {
   restaurant_id: 1,
   email:"monu@gmail.com"
  };
  axios
    .post("http://localhost:8090/bookings", requestBody)
    .then((response) => console.log(response.data));

  // delete request

  axios.delete("https://jsonplaceholder.typicode.com/posts/1");
  return (
    <div>
      <h1>Axios requests</h1>
    </div>
  );
}

export default AxiosRequest;
