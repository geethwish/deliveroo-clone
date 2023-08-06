import axios from "axios";
import { toast } from "react-toastify";

const BaseService = axios.create({
  timeout: 60000,
  // can Set the Base url here
});

BaseService.interceptors.request.use(
  (config) => {
    // Handle access token and redirection
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

BaseService.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    const status = response.status || 500;
    // we can handle global errors here
    switch (status) {
      // authentication (token related issues)
      case 401: {
        toast.error("Unauthorized access");
        return Promise.reject(error.message);
      }

      // forbidden (permission related issues)
      case 403: {
        toast.error("Forbidden");
        return Promise.reject(error.message);
      }

      // bad request
      case 400: {
        toast.error("Bad request");
        return Promise.reject(error.message);
      }

      // not found
      case 404: {
        toast.error("URL not found");
        return Promise.reject(error.message);
      }

      // conflict
      case 409: {
        toast.error("Issues occurred");
        return Promise.reject(error.message);
      }

      // unprocessable
      case 422: {
        toast.error("Uncrossable entity");
        return Promise.reject(error.message);
      }

      // generic api error (server related) unexpected
      default: {
        toast.error("Server error");
        return Promise.reject(error.message);
      }
    }
  }
);

export default BaseService;
