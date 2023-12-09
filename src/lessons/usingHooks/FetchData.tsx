import { useEffect, useState } from "react";
import { getProducts } from "./api/products";

export type ProductT = {
  id: number;
  title: string;
  image: string;
};

type ProductPropsT = {
  product: ProductT;
};

const Product = ({ product }: ProductPropsT) => {
  const { title, image } = product;
  return (
    <div className="bg-white p-4 m-4 flex flex-col items-center rounded-xl border-2 border-black">
      <img
        src={image}
        alt={title}
        className="object-cover h-20 w-20 rounded-full mb-2 border-2 border-gray-600"
      />
      <div className="w-32">
        <p
          title={title}
          className="cursor-pointer capitalize text-sm truncate max-w-full"
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export const FetchData = () => {
  const [products, setProducts] = useState<ProductT[]>([]);
  const [isErrorProducts, setIsErrorProducts] = useState(false);

  useEffect(() => {
    return () => {
      const fetchData = async () => {
        const productsResponse = await getProducts({ limit: 5 });
        if (productsResponse.code === "error") {
          setIsErrorProducts(true);
        } else {
          setProducts(productsResponse.data);
        }
      };
      fetchData();
    };
  }, []);

  return (
    <div className="my-8 bg-orange-200 max-w-lg w-screen flex flex-col items-center p-8 rounded-3xl">
      <h1 className="mb-4 capitalize font-semibold underline decoration-zinc-400">
        Using Hooks - useEffect
      </h1>
      <div className="overflow-x-auto gap-4 flex flex-row w-9/12">
        {isErrorProducts ? (
          <div>Error getting products</div>
        ) : (
          products.map((product) => (
            <Product key={product.title} product={product} />
          ))
        )}
      </div>
    </div>
  );
};
