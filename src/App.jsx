import React from 'react';
import { Box } from '@fower/react';
import Input from './components/Input';
import LoginImage from './components/LoginImage';
import LoginInfo from './components/LoginInfo';
import LoginButton from './components/LoginButton';
import SignUpLink from './components/SignUpLink';
import ForgotPasswordLink from './components/ForgotPasswordLink';

function App() {
  return (
    <Box row toCenter bgBlue500 w='100%' h='100vh'>
      <Box flex={1} bgWhite hidden block--xl>
        <LoginImage />
      </Box>
      <Box flex={1} column toCenter px-16>
        <LoginInfo />
        <Box column bgWhite p-16 rounded-10 shadowMD maxW-350 w-350--sm>
          <Box column gap-10>
            <Input type='text' label='Email' />
            <Input type='password' label='Password' />
          </Box>
          <LoginButton />
          <SignUpLink />
        </Box>
        <ForgotPasswordLink />
      </Box>
    </Box>
  );
}

export default App;
