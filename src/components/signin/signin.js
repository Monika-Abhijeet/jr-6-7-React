import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { signin } from "../react-redux/actions";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let username = "monika@gmail.com";
  let password = "monika123";
  let handleSubmit = (values) => {
    if (values.email === username && values.password === password) {
      alert("login successfull");
      dispatch(signin());
      navigate("/");
    } else {
      alert("login failed.. please enter valid credentials");
    }
  };
  let handleValidate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email cannot be empty";
    }
    if (!values.password) {
      errors.password = "password cannot be empty";
    } else if (values.password.length < 8) {
      errors.password = "password should have min 8 characters";
    }
    return errors;
  };
  return (
    <div>
      <h1>Signin</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(e) => handleSubmit(e)}
        validate={(e) => handleValidate(e)}
      >
        {(props) => (
          <Form>
            <div>
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div>
              <label>Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default SignIn;
