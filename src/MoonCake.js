import React from "react";

function MoonCake(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <path
        d="m123.25 41.77h-118.08s-1.05 31.52-0.56 38.34c0.26 3.56 0.43 8.35 3.56 9.98 0.74 0.38 1.22 1.21 0.99 1.99-0.88 3.08 8.1 9.63 14.1 9.76 0.71 0.01 1.32 0.41 1.64 1.03 1.56 2.95 18.41 7.13 23.73 5.65 0.6-0.17 1.26-0.12 1.74 0.25 3.29 2.54 25.19-23.08 28.95-24.85 1.47-0.69 39.99 6.49 40.75 6.06 5.04-2.85 3.83-14 3.96-18.59 0.07-1.94-0.78-29.62-0.78-29.62z"
        fill="#F09D3E"
      />
      <defs>
        <path
          id="g"
          d="m120.08 89.97c5.04-2.85 3.83-14 3.96-18.59 0.06-1.94-0.79-29.62-0.79-29.62h-118.08s-1.05 31.52-0.56 38.34c0.26 3.56 0.43 8.35 3.56 9.98 0.74 0.38 1.22 1.21 0.99 1.99-0.88 3.08 8.1 9.63 14.1 9.76 0.71 0.01 1.32 0.41 1.64 1.03 1.56 2.95 18.41 7.13 23.73 5.65 0.6-0.17 1.26-0.12 1.74 0.25 3.29 2.54 25.86 2.54 29.15 0l-0.27-19.85"
        />
      </defs>
      <clipPath id="a">
        <use xlinkHref="#g" />
      </clipPath>
      <g clipPath="url(#a)">
        <polygon
          points="23.75 103.29 8.88 103.41 9.25 44.95 25.12 45.56"
          fill="#FFB35E"
        />
        <polygon
          points="9.31 90.87 -0.25 90.69 -0.25 36.14 9.23 37.14 11.56 47.76 9.25 49.35"
          fill="#FFBF78"
        />
        <polygon
          points="128.5 90.69 119 90.69 117.75 36.14 128.5 36.14"
          fill="#96672E"
        />
      </g>
      <polygon
        points="79.25 112.22 50.67 112.13 50.67 49.35 79.5 49.11"
        clipPath="url(#a)"
        fill="#E39844"
      />
      <line
        x1={50}
        x2={50}
        y1={49.11}
        y2={109.75}
        clipPath="url(#a)"
        fill="none"
        stroke="#BF7D32"
        strokeMiterlimit={10}
        strokeWidth={2.9675}
      />
      <line
        x1={24.5}
        x2={24.5}
        y1={46.82}
        y2={105.77}
        clipPath="url(#a)"
        fill="none"
        stroke="#D98E39"
        strokeMiterlimit={10}
        strokeWidth={2.9675}
      />
      <linearGradient
        id="f"
        x1={39.637}
        x2={98.058}
        y1={24.07}
        y2={66.332}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D78C3A" offset={0} />
        <stop stopColor="#C9710E" offset={1} />
      </linearGradient>
      <path
        d="m78.18 19.9c2.44-3.81-30.47-3.81-28.03 0-2.44-3.81-30.93 3.08-24.27 5.87-6.66-2.79-23.11 9.15-14.02 10.17-9.1-1.02-9.1 12.76 0 11.74-9.1 1.02 7.36 12.96 14.02 10.17-6.66 2.79 21.84 9.68 24.27 5.87-2.44 3.81 30.47 3.81 28.03 0 2.44 3.81 30.93-3.08 24.27-5.87 6.66 2.79 23.11-9.15 14.02-10.17 9.1 1.02 9.1-12.76 0-11.74 9.1-1.02-7.36-12.96-14.02-10.17 6.66-2.78-21.83-9.67-24.27-5.87z"
        fill="url(#f)"
      />
      <g fill="#A8663C">
        <path d="m65.11 22.35c-27.79 0-50.39 9.22-50.39 20.55s22.61 20.55 50.39 20.55c27.79 0 50.39-9.22 50.39-20.55s-22.61-20.55-50.39-20.55zm2.46 11.35c3.4 0.15 6.58 0.61 9.37 1.3h-9.37v-1.3zm0 3.31h15.03c0.75 0.37 1.42 0.76 2.02 1.17h-17.05v-1.17zm-2.46 24.44c-25.07 0-45.47-8.32-45.47-18.55 0-9.89 19.08-17.99 43.01-18.52v2.88c-12.19 0.32-22.86 2.96-29.34 6.86h6.16c5.65-2.74 13.89-4.56 23.17-4.84v2.4c-11.84 0.43-21.55 3.92-24.35 8.5h24.35v2h-35.9c-0.03 0.24 0.01 1.58 0.09 2h71.6c-0.17 0.71-0.46 1.41-0.89 2.09h-69.93c0.37 0.69 0.85 1.36 1.43 2.01h66.83c-5.14 4.86-16.99 8.27-30.76 8.27-12.11 0-22.74-2.64-28.63-6.58h-5.62c6.35 5.09 19.31 8.58 34.24 8.58 16.54 0 30.66-4.28 36.06-10.27h7.44c-5.66 7.62-23.02 13.17-43.49 13.17zm-11.83-26.44c2.79-0.7 5.96-1.15 9.37-1.3v1.3h-9.37zm9.37 2v1.17h-17.06c0.6-0.41 1.28-0.8 2.02-1.17h15.04zm39.95 9.28c0.59-1.09 0.91-2.22 0.91-3.39 0-0.92-0.2-1.82-0.58-2.7h-5c0.32 0.65 0.53 1.31 0.61 1.98h-30.97v-2h24.35c-2.8-4.59-12.51-8.08-24.35-8.5v-2.4c9.28 0.28 17.52 2.1 23.17 4.84h6.16c-6.48-3.89-17.15-6.54-29.34-6.86v-2.88c23.93 0.52 43.01 8.63 43.01 18.52 0 1.16-0.27 2.29-0.77 3.39h-7.2z" />
        <path d="m65.11 54.17c8.65 0 16.38-1.63 21.45-4.18h-6.85c-3.95 1.36-9.05 2.18-14.6 2.18-5.56 0-10.65-0.82-14.6-2.18h-6.85c5.07 2.55 12.79 4.18 21.45 4.18z" />
      </g>
      <g fill="#FFB342">
        <path d="m63.45 21.68c-27.79 0-50.39 9.22-50.39 20.55s22.61 20.55 50.39 20.55c27.79 0 50.39-9.22 50.39-20.55 0.01-11.33-22.6-20.55-50.39-20.55zm2.46 11.35c3.4 0.15 6.58 0.61 9.37 1.3h-9.37v-1.3zm0 3.31h15.04c0.74 0.37 1.42 0.76 2.02 1.17h-17.06v-1.17zm-2.46 24.44c-25.07 0-45.47-8.32-45.47-18.55 0-9.89 19.08-17.99 43.01-18.52v2.88c-12.19 0.32-22.86 2.96-29.34 6.86h6.16c5.65-2.74 13.89-4.56 23.17-4.84v2.4c-11.84 0.43-21.55 3.92-24.35 8.5h24.35v2h-35.9c-0.03 0.24 0.01 1.58 0.09 2h71.6c-0.17 0.71-0.46 1.41-0.89 2.09h-69.92c0.37 0.69 0.85 1.36 1.43 2.01h66.83c-5.14 4.86-16.99 8.27-30.76 8.27-12.11 0-22.74-2.64-28.63-6.58h-5.62c6.35 5.09 19.31 8.58 34.24 8.58 16.54 0 30.66-4.28 36.06-10.27h7.44c-5.67 7.62-23.02 13.17-43.5 13.17zm-11.82-26.45c2.79-0.7 5.96-1.15 9.37-1.3v1.3h-9.37zm9.36 2.01v1.17h-17.06c0.6-0.41 1.28-0.8 2.02-1.17h15.04zm39.96 9.28c0.59-1.09 0.91-2.22 0.91-3.39 0-0.92-0.2-1.82-0.58-2.7h-5c0.32 0.65 0.53 1.31 0.61 1.98h-30.98v-2h24.35c-2.8-4.59-12.51-8.08-24.35-8.5v-2.4c9.28 0.28 17.52 2.1 23.17 4.84h6.16c-6.48-3.89-17.15-6.54-29.34-6.86v-2.88c23.93 0.52 43.01 8.63 43.01 18.52 0 1.16-0.27 2.29-0.77 3.39h-7.19z" />
        <path d="m63.45 53.5c8.65 0 16.38-1.63 21.45-4.18h-6.85c-3.95 1.36-9.04 2.18-14.6 2.18s-10.65-0.82-14.6-2.18h-6.85c5.07 2.54 12.8 4.18 21.45 4.18z" />
      </g>
      <polygon
        points="120.08 89.97 79.26 85.83 79.26 64.92 64.13 42.17 119.62 47.67"
        fill="#66401F"
      />
      <path
        d="m119.47 49.31"
        fill="none"
        stroke="#FAAE6C"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d="m64.13 43.53"
        fill="none"
        stroke="#FAAE6C"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <defs>
        <polygon
          id="e"
          points="120.33 110.67 79.26 108.83 79.26 64.92 64.13 42.17 121.02 48.33"
        />
      </defs>
      <clipPath id="d">
        <use xlinkHref="#e" />
      </clipPath>
      <g clipPath="url(#d)">
        <path
          d="m105.18 67.53c-0.09 2.39-0.89 4.05-2.65 5.62-1.57 1.4-3.44 2.16-5.9 2.66-2.08 0.42-4.39 1.94-6.84 1.55-1.88-0.3-3.67-1.35-5.32-2.07-1.77-0.77-3.65-1.54-5.02-2.67-1.51-1.25-1.76-3.49-2.63-5.01-0.96-1.69-2.02-3.17-1.95-4.98 0.09-2.39 1.66-3.86 3.41-5.43 1.57-1.4 3.29-2.33 5.75-2.82 2.08-0.42 4.35-1.62 6.79-1.23 1.88 0.3 3.71 1.07 5.36 1.79 1.77 0.77 3.63 1.55 5 2.68 1.51 1.25 2.17 3.24 3.03 4.76 0.96 1.67 1.03 3.33 0.97 5.15z"
          fill="#E07700"
        />
      </g>
      <defs>
        <polygon
          id="c"
          points="120.08 89.97 79.26 86 79.26 64.92 64.13 42.17 119.62 47.67"
        />
      </defs>
      <clipPath id="b">
        <use xlinkHref="#c" />
      </clipPath>
      <g clipPath="url(#b)">
        <line x1={60.72} x2={121.5} y1={43.17} y2={49.04} fill="#FFB342" />
        <rect
          transform="matrix(.0962 -.9954 .9954 .0962 36.458 132.36)"
          x={89.11}
          y={15.58}
          width={4}
          height={61.06}
          fill="#FFD28F"
        />
      </g>
      <g clipPath="url(#b)">
        <line x1={60.72} x2={121.5} y1={82.17} y2={88.04} fill="#FFB342" />
        <rect
          transform="matrix(.0962 -.9954 .9954 .0962 -2.3616 167.61)"
          x={89.11}
          y={54.58}
          width={4}
          height={61.06}
          fill="#FFD28F"
        />
      </g>
      <rect
        transform="matrix(.9999 -.011 .011 .9999 -.777 1.3121)"
        x={117.19}
        y={48.48}
        width={3}
        height={45.38}
        clipPath="url(#b)"
        fill="#FFD28F"
      />
      <g opacity={0.2}>
        <path
          d="m64.22 17.19v3c6.68 0 10.97 0.71 11.95 1.23 0.78 0.64 1.74 0.99 2.71 0.99 0.48 0 0.95-0.08 1.4-0.25 0.15-0.06 0.78-0.24 2.3-0.24 6.04 0 15.9 2.63 18.14 4.15 0.51 1.45 1.85 2.45 3.43 2.45 0.1 0 0.2 0 0.31-0.01 0.13-0.01 0.27-0.02 0.41-0.02 4.11 0 9.29 3.54 10.9 5.36-0.55 0.7-0.81 1.61-0.65 2.52 0.24 1.42 1.4 2.52 2.83 2.68 2.54 0.28 2.41 2.89 2.39 3.19-0.01 0.11-0.01 0.22-0.01 0.32 0.41 13.5 0.81 27.66 0.78 28.88-0.02 0.84-0.01 1.8 0.01 2.93 0.06 3.49 0.17 10.47-1.89 12.69-0.31-0.04-0.73-0.09-1.31-0.18-0.04-0.01-0.08-0.01-0.13-0.02l-38.08-3.86c-0.1-0.01-0.2-0.02-0.3-0.02-0.74 0-1.45 0.27-2.01 0.77-0.63 0.57-0.99 1.37-0.99 2.22l-0.01 2.39c-0.06 0.24-0.09 0.49-0.08 0.74l0.06 4.51-0.05 13.34c-2.06 0.44-5.97 0.86-11.32 0.86-6.69 0-11.13-0.66-12.52-1.2-0.18-0.13-0.38-0.25-0.6-0.34-0.74-0.46-1.61-0.71-2.54-0.71-0.49 0-0.98 0.07-1.46 0.2-0.27 0.07-0.89 0.2-2.11 0.2-6.61 0-16.64-3.11-18.27-4.55-0.86-1.47-2.42-2.39-4.12-2.43-4.15-0.09-10.35-4.46-11.18-6.34 0.37-1.99-0.67-4.08-2.59-5.07-1.48-0.77-1.74-4.49-1.91-6.95l-0.04-0.58c-0.45-5.94 0.35-31.78 0.51-36.89 0.01-0.2-0.01-0.39-0.04-0.59-0.16-0.98 0.08-2 0.64-2.65 0.5-0.59 1.21-0.87 2.19-0.87 0.19 0 0.4 0.01 0.61 0.04 0.11 0.01 0.23 0.02 0.34 0.02 1.51 0 2.81-1.13 2.98-2.67 0.15-1.32-0.59-2.54-1.73-3.06 2-1.9 6.65-4.86 10.41-4.86 0.62 0 1 0.1 1.2 0.19 0.38 0.16 0.77 0.23 1.16 0.23 1.17 0 2.29-0.69 2.77-1.84 0.22-0.53 0.28-1.09 0.2-1.62 3.47-1.52 11.68-3.53 16.96-3.53 1.44 0 2.08 0.16 2.28 0.23 0.44 0.15 0.9 0.22 1.37 0.22 0.98 0 1.96-0.34 2.75-0.95 0.95-0.52 5.25-1.23 11.96-1.23v-3.02m-52.69 15.77m52.68-15.77c-6.12 0-12.24 0.61-13.78 1.84-0.27 0.22-0.6 0.34-0.94 0.34-0.14 0-0.28-0.02-0.42-0.07-0.79-0.27-1.91-0.38-3.23-0.38-8.42 0-25.2 4.78-19.92 6.99-0.69-0.29-1.49-0.42-2.36-0.42-7.45 0-19.8 9.67-11.66 10.59-0.33-0.04-0.64-0.05-0.94-0.05-4.41 0-6.33 3.74-5.79 7.02-0.18 5.67-0.96 31.15-0.52 37.2 0.26 3.56 0.43 8.35 3.56 9.98 0.74 0.38 1.22 1.21 0.99 1.99-0.88 3.08 8.1 9.63 14.1 9.76 0.71 0.02 1.32 0.41 1.64 1.03 1.33 2.53 13.9 5.96 20.82 5.96 1.16 0 2.16-0.1 2.92-0.31 0.21-0.06 0.44-0.09 0.66-0.09 0.39 0 0.77 0.1 1.08 0.34 0.08 0.06 0.18 0.1 0.29 0.12v0.06c2.01 1.15 8.15 1.72 14.29 1.72 6.16 0 12.33-0.58 14.31-1.73l0.06-15.48-0.06-4.53h0.08l0.01-3.08 38.07 3.86c1.26 0.18 2.14 0.29 2.5 0.29 0.08 0 0.14-0.01 0.16-0.02 5.04-2.85 3.83-14 3.96-18.59 0.05-1.78-0.66-25.16-0.78-29.05 0.23-2.91-1.45-6-5.05-6.4-0.22-0.02-0.29-0.31-0.09-0.41 4.4-2.09-6.51-10.17-13.32-10.17-0.23 0-0.45 0.01-0.66 0.03h-0.05c-0.35 0-0.61-0.29-0.64-0.65-0.2-2.4-13.67-5.95-20.93-5.95-1.38 0-2.53 0.13-3.32 0.41-0.13 0.05-0.25 0.07-0.38 0.07-0.3 0-0.59-0.12-0.84-0.33-1.45-1.26-7.64-1.89-13.82-1.89z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default MoonCake;
