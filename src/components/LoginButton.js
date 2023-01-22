import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
   <button onClick={() => loginWithRedirect() } className='rounded-full bg-blue-600 px-12 py-2'>Login</button>
  )
}

export default LoginButton