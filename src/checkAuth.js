// checkAuth.js
import { Navigate } from "react-router-dom";

export default function checkAuth() {
  const isLogin = localStorage.getItem("isLogin");

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return null; // If logged in, return null to render the protected component
}
