import React from 'react';
import { Box } from '@fower/react';
import Input from './components/Input';
import LoginButton from './components/LoginButton';
import SignUpLink from './components/SignUpLink';
import ForgotPasswordLink from './components/ForgotPasswordLink';
import Illustration from './assets/Illustrations.png';

function App() {
  return (
    <Box row toCenter bgBlue500 w='100%' h='100vh'>
      <Box flex={1} bgWhite>
        <Box
          h='100vh'
          backgroundRepeat='no-repeat'
          backgroundPosition='center'
          backgroundImage={`url(${Illustration})`}
          backgroundSize='50% 50%'></Box>
      </Box>
      <Box flex={1} column toCenter>
        <Box white text4XL fontBold>
          Digital Agency
        </Box>
        <Box white mb6>
          Explore the best digital agencies in the world
        </Box>
        <Box column bgWhite p4 rounded-10 shadowMD w='350px'>
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
