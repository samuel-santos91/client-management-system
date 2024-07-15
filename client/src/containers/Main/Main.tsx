import React from "react"
import { Link } from "react-router-dom"

import ClientList from "../../components/ClientList/ClientList"

const Main: React.FC = () => {
  return (
    <div>
      <ClientList/>
      <Link to='/new-client'>Add New Client</Link>
    </div>
  )
}

export default Main