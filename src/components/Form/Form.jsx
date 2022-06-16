import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PhoneInput from 'react-phone-input-2';
import styled from 'styled-components';
import * as Yup from 'yup';
import 'yup-phone';
const initialValues = {
  name: '',
  number: '',
};
const ErrorText = styled.p`
  color: red;
`;
const validationSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.string().phone().required(),
});
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
export const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    //console.log(values);
    addContact(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form autoComplete="off">
        <label htmlFor="name">Full name</label>
        <Field name="name" type="text" placeholder="Full name" />
        <FormError name="name" />
        <label htmlFor="number">Number</label>
        <Field
          name="number"
          type="tel"
          placeholder="+____________"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
        <FormError name="number" />
        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};
