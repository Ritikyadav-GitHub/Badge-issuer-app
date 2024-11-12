// ProtectedRoute.js
import React from "react";
import checkAuth from "../checkAuth"; // Import the checkAuth function

const ProtectedRoute = ({ children }) => {
  // Call checkAuth to handle redirection if needed
  const authCheck = checkAuth();

  if (authCheck) {
    return authCheck; // Redirect to login if not authenticated
  }

  return children; // If authenticated, render the child component (e.g., Dash)
};

export default ProtectedRoute;
