import React from 'react';
import { Box } from '@fower/react';

const ForgotPasswordLink = () => {
  return (
    <Box as='a' href='#' noUnderline white mt4 _hover={['cursorPointer']}>
      Forgot Password
    </Box>
  );
};

export default ForgotPasswordLink;
