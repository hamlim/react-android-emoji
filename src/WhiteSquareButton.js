import React from "react";

function WhiteSquareButton(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="b"
        x1={64}
        x2={64}
        y1={2.5}
        y2={125.31}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" offset={0} />
        <stop stopColor="#E0E0E0" offset={1} />
      </linearGradient>
      <path
        d="m116 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z"
        fill="url(#b)"
      />
      <g opacity={0.2}>
        <path
          d="m116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z"
          fill="#424242"
        />
      </g>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={18.864}
        y2={107.14}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#757575" offset={0} />
        <stop stopColor="#696969" offset={0.3176} />
        <stop stopColor="#494949" offset={0.8922} />
        <stop stopColor="#424242" offset={1} />
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

export default WhiteSquareButton;
