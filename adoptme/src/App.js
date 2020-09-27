import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Rosie" animal="Dog" breed="Mixed" />
      <Pet name="Murphy" animal="Dog" breed="Trash-Dog" />
      <Pet name="Scotia" animal="Dog" breed="Mountian Dog" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
