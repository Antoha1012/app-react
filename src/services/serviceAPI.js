import axios from "axios";
import { toast } from "react-toastify";

const apiEndpoint = "https://jsonplaceholder.typicode.com";

class Api {
  constructor(apiEndpoint) {
    if (Api._instance) {
      return Api._instance;
    }
    Api._instance = this;

    if (apiEndpoint)
      this.api = axios.create({
        baseURL: apiEndpoint,
      });

    this.api.interceptors.request.use((config) => {
      return config;
    });

    this.api.interceptors.response.use(
      (value) => {
        toast.success("Resolved!");

        return value;
      },
      (error) => {
        toast.error(error.response.data);

        return Promise.reject(error);
      }
    );
  }
}

export const API = new Api(apiEndpoint);
