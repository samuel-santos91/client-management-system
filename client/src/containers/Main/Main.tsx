import React from "react"
import { Link } from "react-router-dom"

import UserList from "../../components/UserList/UserList"

const Main: React.FC = () => {
  return (
    <div>
      <UserList/>
      <Link to='/new-client'>Add New User</Link>
    </div>
  )
}

export default Main