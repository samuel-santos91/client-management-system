import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ClientAdded: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Client Added Successfully</h1>
      <p>You will be redirected to the main page shortly.</p>
    </div>
  );
};

export default ClientAdded;
