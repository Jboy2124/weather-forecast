import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <button onClick={loginWithRedirect} className='rounded shadow-lg px-12 py-2 bg-[#1F3C88] text-white'>Sign in</button>
  );
}

export default LoginButton;