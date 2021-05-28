import React from 'react';
import { Box } from '@fower/react';
import Input from './components/Input';
import Illustration from './assets/Illustrations.png';

function App() {
  return (
    <div className='App'>
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
            <Box toCenter mt4>
              Don't have an account?&nbsp;
              <Box blue500 _hover={['cursorPointer']}>
                Sign up
              </Box>
            </Box>
          </Box>
          <Box white mt4 _hover={['cursorPointer']}>
            Forgot Password
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
