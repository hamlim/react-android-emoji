import React from "react";

function RailwayCar(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <rect x={4.04} y={101} width={119.85} height={21.99} fill="#8D6E63" />
      <rect x={4.04} y={101} width={119.92} height={7} fill="#424242" />
      <g opacity={0.2}>
        <path d="m122 103v18h-116v-18h116m2-2h-120v22h120v-22z" fill="#eee" />
      </g>
      <g fill="#212121">
        <circle cx={18} cy={99} r={6} />
        <circle cx={34} cy={99} r={6} />
        <circle cx={94} cy={99} r={6} />
        <circle cx={110} cy={99} r={6} />
      </g>
      <linearGradient
        id="e"
        x1={64.083}
        x2={64.083}
        y1={28}
        y2={99}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEB3B" offset={0.0038323} />
        <stop stopColor="#FCC830" offset={0.8197} />
        <stop stopColor="#FBC02D" offset={1} />
      </linearGradient>
      <path
        d="m115.94 99h-103.71c-3.3 0-6-2.7-6-6v-59c0-3.31 2.69-6 6-6h103.71c3.31 0 6 2.69 6 6v59c0 3.3-2.7 6-6 6z"
        fill="url(#e)"
      />
      <rect x={6.11} y={79.66} width={115.83} height={11.32} fill="#689F38" />
      <defs>
        <path
          id="d"
          d="m115.94 99h-103.71c-3.3 0-6-2.7-6-6v-59c0-3.31 2.69-6 6-6h103.71c3.31 0 6 2.69 6 6v59c0 3.3-2.7 6-6 6z"
        />
      </defs>
      <clipPath id="b">
        <use xlinkHref="#d" />
      </clipPath>
      <rect
        x={3.83}
        y={18.75}
        width={120.51}
        height={17.25}
        clipPath="url(#b)"
        fill="#689F38"
      />
      <g clipPath="url(#b)">
        <path
          d="M21,74H5.6c-2.21,0-4-1.79-4-4V49.75c0-2.21,1.79-4,4-4H21c2.21,0,4,1.79,4,4V70 C25,72.21,23.21,74,21,74z"
          fill="#4FC3F7"
        />
      </g>
      <g clipPath="url(#b)" opacity={0.2}>
        <path
          d="m21 47.75c1.1 0 2 0.9 2 2v20.25c0 1.1-0.9 2-2 2h-15.4c-1.1 0-2-0.9-2-2v-20.25c0-1.1 0.9-2 2-2h15.4m0-2h-15.4c-2.21 0-4 1.79-4 4v20.25c0 2.21 1.79 4 4 4h15.4c2.21 0 4-1.79 4-4v-20.25c0-2.21-1.79-4-4-4z"
          fill="#424242"
        />
      </g>
      <path
        d="m44.25 69.08h-9.15c-2.21 0-4-1.79-4-4v-15.33c0-2.21 1.79-4 4-4h9.14c2.21 0 4 1.79 4 4v15.33c0.01 2.21-1.78 4-3.99 4z"
        fill="#4FC3F7"
      />
      <g opacity={0.2}>
        <path
          d="m44.25 47.75c1.1 0 2 0.9 2 2v15.33c0 1.1-0.9 2-2 2h-9.15c-1.1 0-2-0.9-2-2v-15.33c0-1.1 0.9-2 2-2h9.15m0-2h-9.15c-2.21 0-4 1.79-4 4v15.33c0 2.21 1.79 4 4 4h9.14c2.21 0 4-1.79 4-4v-15.33c0.01-2.21-1.78-4-3.99-4z"
          fill="#424242"
        />
      </g>
      <path
        d="m66.37 68.89h-9.14c-2.21 0-4-1.79-4-4v-15.34c0-2.21 1.79-4 4-4h9.14c2.21 0 4 1.79 4 4v15.33c0 2.22-1.79 4.01-4 4.01z"
        fill="#4FC3F7"
      />
      <g opacity={0.2}>
        <path
          d="m66.37 47.55c1.1 0 2 0.9 2 2v15.33c0 1.1-0.9 2-2 2h-9.14c-1.1 0-2-0.9-2-2v-15.33c0-1.1 0.9-2 2-2h9.14m0-2h-9.14c-2.21 0-4 1.79-4 4v15.33c0 2.21 1.79 4 4 4h9.14c2.21 0 4-1.79 4-4v-15.33c0-2.21-1.79-4-4-4z"
          fill="#424242"
        />
      </g>
      <path
        d="m88.5 69.08h-9.14c-2.21 0-4-1.79-4-4v-15.33c0-2.21 1.79-4 4-4h9.14c2.21 0 4 1.79 4 4v15.33c0 2.21-1.79 4-4 4z"
        fill="#4FC3F7"
      />
      <g opacity={0.2}>
        <path
          d="m88.5 47.75c1.1 0 2 0.9 2 2v15.33c0 1.1-0.9 2-2 2h-9.14c-1.1 0-2-0.9-2-2v-15.33c0-1.1 0.9-2 2-2h9.14m0-2h-9.14c-2.21 0-4 1.79-4 4v15.33c0 2.21 1.79 4 4 4h9.14c2.21 0 4-1.79 4-4v-15.33c0-2.21-1.79-4-4-4z"
          fill="#424242"
        />
      </g>
      <path
        d="m110.62 69h-9.14c-2.21 0-4-1.79-4-4v-15.33c0-2.21 1.79-4 4-4h9.14c2.21 0 4 1.79 4 4v15.33c0 2.21-1.79 4-4 4z"
        fill="#4FC3F7"
      />
      <g opacity={0.2}>
        <path
          d="m110.62 47.67c1.1 0 2 0.9 2 2v15.33c0 1.1-0.9 2-2 2h-9.14c-1.1 0-2-0.9-2-2v-15.33c0-1.1 0.9-2 2-2h9.14m0-2h-9.14c-2.21 0-4 1.79-4 4v15.33c0 2.21 1.79 4 4 4h9.14c2.21 0 4-1.79 4-4v-15.33c0-2.21-1.79-4-4-4z"
          fill="#424242"
        />
      </g>
      <defs>
        <path
          id="c"
          d="m115.94 99h-103.71c-3.3 0-6-2.7-6-6v-59c0-3.31 2.69-6 6-6h103.71c3.31 0 6 2.69 6 6v59c0 3.3-2.7 6-6 6z"
        />
      </defs>
      <clipPath id="a">
        <use xlinkHref="#c" />
      </clipPath>
      <rect
        x={3.83}
        y={18.75}
        width={120.51}
        height={17.25}
        clipPath="url(#a)"
        fill="#689F38"
      />
      <g clipPath="url(#a)">
        <path
          d="M21,74H5.6c-2.21,0-4-1.79-4-4V49.75c0-2.21,1.79-4,4-4H21c2.21,0,4,1.79,4,4V70 C25,72.21,23.21,74,21,74z"
          fill="#4FC3F7"
        />
      </g>
      <g clipPath="url(#a)" opacity={0.2}>
        <path
          d="m21 48.44c0.72 0 1.31 0.59 1.31 1.31v20.25c0 0.72-0.59 1.31-1.31 1.31h-15.4c-0.72 0-1.31-0.59-1.31-1.31v-20.25c0-0.72 0.59-1.31 1.31-1.31h15.4m0-2.69h-15.4c-2.21 0-4 1.79-4 4v20.25c0 2.21 1.79 4 4 4h15.4c2.21 0 4-1.79 4-4v-20.25c0-2.21-1.79-4-4-4z"
          fill="#616161"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m115.94 31c1.65 0 3 1.35 3 3v59c0 1.65-1.35 3-3 3h-103.71c-1.65 0-3-1.35-3-3v-59c0-1.65 1.35-3 3-3h103.71m0-3h-103.71c-3.31 0-6 2.69-6 6v59c0 3.3 2.7 6 6 6h103.71c3.3 0 6-2.7 6-6v-59c0-3.31-2.69-6-6-6z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default RailwayCar;
