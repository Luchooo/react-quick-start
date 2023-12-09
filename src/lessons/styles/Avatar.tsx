type UserT = {
  name: string;
  image: string;
};

const user: UserT = {
  image: "/img/avatar.webp",
  name: "Avatar cat",
};

export const Avatar = () => {
  return (
    <div className="bg-blue-200 max-w-lg w-full flex flex-col items-center p-8 rounded-3xl">
      <h1 className="font-semibold underline decoration-red-400">
        Adding styles
      </h1>
      <img
        className="mt-2 rounded-full w-24 h-24 transition-all duration-700 opacity-50 hover:opacity-100 cursor-pointer"
        src={user.image}
        alt={user.name}
      />
      <p className="text-xs font-semibold text-blue-950 ">
        Hover the {user.name} ⬆️
      </p>
    </div>
  );
};
