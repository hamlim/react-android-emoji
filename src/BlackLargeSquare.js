import React from "react";

function BlackLargeSquare(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={-4.3878}
        y2={133.04}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#616161" offset={0} />
        <stop stopColor="#4E4E4E" offset={0.3517} />
        <stop stopColor="#212121" offset={1} />
      </linearGradient>
      <path
        d="m116 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z"
          fill="#eee"
        />
      </g>
    </svg>
  );
}

export default BlackLargeSquare;
