import React from "react";

function StopSign(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <rect x={50} y={-56.67} width={0} height={0.67} fill="#F2F2F2" />
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={6}
        y2={122.65}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E53935" offset={0} />
        <stop stopColor="#C62828" offset={1} />
      </linearGradient>
      <polygon
        points="41.1 124 4 87.54 4 38.17 41.1 4 90.48 4 124 38.17 124 87.54 90.48 124"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m88.74 7.88 31.15 31.95 0.18 46.16-31.13 34.05-46.22 0.09-34.71-34.28-0.08-45.9 34.82-31.98 45.99-0.09m1.69-4.01-49.24 0.1-37.27 34.22 0.1 49.34 37.07 36.6 49.62-0.1 33.37-36.5-0.19-49.34-33.46-34.32z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default StopSign;
