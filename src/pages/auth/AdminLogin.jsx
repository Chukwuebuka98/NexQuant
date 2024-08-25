import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Error logging in", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className=" p-3 bg-[#0B0B0C] rounded-md max-h-20px text-sm border border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-customPurple-purple focus:border-customPurple-purple hover:border-customPurple-purple duration-300 "
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className=" p-3 bg-[#0B0B0C] rounded-md max-h-20px text-sm border border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-customPurple-purple focus:border-customPurple-purple hover:border-customPurple-purple duration-300 "
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLogin;
