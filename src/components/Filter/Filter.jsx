import React from 'react';
import PropTypes from 'prop-types';
import { LabelWrapper, Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <Label>
    <LabelWrapper>Find contacts by name</LabelWrapper>
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="search contacts"
    />
  </Label>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
