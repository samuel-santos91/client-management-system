import React, { useEffect, useState } from "react";

import { getUsers } from "../../services/api";

interface UserData {
    id: number;
    name: string;
    dateOfBirth: string;
    mainLanguage: string;
    secondaryLanguage: string;
    fundingSource: string;
  }

const ClientList: React.FC = () => {
  const [userDataList, setUserDataList] = useState<UserData[]>([]);

  const fetchData = async () => {
    try {
      // Set loading state
      const res = await getUsers();
      setUserDataList(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // Set loading state to false
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {userDataList?.map((userData) => (
        <p key={userData.id}>{userData.name}</p>
      ))}
    </div>
  );
};

export default ClientList;
