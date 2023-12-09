import { Button } from "./lessons/nested/Button";
import { Avatar } from "./lessons/styles/Avatar";
import { About } from "./lessons/wrap/About";
import { OnLoggedIn } from "./lessons/conditionalRendering/OnLoggedIn";
import { Products } from "./lessons/renderingLists/Products";
import { Alert } from "./lessons/respondingEvents/Alert";
import { Counter } from "./lessons/updatingScreen/Counter";
import { FetchData } from "./lessons/usingHooks/FetchData";

export const App = () => {
  return (
    <main className="bg-gray-800">
      <div className="flex flex-col items-center mx-4">
        <h1 className="bg-pink-200 w-screen h-10 flex items-center justify-center">
          ¡Welcome to my app!
        </h1>
        {/* Nested component ⬇️ */}
        <Button />

        {/* Wrap components ⬇️ */}
        <About />

        {/* Adding styles ⬇️ */}
        <Avatar />

        {/* Conditional rendering ⬇️ */}
        <OnLoggedIn />

        {/* Rendering lists ⬇️ */}
        <Products />

        {/* Responding to events */}
        <Alert />

        {/* Updating the screen */}
        <Counter />

        {/* Using hooks - useEffect */}
        <FetchData />
      </div>
    </main>
  );
};
