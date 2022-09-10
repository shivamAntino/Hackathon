import axios, { AxiosRequestConfig } from "axios";

import { BASE_URL } from "./constants";
import { adminInfoGetterService, adminInfoRemovalService } from "./services";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(function (config: AxiosRequestConfig) {
  if (config && config.headers) {
    config.headers.Authorization = adminInfoGetterService().token;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 403) {
      adminInfoRemovalService();
      //   window.location = "/";
    } else return Promise.reject(error);
  }
);
