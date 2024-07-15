import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import classes from './UserAdded.module.scss';

const UserAdded: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={classes.wrapper}>
      <h2>New User Added Successfully</h2>
      <p>You will be redirected to the main page shortly.</p>
    </div>
  );
};

export default UserAdded;
