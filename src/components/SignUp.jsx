import React from 'react';
import { useFormik, setFieldValue } from 'formik';
import * as Yup from 'yup';

// import './Signup.css';

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      username: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, 'Must be at least 2 characters')
        .max(15, 'Must be 15 caracthers or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Must be at least 6 characters'),
    }),
    onSubmit: (values) => {
      console.log({
          avatar: values.avatar
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.touched.firstName || formik.errors.firstName ? (
          <p> {formik.errors.firstName} </p>
        ) : null}
      </div>

      <div className="input-container">
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onBlur={formik.handleBlurBlur}
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.touched.lastName || formik.errors.lastName ? (
          <p> {formik.errors.lastName} </p>
        ) : null}
      </div>

      <div className="input-container">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email || formik.errors.email ? (
          <p> {formik.errors.email} </p>
        ) : null}
      </div>

      <div className="input-container">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>

      <div className="input-container">

      <input id="file" name="file" type="file" onChange={(event) => {
  setFieldValue("file", event.currentTarget.files[0]);
}} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
