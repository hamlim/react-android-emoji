import React from "react";

function Volleyball(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <radialGradient
        id="g"
        cx={51.768}
        cy={36.232}
        r={60}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F5F5F5" offset={0.3671} />
        <stop stopColor="#E0E0E0" offset={0.7963} />
      </radialGradient>
      <circle cx={64} cy={64} r={60} fill="url(#g)" />
      <defs>
        <circle id="f" cx={64} cy={64} r={60} />
      </defs>
      <clipPath>
        <use xlinkHref="#f" />
      </clipPath>
      <defs>
        <circle id="e" cx={64} cy={64} r={60} />
      </defs>
      <clipPath>
        <use xlinkHref="#e" />
      </clipPath>
      <g opacity={0.2}>
        <circle cx={64} cy={64} r={60} fill="none" />
      </g>
      <defs>
        <circle id="d" cx={64} cy={64} r={60} />
      </defs>
      <clipPath>
        <use xlinkHref="#d" />
      </clipPath>
      <defs>
        <circle id="c" cx={64} cy={64} r={60} />
      </defs>
      <clipPath>
        <use xlinkHref="#c" />
      </clipPath>
      <g opacity={0.2}>
        <circle cx={64} cy={64} r={60} fill="none" />
      </g>
      <defs>
        <circle id="h" cx={64} cy={64} r={60} />
      </defs>
      <clipPath id="b">
        <use xlinkHref="#h" />
      </clipPath>
      <g clipPath="url(#b)">
        <radialGradient
          id="a"
          cx={39.893}
          cy={28.643}
          r={78.568}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BDBDBD" offset={0.3685} />
          <stop stopColor="#757576" offset={0.7849} />
        </radialGradient>
        <path
          d="m65.15 66.9-3.09-0.87c0.17-0.62 4.47-15.39 20.96-25.75 16.5-10.36 35.58-6.95 36.38-6.8l-0.59 3.16c-0.19-0.03-18.67-3.31-34.08 6.37-15.4 9.66-19.54 23.75-19.58 23.89z"
          fill="url(#a)"
        />
      </g>
      <g clipPath="url(#b)">
        <path
          d="m57.37 66.71c-6.09 0-14.85-1.16-24.29-6.16-17.22-9.13-23.79-27.36-24.06-28.13l3.03-1.07c0.06 0.18 6.45 17.83 22.53 26.35 16.13 8.55 30.34 5.07 30.48 5.03l0.79 3.11c-0.27 0.09-3.47 0.87-8.48 0.87z"
          fill="url(#a)"
        />
      </g>
      <g clipPath="url(#b)">
        <path
          d="m51.22 87.11c-4.53-0.21-9.61-0.93-15.11-2.49-21-5.96-33.06-22.87-33.57-23.59l2.63-1.85c0.12 0.17 11.95 16.7 31.81 22.34 19.91 5.65 34.4-0.41 34.54-0.47l1.27 2.95c-0.46 0.22-8.79 3.7-21.57 3.11z"
          fill="url(#a)"
        />
      </g>
      <g clipPath="url(#b)">
        <path
          d="m48.47 107.66c-2.76-0.16-5.68-0.49-8.75-1.07-21.45-4.05-34.99-19.8-35.56-20.47l2.45-2.08c0.13 0.16 13.4 15.56 33.7 19.38 20.34 3.84 34.22-3.51 34.36-3.58l1.53 2.83c-0.51 0.28-11.19 5.93-27.73 4.99z"
          fill="url(#a)"
        />
      </g>
      <g clipPath="url(#b)">
        <path
          d="m44.15 62.96-3.26-0.61c0.13-0.7 3.39-17.21 20.56-31.76s38.58-15.17 39.48-15.19l0.07 3.31c-0.21 0-21.16 0.63-37.41 14.4-16.22 13.75-19.41 29.69-19.44 29.85z"
          fill="url(#a)"
        />
      </g>
      <g clipPath="url(#b)">
        <path
          d="M21.46,51.59c0.09-0.68,2.5-16.83,18.46-31.71C55.89,4.99,76.6,3.41,77.48,3.35l0.22,3.21 c-0.2,0.01-20.47,1.58-35.58,15.67c-15.14,14.12-17.45,29.65-17.47,29.8L21.46,51.59z"
          fill="url(#a)"
        />
      </g>
      <g clipPath="url(#b)">
        <path
          d="m66 128.6-2.5-2.02c0.12-0.15 11.77-14.87 10.56-33.03-1.22-18.21-11.66-28.46-11.76-28.56l2.23-2.31c0.47 0.44 11.43 11.22 12.73 30.66s-10.75 34.62-11.26 35.26z"
          fill="url(#a)"
        />
      </g>
      <g clipPath="url(#b)">
        <path
          d="m94.76 119.64-2.91-1.39c0.09-0.19 8.58-19.17 3.63-39.72-4.96-20.59-17.41-30.36-17.54-30.46l1.94-2.64c0.55 0.42 13.49 10.58 18.72 32.3 5.23 21.71-3.47 41.1-3.84 41.91z"
          fill="url(#a)"
        />
      </g>
      <g clipPath="url(#b)">
        <path
          d="m113.58 107.31-2.92-1.34c0.09-0.19 8.42-18.73 3.29-38.74-5.14-20.05-17.67-29.52-17.8-29.61l1.91-2.58c0.55 0.41 13.58 10.25 19 31.4 5.42 21.13-3.11 40.07-3.48 40.87z"
          fill="url(#a)"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="M64,7c31.43,0,57,25.57,57,57s-25.57,57-57,57S7,95.43,7,64S32.57,7,64,7 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z"
          fill="#434343"
        />
      </g>
    </svg>
  );
}

export default Volleyball;
