import axios from "axios";

import { handleApiError } from "./errorHandling";

interface UserData {
  id: number;
  name: string;
  dateOfBirth: string;
  mainLanguage: string;
  secondaryLanguage: string;
  fundingSource: string;
}

const api = axios.create({
  baseURL: "https://employee-creator-server.onrender.com",
});

export const getUsers = async (): Promise<UserData[]> => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const addEmployee = async (data: UserData): Promise<boolean> => {
  try {
    await api.post("/new-user", data);
    return true;
  } catch (error) {
    throw handleApiError(error);
  }
};
