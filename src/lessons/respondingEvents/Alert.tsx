export const Alert = () => {
  const handleClick = () => {
    alert("Hi, you are clicking the button");
  };

  return (
    <div className="bg-emerald-200 max-w-lg w-full flex flex-col items-center p-8 rounded-3xl">
      <h1 className="capitalize font-semibold underline decoration-amber-400">
        Responding to events
      </h1>
      <button
        className="capitalize border-2 border-black my-4 w-40 h-40 rounded-lg bg-white shadow-[5px_5px_0px_4px_#000] group transition duration-700 hover:shadow-none"
        onClick={handleClick}
      >
        <h2 className="transition duration-700 group-hover:scale-110">
          Show alert
        </h2>
      </button>
    </div>
  );
};
