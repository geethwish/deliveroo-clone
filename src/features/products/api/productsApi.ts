import BaseService from "../../../services/AxiosInterceptor";

// A mock function to mimic making an async request for data
export function fetchProducts() {
  return BaseService.get("api/products").then((response) => {
    return response;
  });
}
