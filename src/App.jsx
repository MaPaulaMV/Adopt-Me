import { createRoot } from "react-dom";

import Pet from "./Pet";

const App = () => {
  // return React.createElement(
  //   "div", //element
  //   {}, //attributes
  //   [
  //     React.createElement("h1", {}, "Adop Me!"),
  //     React.createElement(Pet, {
  //       animal: "Dog",
  //       name: "Juanjo",
  //       breed: "Yorki",
  //     }),
  //     React.createElement(Pet, {
  //       animal: "Cat",
  //       name: "Samuel",
  //       breed: "Mixed",
  //     }),
  //     React.createElement(Pet, {
  //       animal: "Dog",
  //       name: "Emma",
  //       breed: "Shitzu",
  //     }),
  //   ] //children
  // );

  return (
    <div>
      <h1>Adop Me!</h1>
      <Pet animal="Dog" name="Juanjo" breed="Yorki" />
      <Pet animal="Cat" name="Samuel" breed="Mixed" />
      <Pet animal="Dog" name="Emma" breed="Shitzu" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
