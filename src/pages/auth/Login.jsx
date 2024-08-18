import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { database } from "../../firebaseConfig";

const Login = () => {
  const [userID, setUserID] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const payScaleDoc = await getDoc(doc(database, "payscales", userID));
      if (payScaleDoc.exists()) {
        // Store payScale data
        const payScale = payScaleDoc.data();
        sessionStorage.setItem("payscales", JSON.stringify(payScale));

        // Redirect to home route
        navigate("/");
      } else {
        setError("Invalid ID. Pay scale not found.");
      }
    } catch (err) {
      console.error("Error fetching pay scale:", err);
      setError("Error logging in. Please try again.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
          placeholder="Enter User ID"
          className="text-gray-700"
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
