import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const ProtectRoutes = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const auth = { token: isAuthenticated }
  return (
    auth.token ? <Outlet /> : <Navigate to={loginWithRedirect()} />
  )
}

export default ProtectRoutes