import { Outlet, Navigate} from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectRoutes = () => {
  const { isAuthenticated } = useAuth0();
    return (
      (isAuthenticated) ? <Outlet /> : <Navigate to='/login' />
    )
}

export default ProtectRoutes

