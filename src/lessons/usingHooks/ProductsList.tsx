import { ProductPropsT } from "./types/productsTypes";
import { useProductsData } from "./hooks/useProductsData";

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

export const ProductsList = () => {
  const { error, loading, products } = useProductsData();

  return (
    <div className="bg-orange-200 max-w-lg w-full flex flex-col items-center p-8 rounded-3xl">
      <h1 className="mb-4 capitalize font-semibold underline decoration-zinc-400">
        Using Hooks - useEffect
      </h1>
      <div className="overflow-x-auto gap-4 flex flex-row w-9/12">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p>Error getting products...</p>}
        {!loading &&
          !error &&
          products.map((product) => (
            <Product key={product.title} product={product} />
          ))}
      </div>
    </div>
  );
};
