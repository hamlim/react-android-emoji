import React from "react";

function Soccer(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <radialGradient
        id="g"
        cx={64}
        cy={31.209}
        r={65.44}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#616262" offset={0} />
        <stop stopColor="#212121" offset={0.9036} />
      </radialGradient>
      <circle cx={64} cy={64} r={60} fill="url(#g)" />
      <defs>
        <circle id="f" cx={64} cy={64} r={60} />
      </defs>
      <clipPath id="e">
        <use xlinkHref="#f" />
      </clipPath>
      <radialGradient
        id="d"
        cx={75.775}
        cy={93.349}
        r={77.756}
        gradientTransform="matrix(-1 0 0 -1 130 125.03)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F5F5F5" offset={0.3419} />
        <stop stopColor="#E0E0E0" offset={0.7571} />
      </radialGradient>
      <polygon
        points="64 145.14 39.38 95.25 -15.68 87.25 24.16 48.41 14.75 -6.42 64 19.47 113.25 -6.42 103.84 48.41 143.68 87.25 88.62 95.25"
        clipPath="url(#e)"
        fill="url(#d)"
      />
      <defs>
        <circle id="c" cx={64} cy={64} r={60} />
      </defs>
      <clipPath>
        <use xlinkHref="#c" />
      </clipPath>
      <g opacity={0.2}>
        <path
          d="M64,7c31.43,0,57,25.57,57,57s-25.57,57-57,57S7,95.43,7,64S32.57,7,64,7 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z"
          fill="#434343"
        />
      </g>
      <linearGradient
        id="b"
        x1={43.647}
        x2={43.647}
        y1={63.464}
        y2={101.52}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#616262" offset={0} />
        <stop stopColor="#212121" offset={0.8972} />
      </linearGradient>
      <path
        d="m38.48 98.24c-0.26 0-0.52-0.06-0.77-0.2-0.78-0.43-1.07-1.4-0.64-2.18l10.33-18.9c0.43-0.78 1.4-1.07 2.18-0.64s1.07 1.4 0.64 2.18l-10.33 18.9c-0.29 0.54-0.84 0.84-1.41 0.84z"
        fill="url(#b)"
      />
      <linearGradient
        id="a"
        x1={84.5}
        x2={84.5}
        y1={63.464}
        y2={101.52}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#616262" offset={0} />
        <stop stopColor="#212121" offset={0.8972} />
      </linearGradient>
      <path
        d="m89.93 98.9c-0.57 0-1.12-0.3-1.41-0.84l-10.86-19.93c-0.42-0.78-0.14-1.76 0.64-2.18s1.76-0.14 2.18 0.64l10.85 19.93c0.42 0.78 0.14 1.76-0.64 2.18-0.24 0.14-0.5 0.2-0.76 0.2z"
        fill="url(#a)"
      />
      <linearGradient
        id="k"
        x1={86.416}
        x2={98.916}
        y1={49.627}
        y2={48.556}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#434343" offset={0} />
        <stop stopColor="#212121" offset={0.8963} />
      </linearGradient>
      <path
        d="m88.46 50.88c-0.84 0-1.55-0.65-1.6-1.51-0.06-0.89 0.62-1.65 1.5-1.71l16.45-1.04c0.9-0.05 1.65 0.62 1.71 1.5 0.06 0.89-0.62 1.65-1.5 1.71l-16.45 1.04c-0.04 0-0.07 0.01-0.11 0.01z"
        fill="url(#k)"
      />
      <linearGradient
        id="j"
        x1={64.212}
        x2={64.212}
        y1={18.464}
        y2={32.956}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#434343" offset={0.0941} />
        <stop stopColor="#616262" offset={1} />
      </linearGradient>
      <path
        d="m64.21 32.68c-0.89 0-1.61-0.72-1.61-1.61v-12.98c0-0.89 0.72-1.61 1.61-1.61s1.61 0.72 1.61 1.61v12.98c0 0.89-0.72 1.61-1.61 1.61z"
        fill="url(#j)"
      />
      <linearGradient
        id="i"
        x1={17.242}
        x2={36.349}
        y1={46.84}
        y2={49.518}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#434343" offset={0} />
        <stop stopColor="#212121" offset={0.8963} />
      </linearGradient>
      <path
        d="m39.58 50.97h-0.11l-16.49-1.1c-0.89-0.06-1.56-0.82-1.5-1.71s0.83-1.56 1.71-1.5l16.49 1.1c0.89 0.06 1.56 0.82 1.5 1.71-0.05 0.85-0.76 1.5-1.6 1.5z"
        fill="url(#i)"
      />
      <linearGradient
        id="h"
        x1={64}
        x2={64}
        y1={21.679}
        y2={76.321}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#616262" offset={0} />
        <stop stopColor="#212121" offset={0.9013} />
      </linearGradient>
      <polygon
        points="48.17 78.72 38.38 48.61 64 30 89.62 48.61 79.83 78.72"
        fill="url(#h)"
      />
    </svg>
  );
}

export default Soccer;
