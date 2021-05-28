import React from 'react';
import { Box } from '@fower/react';
import Illustration from '../assets/Illustrations.png';

const LoginImage = () => {
  return (
    <Box
      h='100vh'
      backgroundRepeat='no-repeat'
      backgroundPosition='center'
      backgroundImage={`url(${Illustration})`}
      backgroundSize='50% 50%'
    />
  );
};

export default LoginImage;
