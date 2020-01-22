import React from 'react';
import { Form, Col, Button, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

import styles from './RegisterForm.module.css';

const schema = yup.object({
  firstName: yup
    .string()
    .required()
    .min(3)
    .max(12),
  lastName: yup
    .string()
    .required()
    .min(3)
    .max(12),
  username: yup
    .string()
    .required()
    .min(3)
    .max(12),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required()
    .min(6)
    .max(20)
});

const RegisterForm = ({ title, history }) => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={values => {
        console.log(values);
        // history.push('/login');
      }}
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors
      }) => (
        <Form
          noValidate
          onSubmit={handleSubmit}
          className={styles.formContainer}
        >
          <h1 className={styles.title}>{title}</h1>
          <Form.Group as={Col} controlId='validationFirstName'>
            <Form.Label>First name</Form.Label>
            <Form.Control
              type='text'
              name='firstName'
              value={values.firstName}
              onChange={handleChange}
              isValid={touched.firstName && !errors.firstName}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId='validationLastName'>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type='text'
              name='lastName'
              value={values.lastName}
              onChange={handleChange}
              isValid={touched.lastName && !errors.lastName}
            />

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId='validationFormikUsername'>
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <Form.Control
                type='text'
                placeholder='User Name'
                name='username'
                value={values.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.username}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId='validationFormikEmail'>
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control
                type='email'
                placeholder='Email'
                name='email'
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.email}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId='validationFormikPassword'>
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.password}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Button type='submit' block>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
