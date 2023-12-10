import { useCount } from "./hooks/useCount";

type MyButtonProps = {
  count: number;
  onClick: () => void;
};

const MyButton = ({ count, onClick }: MyButtonProps) => {
  return (
    <button
      className="flex gap-4 bg-cyan-400/80 px-10 py-4 shadow-[5px_5px_0px_1px_#000] rounded-xl transition duration-100 active:shadow-none"
      onClick={onClick}
    >
      Click {count}
    </button>
  );
};

export const SharedState = () => {
  const { count, handleClick } = useCount();

  return (
    <div className="bg-stone-200 max-w-lg w-full flex flex-col items-center p-8 rounded-3xl">
      <h1 className="mb-8 capitalize font-semibold underline decoration-red-400">
        Sharing data between components
      </h1>
      <div className="flex flex-col gap-4">
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
    </div>
  );
};
