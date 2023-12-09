import { useEffect, useState } from "react";
import { ProductT } from "../types/productsTypes";
import { getProducts } from "../api/products";

export const useProductsData = () => {
  const [products, setProducts] = useState<ProductT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await getProducts({ limit: 5 });
        if (productsResponse.code === "error") {
          throw new Error("Error fetching products");
        } else {
          setProducts(productsResponse.data);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { loading, products, error };
};
