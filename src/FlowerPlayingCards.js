import React from "react";

function FlowerPlayingCards(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="d"
        x1={64}
        x2={64}
        y1={13.667}
        y2={104}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EF5350" offset={0.1353} />
        <stop stopColor="#E53935" offset={0.8422} />
      </linearGradient>
      <path
        d="m100 124h-72c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h72c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z"
        fill="url(#d)"
      />
      <circle cx={52.17} cy={39.83} r={22.5} fill="#F5F5F5" />
      <defs>
        <path
          id="c"
          d="m100 124h-72c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h72c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z"
        />
      </defs>
      <clipPath id="b">
        <use xlinkHref="#c" />
      </clipPath>
      <linearGradient
        id="a"
        x1={52.957}
        x2={62.457}
        y1={53.358}
        y2={101.36}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#757575" offset={0} />
        <stop stopColor="#424242" offset={1} />
      </linearGradient>
      <path
        d="m108.67 134.67h-91.34l-6.67-35.33s49.76-38.28 89.33-18c26.68 13.66 8.8 53.28 8.68 53.33z"
        clipPath="url(#b)"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m100 8c2.21 0 4 1.79 4 4v104c0 2.21-1.79 4-4 4h-72c-2.21 0-4-1.79-4-4v-104c0-2.21 1.79-4 4-4h72m0-4h-72c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h72c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default FlowerPlayingCards;
