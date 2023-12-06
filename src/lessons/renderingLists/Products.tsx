type ProductsT = {
  title: string;
  image: string;
  id: string;
};

const products: ProductsT[] = [
  {
    id: "1",
    title: "carrot",
    image: "/img/carrot.webp",
  },
  {
    id: "2",
    title: "peach",
    image: "/img/peach.webp",
  },
  {
    id: "3",
    title: "broccoli",
    image: "/img/broccoli.webp",
  },
];

export const Products = () => {
  const listProducts = products.map((product) => (
    <li
      key={product.id}
      className="flex flex-row gap-6 justify-center items-center w-full max-w-screen-lg border-b border-gray-400 cursor-pointer group"
    >
      <p className="flex flex-row justify-start w-2/4 capitalize ">
        {product.title}
      </p>
      <div className="flex flex-row justify-center transition duration-700 translate-x-10 -z-10 group-hover:translate-x-0 group-hover:z-0 px-2">
        <img className="h-8 w-8" src={product.image} alt={product.title} />
      </div>
    </li>
  ));

  return (
    <div className="my-8 bg-violet-200 max-w-lg w-screen flex flex-col items-center p-8 rounded-3xl">
      <h1 className="capitalize font-semibold underline decoration-emerald-400">
        Rendering list
      </h1>
      <div className="my-4 p-6 border border-gray-800 rounded-xl w-full max-w-[15rem]">
        <h2 className="capitalize text-center border-b border-gray-400">
          List products
        </h2>
        <ul className="list-disc">{listProducts}</ul>
        <p className="mt-6 text-center text-xs font-semibold text-blue-950 ">
          Hover or click the list ⬆️
        </p>
      </div>
    </div>
  );
};
