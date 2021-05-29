import React from 'react';
import { Box } from '@fower/react';

const LoginButton = () => {
  return (
    <Box
      as='button'
      p-12
      mt-20
      bgBlue500
      white
      rounded-4
      textBase
      cursorPointer--hover
      bgBlue600--hover>
      Login
    </Box>
  );
};

export default LoginButton;
