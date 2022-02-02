import React, { useState } from "react";
import "./app.css";
import Settings from "./components/Settings";
import Value from "./components/Value";

function App() {
  const submitvalue = () => {
    const valueInput = Number(document.querySelector(".valueInput").value);
    setValue((value) => {
      return (value = valueInput);
    });
  };
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Value submitvalue={submitvalue}></Value>
      <Settings amount={value}></Settings>
    </div>
  );
}

export default App;
