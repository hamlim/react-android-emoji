import React from "react";

function SmallOrangeDiamond(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={39.48}
        y2={88.31}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFB74D" offset={0} />
        <stop stopColor="#FB8D03" offset={0.7426} />
        <stop stopColor="#FB8C00" offset={0.7677} />
        <stop stopColor="#FB8C00" offset={1} />
      </linearGradient>
      <path
        d="m62.06 85.2-19.26-19.26c-1.07-1.07-1.07-2.81 0-3.88l19.26-19.26c1.07-1.07 2.81-1.07 3.88 0l19.26 19.26c1.07 1.07 1.07 2.81 0 3.88l-19.26 19.26c-1.07 1.07-2.81 1.07-3.88 0z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="M64,45.11L82.89,64L64,82.89L45.11,64L64,45.11 M64,42c-0.7,0-1.4,0.27-1.94,0.8L42.8,62.06 c-1.07,1.07-1.07,2.81,0,3.88L62.06,85.2C62.6,85.73,63.3,86,64,86s1.4-0.27,1.94-0.8L85.2,65.94c1.07-1.07,1.07-2.81,0-3.88 L65.94,42.8C65.4,42.27,64.7,42,64,42L64,42z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default SmallOrangeDiamond;
