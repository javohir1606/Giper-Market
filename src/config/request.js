import axios from "axios";
import { loadState } from "./Storage";

const request = axios.create({ baseURL: "http://localhost:3000" });

request.interceptors.request.use((config) => {
  const user = loadState("token");
  config.headers.Authorization = `Bearer ${user}`;

  return config;
});

export { request };
