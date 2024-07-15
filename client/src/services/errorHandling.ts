import axios, { AxiosError } from "axios";

export function handleApiError(error: any) {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    console.error("Axios Error:", axiosError.message);
    console.error("Status:", axiosError.response?.status);
    console.error("Data:", axiosError.response?.data);
    throw new Error("An error occurred while making API request.");
  } else {
    console.error("Non-Axios Error:", error);
    throw new Error("An unexpected error occurred.");
  }
}
