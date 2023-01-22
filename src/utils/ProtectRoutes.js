// import { Outlet, Navigate} from "react-router-dom";
// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const ProtectRoutes = () => {
//   const { isAuthenticated } = useAuth0();
//     return (
//       (isAuthenticated) ? <Outlet /> : <Navigate to='/login' />
//     )
// }

// export default ProtectRoutes

import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth0();
  let auth = { token: isAuthenticated }
  console.log(auth)

  return (
    auth.token ? <Outlet /> : <Navigate to='/login' />
  )
}

export default ProtectedRoutes