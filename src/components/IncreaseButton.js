import React, { useContext } from "react";
import { countContext } from "../Context";

function IncreaseButton() {
  const { setCount } = useContext(countContext);
  return (
    <button
      onClick={() => {
        setCount((count) => count + 1);
      }}
    >
      Increase Count
    </button>
  );
}

export default IncreaseButton;
