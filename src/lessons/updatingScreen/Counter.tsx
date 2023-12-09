import { useState } from "react";

const Button = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <button
      className="flex gap-4 bg-emerald-400/80 px-10 py-4 shadow-[5px_5px_0px_1px_#000] rounded-xl transition duration-100 active:shadow-none"
      onClick={handleCounter}
    >
      Click {counter}
    </button>
  );
};

export const Counter = () => {
  return (
    <div className="bg-fuchsia-200 max-w-lg w-full flex flex-col items-center p-8 rounded-3xl">
      <h1 className="mb-8 capitalize font-semibold underline decoration-zinc-400">
        Updating the screen
      </h1>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-sm">Counters that update separately</h2>
        <Button />
        <Button />
      </div>
    </div>
  );
};
