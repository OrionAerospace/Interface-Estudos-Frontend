import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Input } from './styles';

const TextArea = ({ label, value, onChange }) => (
  <Container>
    <Label>{label}</Label>
    <Input value={value} onChange={onChange} />
  </Container>
);

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;