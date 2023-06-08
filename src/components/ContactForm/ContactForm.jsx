import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import {
  Form,
  FormField,
  FieldFormik,
  ErrorMessage,
  Button,
  LabelWrapper,
} from './ContactForm.styled';

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberRegex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(nameRegex, {
      message:
        "Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",
    })
    .required(),
  number: yup
    .string()
    .trim()
    .matches(numberRegex, {
      message:
        'Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
    })
    .required(),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ id: nanoid(), ...values });
        resetForm();
      }}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <FormField htmlFor="name">
          <LabelWrapper>Name</LabelWrapper>
          <FieldFormik
            type="text"
            name="name"
            placeholder="Enter a contact name"
          />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField htmlFor="number">
          <LabelWrapper>Number</LabelWrapper>
          <FieldFormik
            type="tel"
            name="number"
            placeholder="Enter a contact number"
          />
          <ErrorMessage name="number" component="span" />
        </FormField>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

ContactForm.propType = {
  onSubmit: PropTypes.func.isRequired,
};
