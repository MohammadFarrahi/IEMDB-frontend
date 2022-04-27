import { useEffect, useState } from "react";

import { Icon } from '@iconify/react';


export default function RateStar(props) {
  const { onClickHandler, onHoverHandler, starActive } = props;

  const [color, setColor] = useState("pink");

  useEffect(() => {
    setColor(starActive ? "yellow" : "grey");
    console.log("FUCK")
    console.log(color)
  }, [starActive])

  return (
    <div
      onClick={onClickHandler}
      className="rate-star"
      onMouseEnter={onHoverHandler}
    >
      <Icon
        icon="codicon:star-full"
        style={{ color: color }}
        className="star-icon "
      />


    </div>
  )
}