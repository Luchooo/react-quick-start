export const Title = () => {
  return <h1>Title awesome</h1>;
};

export const Button = () => {
  return (
    <div className="bg-orange-200 max-w-lg w-full flex flex-col items-center p-8 rounded-3xl">
      <h1 className="font-semibold underline decoration-red-400">
        Nested components
      </h1>
      <button className="rounded-full bg-slate-600 px-5 text-white my-4 max-w-xs hover:bg-slate-400">
        Click Me
      </button>
      <Title />
    </div>
  );
};
