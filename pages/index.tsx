import React from 'react';
import styles from '../styles/authentication.module.css';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

const Welcome = () => {
  const { handleChange, handleSubmit, errors, setFieldTouched, touched } =
    useFormik({
      initialValues: { username: '', email: '', password: '' },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });

  return (
    <div className={styles.Screen}>
      <div className={styles.AuthenticationContainer}>
        <div className={styles.Titles}>
          <div className="Title">
            <h1 className="text-4xl font-extrabold dark:text-white">
              Create an Account
            </h1>
          </div>
          <div className="text-xl font-bold dark:text-white">
            <h2>Let's get started</h2>
          </div>
        </div>
        <div className={styles.FormContainer}>
          <input
            className={styles.Input}
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            className={styles.Input}
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className={styles.Input}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className={styles.ButtonsContainer}>
          <button className={styles.LogButton}>Create an account</button>
          <button className={styles.LogWithGoogleButton}>
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is a required field')
    .email('Invalid username format')
    .label('Username'),
  email: Yup.string()
    .required('Email is a required field')
    .email('Invalid email format')
    .label('Email'),
  password: Yup.string()
    .required('Password is a required field')
    .min(4)
    .label('Password must be at least 4 characters long'),
});
