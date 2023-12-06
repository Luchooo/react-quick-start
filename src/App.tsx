import { Button } from "./lessons/nested/Button";
import { Avatar } from "./lessons/styles/Avatar";
import { About } from "./lessons/wrap/About";
import { OnLoggedIn } from "./lessons/conditionalRendering/OnLoggedIn";
import { Products } from "./lessons/renderingLists/Products";
export const App = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="bg-pink-200 w-full h-10 flex items-center justify-center">
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
    </div>
  );
};
