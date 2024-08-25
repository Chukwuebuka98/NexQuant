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
    <div className="w-full max-w-[1240px] m-auto h-screen flex justify-center items-center">
      <div className="p-10">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            placeholder="Enter User ID"
            className=" p-3 bg-[#0B0B0C] rounded-md max-h-20px text-sm border border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-customPurple-purple focus:border-customPurple-purple hover:border-customPurple-purple duration-300 "
          />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
