import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../RegistrationForm/RegistrationForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { apiRegister } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

const RegisterValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short! Your email must be at least 8 characters")
    .max(50, "Too Long!")
    .required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(apiRegister(values));
    console.log(values);
  };

  return (
    <div className={css.formWrap}>
      <h1>Registration</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={RegisterValidationSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span className={css.phoneName}>Name</span>
            <Field
              className={css.field}
              type="text"
              name="name"
              placeholder=""
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </label>
          <label className={css.label}>
            <span className={css.phoneName}>Email</span>
            <Field
              className={css.field}
              type="text"
              name="email"
              placeholder=""
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>
          <label className={css.label}>
            <span className={css.phoneName}>Password</span>
            <Field
              className={css.field}
              type="password"
              name="password"
              placeholder=""
            />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </label>
          <button className={css.submitBtn} type="submit">
            Sign up
          </button>
          {error && (
            <p className={css.error}>Ooops, some error occurred..{error}</p>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
