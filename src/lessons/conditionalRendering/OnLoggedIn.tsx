import { useState } from "react";

const AdminPanel = () => {
  return (
    <div className="bg-pink-200 w-full max-w-xs">
      <header className="flex flex-row gap-2 mx-2">
        <div className="flex-2">Home</div>
        <div className="flex-1">Reports</div>
        <div>Luis</div>
      </header>
      <article>
        <div className="bg-red-400 w-full h-40 flex items-center justify-center">
          <h1 className="font-medium ">Admin panel 📈</h1>
        </div>
      </article>
    </div>
  );
};

const Login = () => {
  return (
    <div className="bg-pink-200 w-full max-w-xs h-full flex flex-col items-center py-4">
      <h1 className="underline mb-2">Login</h1>
      <div className="flex flex-col my-2 gap-1">
        <label htmlFor="username" className="text-xs font-medium">
          Username
        </label>
        <input
          disabled
          className="border border-gray-500/40 rounded-md text-xs"
          type="text"
          id="username"
          value={"luis@mail.com"}
        />
        <label htmlFor="password" className="text-xs font-medium">
          Password
        </label>
        <input
          disabled
          className="border border-gray-500/40 rounded-md"
          type="password"
          id="password"
          value={"12345678"}
        />
      </div>
    </div>
  );
};

export const OnLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-lime-200 max-w-lg w-full flex flex-col items-center p-8 rounded-3xl">
      <h1 className="capitalize font-semibold underline decoration-pink-400">
        Conditional rendering
      </h1>
      <div className="my-4 flex items-center p-4 border border-gray-500/40 rounded-xl">
        <label htmlFor="login-checkbox">Is logging user?</label>
        <input
          id="login-checkbox"
          type="checkbox"
          checked={isLoggedIn}
          onChange={() => setIsLoggedIn(!isLoggedIn)}
          className="ml-4"
        />
      </div>
      {isLoggedIn ? <AdminPanel /> : <Login />}
    </div>
  );
};
