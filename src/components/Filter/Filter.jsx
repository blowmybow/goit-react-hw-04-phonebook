import React from 'react';
import PropTypes from 'prop-types';
import { LabelWrapper, Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => (
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

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
