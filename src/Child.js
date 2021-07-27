import React from "react";
import { getRandomColor } from "./randomColorGenerator";
function Child(props) {
  //my way
  // const handleChangeColor = () => {
  //   setColor((prev) => (prev = random));
  // };
  // const [childColor, setChildColor] = useState();
  return (
    <div
      onClick={() => props.onChangeColor(getRandomColor())}
      className="child"
      style={{ backgroundColor: props.color }}
    />
  );
}

export default Child;
