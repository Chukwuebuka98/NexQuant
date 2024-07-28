import PayScaleForm from "./payscale/PayScaleForm";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Link
        to=":payscale"
        className="w-full max-w-[1240px] flex justify-center my-4 mx-auto hover:text-customPurple-light duration-300 hover:underline"
      >
        View payscales added to the database
      </Link>
      <PayScaleForm />
    </div>
  );
};

export default Admin;
