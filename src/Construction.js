import React from "react";

function Construction(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <path
        d="m24.24 124h-7.94c-1.66 0-3-1.34-3-3v-43.73h13.94v43.73c0 1.66-1.35 3-3 3z"
        fill="#BDBDBD"
      />
      <path
        d="m112.51 124h-7.94c-1.66 0-3-1.34-3-3v-43.73h13.94v43.73c0 1.66-1.34 3-3 3z"
        fill="#BDBDBD"
      />
      <g opacity={0.2}>
        <path
          d="m25.24 79.27v41.73c0 0.55-0.45 1-1 1h-7.94c-0.55 0-1-0.45-1-1v-41.73h9.94m2-2h-13.95v43.73c0 1.66 1.34 3 3 3h7.94c1.66 0 3-1.34 3-3v-43.73h0.01z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m113.51 79.27v41.73c0 0.55-0.45 1-1 1h-7.94c-0.55 0-1-0.45-1-1v-41.73h9.94m2-2h-13.94v43.73c0 1.66 1.34 3 3 3h7.94c1.66 0 3-1.34 3-3v-43.73z"
          fill="#424242"
        />
      </g>
      <linearGradient
        id="c"
        x1={64}
        x2={64}
        y1={39.192}
        y2={81.02}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEE58" offset={0.0256} />
        <stop stopColor="#FDD642" offset={0.4867} />
        <stop stopColor="#FBC02D" offset={1} />
      </linearGradient>
      <path
        d="m120 82.17h-112c-2.21 0-4-1.79-4-4v-33.54c0-2.21 1.79-4 4-4h112c2.21 0 4 1.79 4 4v33.54c0 2.21-1.79 4-4 4z"
        fill="url(#c)"
      />
      <circle cx={20.35} cy={31.4} r={9.04} fill="#BDBDBD" />
      <circle cx={20.35} cy={31.4} r={6.73} fill="#F44336" />
      <circle cx={108.54} cy={31.4} r={9.04} fill="#BDBDBD" />
      <circle cx={108.54} cy={31.4} r={6.73} fill="#F44336" />
      <defs>
        <path
          id="b"
          d="m120 82.17h-112c-2.21 0-4-1.79-4-4v-33.54c0-2.21 1.79-4 4-4h112c2.21 0 4 1.79 4 4v33.54c0 2.21-1.79 4-4 4z"
        />
      </defs>
      <clipPath id="a">
        <use xlinkHref="#b" />
      </clipPath>
      <g clipPath="url(#a)">
        <polygon points="-15.62 88.64 -33.58 88.64 -2.13 34.16 15.84 34.16" />
        <polygon points="20.82 88.64 2.85 88.64 34.31 34.16 52.27 34.16" />
        <polygon points="57.26 88.64 39.29 88.64 70.74 34.16 88.71 34.16" />
        <polygon points="93.69 88.64 75.73 88.64 107.18 34.16 125.15 34.16" />
        <polygon points="130.13 88.64 112.16 88.64 143.62 34.16 161.58 34.16" />
      </g>
      <g opacity={0.2}>
        <path
          d="m120 43.63c0.55 0 1 0.45 1 1v33.54c0 0.55-0.45 1-1 1h-112c-0.55 0-1-0.45-1-1v-33.54c0-0.55 0.45-1 1-1h112m0-3h-112c-2.21 0-4 1.79-4 4v33.54c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-33.54c0-2.2-1.79-4-4-4z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default Construction;
