import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (WrappedComponent, allowedRoles = []) => {
  return (props) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    
    if (!token) {
      return <Navigate to="/login" />;
    }

    
    if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
      return <Navigate to="/login" />;
    }

    
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;