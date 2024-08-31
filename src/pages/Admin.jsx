import PayScaleForm from "./payscale/PayScaleForm";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Clear session storage
        sessionStorage.clear();

        // Redirect to login or home page
        navigate("/adminlogin");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <div>
      <div className="w-full max-w-[1240px] flex justify-between my-4 mx-auto px-10">
        <Link
          to=":payscale"
          className="hover:text-customPurple-light duration-300 hover:underline"
        >
          View payscales added to the database
        </Link>
        <button
          onClick={handleLogout}
          className="hover:text-red-700 duration-300 hover:underline"
        >
          Log out
        </button>
      </div>
      <PayScaleForm />
    </div>
  );
};

export default Admin;
