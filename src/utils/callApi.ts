import axios from "axios";
import ValidationError from "@/components/layout/form/validationError";

const callApi = () => {
  const axiosInstance = axios.create({ baseURL: "http://localhost:5000/api/" });

  axiosInstance.interceptors.request.use(
    (config) => {
      config.withCredentials = true;
      return config;
    },
    (err) => Promise.reject(err)
  );

  axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
      const res = err?.response;
      if (res.status === 422) {
        throw new ValidationError(res.data.errors);
      }
      return Promise.reject(err);
    }
  );
  return axiosInstance;
};

export default callApi;
