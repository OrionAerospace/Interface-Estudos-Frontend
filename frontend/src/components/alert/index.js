import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AlertContainer } from './styles';

function Alert({ message, type, duration, onHide }) {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(false);
      onHide && onHide();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onHide]);

  return shouldRender && (
    <AlertContainer type={type} show={shouldRender}>
      {message}
    </AlertContainer>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']), 
  duration: PropTypes.number,
  onHide: PropTypes.func
};

// Valores padrão
Alert.defaultProps = {
  duration: 3000,
  onHide: () => {}
};

export default Alert;