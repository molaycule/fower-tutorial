import React from 'react';
import { Box } from '@fower/react';

const LoginButton = () => {
  return (
    <Box
      as='button'
      p3
      mt5
      bgBlue500
      white
      rounded-4
      textBase
      _hover={['cursorPointer', 'bgBlue600']}>
      Login
    </Box>
  );
};

export default LoginButton;
