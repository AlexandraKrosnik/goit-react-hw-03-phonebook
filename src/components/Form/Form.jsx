import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  ErrorText,
  StyledForm,
  StyledField,
  FormSection,
  ButtonStyled,
} from './Form.styled';
import * as Yup from 'yup';
import 'yup-phone';
import styled from 'styled-components';

const initialValues = {
  name: '',
  number: '',
};

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

const FormContactStyled = styled(Form)`
  ${StyledForm}
`;
const FieldContactStyled = styled(Field)`
  ${StyledField}
`;
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
      <FormContactStyled autoComplete="off">
        <FormSection>
          <label htmlFor="name">Full name</label>
          <FieldContactStyled name="name" type="text" placeholder="Full name" />
          <FormError name="name" />
        </FormSection>
        <FormSection>
          <label htmlFor="number">Number</label>
          <FieldContactStyled
            name="number"
            type="tel"
            placeholder="+____________"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          />
          <FormError name="number" />
        </FormSection>

        <ButtonStyled type="submit">Add</ButtonStyled>
      </FormContactStyled>
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
