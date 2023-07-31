import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:6060/api/v1",
  timeout: 1000,
  headers: { "Access-Control-Allow-Origin": "*" },
});
