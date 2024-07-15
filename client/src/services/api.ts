import axios from "axios";

import { handleApiError } from "./errorHandling";
import { FormDataType } from "../context/StepperContextProvider";

interface UserData {
  id: number;
  name: string;
  dateOfBirth: string;
  mainLanguage: string;
  secondaryLanguage: string;
  fundingSource: string;
}

const api = axios.create({
  baseURL: "http://localhost:3000/users",
});

export const getUsers = async (): Promise<UserData[]> => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const addUser = async (data: FormDataType): Promise<boolean> => {
  try {
    await api.post("/new-user", data);
    return true;
  } catch (error) {
    throw handleApiError(error);
  }
};
