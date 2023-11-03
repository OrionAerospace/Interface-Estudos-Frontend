import React from 'react';
import PropTypes from 'prop-types';
import { TextButton } from './styles';

const Button = ({ label, onClick }) => (
  <TextButton onClick={onClick}>
    {label}
  </TextButton>
);

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;