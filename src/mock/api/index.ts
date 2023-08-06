import { Model, Server } from "miragejs";
import { mockProducts } from "../data/products";

export default function mockServer({ environment = "development" }) {
  console.log("here");

  return new Server({
    environment,
    seeds(server) {
      server.db.loadData({
        products: mockProducts,
      });
    },
    routes() {
      this.passthrough((request) => {
        let isExternal = request.url.startsWith("http");
        return isExternal;
      });
      this.passthrough();
      this.get("/api/products", (schema) => {
        return schema.db.products;
      });
    },
  });
}
