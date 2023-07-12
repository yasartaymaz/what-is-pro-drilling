import React, { useContext } from "react";
import { countContext } from "../Context";

function DecreaseButton() {
  const { count, setCount } = useContext(countContext);
  return (
    <button
      onClick={() => {
        if (count > 0) {
          setCount((count) => count - 1);
        }
      }}
    >
      Decrease Count
    </button>
  );
}

export default DecreaseButton;
