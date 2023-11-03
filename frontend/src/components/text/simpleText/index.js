import React from 'react';
import PropTypes from 'prop-types';
import {Text} from './styles';

const SimpleText = ({ label, color }) => {
    console.log(color)
    return (
        <Text color={color}>{label}</Text>
    )
};

SimpleText.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

export default SimpleText;
