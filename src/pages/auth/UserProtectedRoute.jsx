import { Navigate } from "react-router-dom";

const UserProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("payscales");

  if (!isAuthenticated) {
    // If no payScale found, redirect to login
    return <Navigate to="/login" />;
  }

  // Otherwise, render the children (protected component)
  return children;
};

export default UserProtectedRoute;
