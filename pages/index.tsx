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
    <div className={styles.authenticationBackground}>
      <div className="Titles">
        <div className="Title">
          <h1>Create an Account</h1>
        </div>
        <div className="subTitles">
          <h2>Let's get started</h2>
        </div>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" onChange={handleChange} />
          <input type="text" name="email" onChange={handleChange} />
          <input type="password" name="password" onChange={handleChange} />
        </form>
      </div>
      <div className="buttons">
        <button className="btn">Sign Up</button>
        <button className="btn">Sign In</button>
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
