import styled from '@emotion/styled';
import { Form as FormikForm, Field, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  width: 480px;
  padding: 18px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #f1a702;
  border-radius: 6px;
  margin-bottom: 15px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #f1a702;
  font-size: 20px;
`;
export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;
export const FieldFormik = styled(Field)`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  background-color: #f36e0621;
  color: #f1a702;
`;
export const ErrorMessage = styled(FormikError)`
  max-width: 500px;
  font-style: italic;
  color: #9e0202;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #f1a702;
  color: #f1a702;
  background-color: #f36e0621;
  font-size: 20px;
  width: 160px;
  margin: 15px auto;
`;
