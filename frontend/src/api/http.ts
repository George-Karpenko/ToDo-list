import axios from "axios";
import { useErrorStore } from "@/store/error";

export default () => {
  const baseURL = "http://localhost/";
  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  instance.interceptors.response.use(null, (error) => {
    useErrorStore().updateError(error);
    return Promise.reject(error);
  });

  return instance;
};
