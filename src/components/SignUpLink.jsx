import React from 'react';
import { Box } from '@fower/react';

const SignUpLink = () => {
  return (
    <Box toCenter mt4>
      Don't have an account?&nbsp;
      <Box as='a' href='#' noUnderline blue500 _hover={['cursorPointer']}>
        Sign up
      </Box>
    </Box>
  );
};

export default SignUpLink;
