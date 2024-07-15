import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserAdded: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>New User Added Successfully</h1>
      <p>You will be redirected to the main page shortly.</p>
    </div>
  );
};

export default UserAdded;
