import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { database } from "../../firebaseConfig";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    userID: Yup.string().required("User ID is required"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    setError(""); // Reset error state before attempting login
    try {
      const payScaleDoc = await getDoc(
        doc(database, "payscales", values.userID)
      );
      if (payScaleDoc.exists()) {
        const payScale = payScaleDoc.data();
        sessionStorage.setItem("payscales", JSON.stringify(payScale));
        navigate("/"); // Redirect to home route
      } else {
        setError("Invalid ID. User not found.");
      }
    } catch (err) {
      console.error("Error fetching pay scale:", err);
      setError("Error logging in. Please try again.");
    } finally {
      setSubmitting(false); // Reset Formik's submitting state
    }
  };

  return (
    <div className="w-full max-w-[1240px] m-auto h-screen flex justify-center items-center bg-customBlack-dark my-10">
      <div className="w-[400px] h-[400px] flex flex-col items-center justify-center">
        <Formik
          initialValues={{ userID: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="w-full flex flex-col gap-3">
              <h1 className="text-2xl">Login</h1>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div>
                <Field
                  type="text"
                  name="userID"
                  placeholder="Enter User ID"
                  className={`w-full p-3 bg-[#0B0B0C] rounded-md max-h-20px text-sm border shadow-sm focus:outline-none focus:ring-2 focus:ring-customPurple-purple focus:border-customPurple-purple hover:border-customPurple-purple duration-300 ${
                    error ? "border-red-500" : "border-gray-700"
                  }`}
                />
                <ErrorMessage
                  name="userID"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 p-3 bg-customPurple-purple hover:bg-customPurple-dark text-white rounded-md duration-300"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
