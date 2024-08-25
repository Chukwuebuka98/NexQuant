import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AdminProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // User is authenticated
      } else {
        setIsAuthenticated(false);
        navigate("/adminlogin"); // Redirect to login if not authenticated
      }
      setLoading(false);
    });
  }, [auth, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : null;
};

export default AdminProtectedRoute;
