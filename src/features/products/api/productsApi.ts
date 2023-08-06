import axios from "axios";

// A mock function to mimic making an async request for data
export function fetchProducts() {
  return axios.get("api/products").then((response) => {
    return response;
  });
}
