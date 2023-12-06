export const About = () => {
  return (
    <div className="my-8 bg-red-200 max-w-lg w-screen flex flex-col items-center p-8 rounded-3xl">
      <h1 className="my-4 font-semibold underline decoration-blue-400">
        Wrap into a shared parent as <code>{"<div>...</div>"}</code>
      </h1>
      <div className="bg-green-200 border-2 p-4 border-black/40">
        <h1 className="font-medium text-left capitalize">Hello about</h1>
        <p>Hi 👋, i am Luis, i study react from react.dev/learn </p>
      </div>
    </div>
  );
};
