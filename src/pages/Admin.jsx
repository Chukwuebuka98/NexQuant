import React from "react";
import PayScaleForm from "./payscale/PayScaleForm";

const Admin = () => {
  return (
    <div>
      {/* <h1>This route is specifically for admins</h1> */}
      <PayScaleForm />
    </div>
  );
};

export default Admin;
