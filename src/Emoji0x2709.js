import React from "react";

function Emoji0x2709(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="d"
        x1={64}
        x2={64}
        y1={36.833}
        y2={104.33}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC107" offset={0} />
        <stop stopColor="#FFD54F" offset={1} />
      </linearGradient>
      <path
        d="m120 104h-112c-2.21 0-4-1.79-4-4v-72c0-2.21 1.79-4 4-4h112c2.21 0 4 1.79 4 4v72c0 2.21-1.79 4-4 4z"
        fill="url(#d)"
      />
      <linearGradient
        id="c"
        x1={64}
        x2={64}
        y1={8.4562}
        y2={72.154}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE082" offset={0} />
        <stop stopColor="#FFCA28" offset={0.9931} />
      </linearGradient>
      <path
        d="M124,30.16V28c0-2.21-1.79-4-4-4H8c-2.21,0-4,1.79-4,4v2.02l59.91,46.13L124,30.16z"
        fill="url(#c)"
      />
      <defs>
        <path
          id="b"
          d="m120 104h-112c-2.21 0-4-1.79-4-4v-72c0-2.21 1.79-4 4-4h112c2.21 0 4 1.79 4 4v72c0 2.21-1.79 4-4 4z"
        />
      </defs>
      <clipPath id="a">
        <use xlinkHref="#b" />
      </clipPath>
      <g
        clipPath="url(#a)"
        fill="none"
        stroke="#FFB300"
        strokeMiterlimit={10}
        strokeWidth={3}
      >
        <line x1={43.01} x2={-0.19} y1={60.76} y2={107.93} />
        <line x1={84.88} x2={128} y1={60.66} y2={108.12} />
      </g>
      <polyline
        points="0.08 27.78 63.91 76.14 127.92 27.94"
        clipPath="url(#a)"
        fill="none"
        stroke="#FFB300"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <g opacity={0.2}>
        <path
          d="m120 27c0.55 0 1 0.45 1 1v72c0 0.55-0.45 1-1 1h-112c-0.55 0-1-0.45-1-1v-72c0-0.55 0.45-1 1-1h112m0-3h-112c-2.21 0-4 1.79-4 4v72c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-72c0-2.21-1.79-4-4-4z"
          fill="#444"
        />
      </g>
    </svg>
  );
}

export default Emoji0x2709;
