import React, { useContext, useEffect, useState } from "react";

import { getUsers } from "../../services/api";
import { StepperContext } from "../../context/StepperContextProvider";

interface UserData {
  id: number;
  name: string;
  dateOfBirth: string;
  mainLanguage: string;
  secondaryLanguage: string;
  fundingSource: string;
}

const ClientList: React.FC = () => {
  const context = useContext(StepperContext);
  if (!context) return null;
  const { formData } = context;

  const [userDataList, setUserDataList] = useState<UserData[]>([]);

  const fetchData = async () => {
    try {
      const res = await getUsers();
      setUserDataList(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [formData]);

  return (
    <main>
      <h2>Clients List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Main Language</th>
            <th>Secondary Language</th>
            <th>Funding Source</th>
          </tr>
        </thead>
        <tbody>
          {userDataList?.map((userData) => (
            <tr key={userData.id}>
              <td>{userData.name}</td>
              <td>{userData.dateOfBirth}</td>
              <td>{userData.mainLanguage}</td>
              <td>{userData.secondaryLanguage}</td>
              <td>{userData.fundingSource}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ClientList;
