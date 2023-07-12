import React, { useContext } from "react";
import DecreaseButton from "./DecreaseButton";
import IncreaseButton from "./IncreaseButton";
import { countContext } from "../Context";

function DisplayCount() {
  const { count } = useContext(countContext);
  return (
    <div>
      <DecreaseButton />
      {count}
      <IncreaseButton />
    </div>
  );
}

export default DisplayCount;
