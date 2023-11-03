import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Input } from './styles';

const TextInput = ({ label, type, value, onChange }) => (
  <Container>
    <Label>{label}</Label>
    <Input type={type} value={value} onChange={onChange} />
  </Container>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;