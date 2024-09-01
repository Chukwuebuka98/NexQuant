import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AdminLogin = () => {
  const [authError, setAuthError] = useState(null); // Track authentication errors
  const navigate = useNavigate();
  const auth = getAuth();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/^[A-Za-z\d]+$/, "Password can only contain letters and numbers")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setAuthError(null); // Reset error state before attempting login
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        navigate("/admin");
      })
      .catch((error) => {
        setAuthError("Username or password is incorrect"); // Set error message
        setSubmitting(false);
      });
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto flex items-center justify-center h-full my-10 bg-customBlack-dark">
      <div className="w-[400px] h-[400px] flex flex-col items-center justify-center p-5 md:p-0">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="w-full flex flex-col gap-3">
              <h3 className="text-2xl">Admin Login</h3>
              {authError && (
                <div className="text-red-500 text-sm mb-4">{authError}</div>
              )}{" "}
              {/* Display error */}
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`p-3 bg-[#0B0B0C] rounded-md text-sm border shadow-sm focus:outline-none focus:ring-2 focus:ring-customPurple-purple focus:border-customPurple-purple hover:border-customPurple-purple duration-300 w-full ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-gray-700"
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`w-full p-3 bg-[#0B0B0C] rounded-md text-sm border shadow-sm focus:outline-none focus:ring-2 focus:ring-customPurple-purple focus:border-customPurple-purple hover:border-customPurple-purple duration-300 ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-700"
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="p-3 bg-customPurple-purple hover:bg-customPurple-dark text-white rounded-md duration-300"
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

export default AdminLogin;
