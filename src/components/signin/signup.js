import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function Signup() {
  let signupSchema = Yup.object().shape({
    firstName: Yup.string().required("First name cant be empty"),
    age: Yup.number().required("age cant be empty"),
    email: Yup.string().email("invalid email").required("email is mandatory"),
    password: Yup.string()
      .required("password cant be empty")
      .min(8, "password week")
      .max(15, "password too long"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "password should match"
    ),
  });
  let handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          age: 0,
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(e) => handleSubmit(e)}
        validationSchema={signupSchema}
      >
        {(props) => (
          <Form>
            <div>
              <label>First Name</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div>
              <label>Age</label>
              <Field type="number" name="age" />
              <ErrorMessage name="age">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div>
              <label>Email</label>
              <Field type="text" name="email" />
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
            <div>
              <label>Confirm Password</label>
              <Field type="password" name="confirmPassword" />
              <ErrorMessage name="confirmPassword">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <button type="submit">Signup</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
