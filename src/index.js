import React from "react";
import { render } from "react-dom";
import Range from "./Range";
import CounterProvider from "./CounterProvider";
import ImageCounter from "./ImageCounter";

const App = () => (
  <div>
    <CounterProvider visualise={counter => <ImageCounter {...counter} />} />
  </div>
);

render(<App />, document.getElementById("root"));
