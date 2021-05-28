import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@fower/react';

const Input = ({ type, label }) => {
  return (
    <Box column>
      <Box mb-5 ml-2>
        {label}
      </Box>
      <Box
        as='input'
        type={type}
        px2
        py3
        rounded-4
        border-2
        borderGray100
        outlineNone
        _focus={['border-2', 'borderBlue500']}
      />
    </Box>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string
};

export default Input;
