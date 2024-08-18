import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear("payscales");
    navigate("/login");
  }, [navigate]);

  return null; // Optionally, show a "Logging out..." message or spinner
}

export default Logout;
