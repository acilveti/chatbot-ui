import React from 'react';
import styles from '../styles/authentication.module.css';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import auth from './api/auth.js';
import { useRouter } from 'next/router';

const Welcome = () => {
  const router = useRouter();
  const { handleChange, handleSubmit, errors, setFieldTouched, touched } =
    useFormik({
      initialValues: { username: '', email: '', password: '' },
      onSubmit: async (values) => {
        console.log(values);
        if ((await auth.register(values)) === true) {
          console.log('Success');
          router.push('/home');
        } else {
          console.log('Failure');
        }
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
        <form onSubmit={handleSubmit}>
          <div className={styles.FormContainer}>
            <input
              className={styles.Input}
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              onBlur={() => setFieldTouched('username')}
            />
            {touched.username && errors.username && (
              <div className={styles.Error}>{errors.username}</div>
            )}
            <input
              className={styles.Input}
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={() => setFieldTouched('email')}
            />
            {touched.email && errors.email && (
              <div className={styles.Error}>{errors.email}</div>
            )}
            <input
              className={styles.Input}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={() => setFieldTouched('password')}
            />
            {touched.password && errors.password && (
              <div className={styles.Error}>{errors.password}</div>
            )}
          </div>
          <div className={styles.ButtonsContainer}>
            <button className={styles.LogButton} type="submit">
              Create an account
            </button>
            <button className={styles.LogWithGoogleButton} type="button">
              Sign up with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Welcome;

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is a required field')
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
