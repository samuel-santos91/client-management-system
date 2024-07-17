import React from "react";
import { Link } from "react-router-dom";

import UserList from "../../components/UserList/UserList";

import classes from './Main.module.scss'

const Main: React.FC = () => {
  return (
    <div className={classes['list-wrapper']}>
      <UserList />
      <Link className={classes['add-link']} to="/new-client">Add New User</Link>
    </div>
  );
};

export default Main;
