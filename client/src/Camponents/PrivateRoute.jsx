
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = () => {
   
    const token2 = localStorage.getItem("admin");
      if (token2) {
        const adminAuth = localStorage.getItem("admin"); 
   
      }

    return token2 ? <Outlet/> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
