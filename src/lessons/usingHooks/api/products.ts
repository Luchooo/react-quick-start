import { ProductT } from "../FetchData";
import { requestHandler } from "../requestHandler";

type GetProductsParams = {
  limit?: number;
};

export const getProducts = requestHandler<GetProductsParams, ProductT[]>(
  (params) => {
    const path = "https://fakestoreapi.com/products";
    let url = new URL(path);
    if (params?.limit) {
      url = new URL(`${path}?limit=${params.limit}`);
    }

    return fetch(url.href);
  }
);
