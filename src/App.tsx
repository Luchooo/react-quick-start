import { Button } from "./lessons/nested/Button";
import { Avatar } from "./lessons/styles/Avatar";
import { About } from "./lessons/wrap/About";
import { OnLoggedIn } from "./lessons/conditionalRendering/OnLoggedIn";
import { Products } from "./lessons/renderingLists/Products";
import { Alert } from "./lessons/respondingEvents/Alert";
import { Counter } from "./lessons/updatingScreen/Counter";
import { ProductsList } from "./lessons/usingHooks/ProductsList";

export const App = () => {
  return (
    <main className="bg-gray-800">
      <h1 className="bg-pink-200 w-full h-10 flex items-center justify-center mb-10">
        ¡Welcome to my app!
      </h1>
      <div className="flex flex-col items-center mx-4 gap-10">
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
        <ProductsList />

        <div className="mb-10"></div>
      </div>
    </main>
  );
};
