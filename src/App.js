import React, { useState } from "react";
import "./App.css";
import { countContext } from "./Context";
import DisplayCount from "./components/DisplayCount";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <countContext.Provider value={{ count, setCount }}>
        <DisplayCount />
      </countContext.Provider>
    </div>
  );
}

export default App;
