import React from 'react';
import { Box } from '@fower/react';

const SignUpLink = () => {
  return (
    <Box toCenter mt-16>
      Don't have an account?&nbsp;
      <Box as='a' href='#' noUnderline blue500 cursorPointer--hover>
        Sign up
      </Box>
    </Box>
  );
};

export default SignUpLink;
