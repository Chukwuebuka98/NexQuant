import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-customBlack-black">
      <div className="text-center flex flex-col">
        <h1 className="text-9xl font-bold text-gray-400">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-200">
          Page Not Found
        </h2>
        <p className="mt-2 text-lg text-gray-200">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-3 px-6 py-2 text-white bg-customPurple-purple hover:bg-customPurple-dark rounded-lg transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
