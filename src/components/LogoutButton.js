import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <button onClick={() => {
      logout({ returnTo: window.location.origin });
    }} className='rounded shadow-lg px-12 py-2 bg-[#1F3C88] text-white'>Log out</button>
  );
}

export default LogoutButton;