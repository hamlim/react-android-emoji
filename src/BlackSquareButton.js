import React from "react";

function BlackSquareButton(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="b"
        x1={64}
        x2={64}
        y1={5}
        y2={123.47}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#616161" offset={0} />
        <stop stopColor="#555" offset={0.4725} />
        <stop stopColor="#424242" offset={1} />
      </linearGradient>
      <path
        d="m116 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z"
        fill="url(#b)"
      />
      <g opacity={0.2}>
        <path
          d="m116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z"
          fill="#eee"
        />
      </g>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={20.822}
        y2={104.69}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" offset={0} />
        <stop stopColor="#E0E0E0" offset={1} />
      </linearGradient>
      <path
        d="m102 108h-76c-3.31 0-6-2.69-6-6v-76c0-3.31 2.69-6 6-6h76c3.31 0 6 2.69 6 6v76c0 3.31-2.69 6-6 6z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m102 23c1.65 0 3 1.35 3 3v76c0 1.65-1.35 3-3 3h-76c-1.65 0-3-1.35-3-3v-76c0-1.65 1.35-3 3-3h76m0-3h-76c-3.31 0-6 2.69-6 6v76c0 3.31 2.69 6 6 6h76c3.31 0 6-2.69 6-6v-76c0-3.31-2.69-6-6-6z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default BlackSquareButton;
