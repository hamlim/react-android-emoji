import React from "react";

function WindFace(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <defs>
        <rect id="c" x={4} y={4} width={120} height={120} />
      </defs>
      <clipPath id="a">
        <use xlinkHref="#c" />
      </clipPath>
      <path
        d="m62.71 63.42-3.32-6.54 9.18-1.15c2.94-0.37 5.75-1.3 8.33-2.76l2.72-1.54-1.57 2.15c-2.7 3.71-6.22 6.44-10.25 7.94l-5.09 1.9z"
        clipPath="url(#a)"
        fill="#42A5F5"
      />
      <g clipPath="url(#a)">
        <radialGradient
          id="b"
          cx={-256.08}
          cy={-22.226}
          r={180.64}
          gradientTransform="matrix(-1 0 0 1 -244 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3F2FD" offset={0.2636} />
          <stop stopColor="#90CAF9" offset={0.9167} />
        </radialGradient>
        <path
          d="m-54.3 61.82c-1.03-3.48-0.26-80.63 36.3-66.32 34.8 13.62 37.1 10 64.77 10 9.51 0 25.86 9.21 29.1 26.99 2.59 14.26-7.67 23.6-4.94 27.99 2.38 3.83 5.87 5.72 8.13 7.37 2.75 2.01 4.71 3.77 3.82 6.21-1.52 4.19-4.49 3.21-4.83 5.98-0.38 3.02 1.92 0.47 2.85 3.38 1.34 4.2-3.93 5.27-4.1 6.3-0.4 2.4 2.69 3.35 1.53 5.63-1.85 3.61-5.47 1.42-5.95 3.33-0.7 2.82 1.58 6.18-0.57 9.54-8.43 13.18-26.11 2.69-38.28 2.78-11.77 0.09-7.5 17-53 17-10.3 0-19.04-10.05-22.71-19.03-3.18 1.14-6.68 1.63-10.36 1.15-10.86-1.42-19.27-10.79-19.44-21.74-0.22-12.46 16.83-26.66 17.68-26.56z"
          fill="url(#b)"
        />
      </g>
      <path
        d="m40.79 64.68s9.16 0.32 14.11-1.12c5.99-1.75 11.05-7.09 11.05-7.09s-3.95 9.82-9.56 11.62-15.6-3.41-15.6-3.41z"
        clipPath="url(#a)"
        fill="#42A5F5"
      />
      <g clipPath="url(#a)" opacity={0.2}>
        <path
          d="m-107.29-18.11c2.29 0 4.8 0.53 7.45 1.56 23.27 9.11 32.32 10.64 43.81 10.64 2.64 0 5.34-0.08 8.46-0.18 3.87-0.12 8.26-0.26 13.59-0.26 7.32 0 23.03 7.41 26.14 24.53 1.34 7.37-1.18 13.32-3.21 18.1-1.77 4.17-3.3 7.76-1.33 10.93 2.63 4.22 5.64 6.82 7.85 8.71 1.06 0.91 2.5 2.15 2.61 2.62 0 0.02-0.01 0.09-0.06 0.22-0.42 1.15-0.77 1.29-1.93 1.72-1.12 0.42-2.82 1.06-3.96 2.93-1.05 1.72-0.34 3.59 0.29 5.24 0.19 0.51 0.53 1.41 0.61 1.85-0.23 0.34-0.87 0.9-1.2 1.18-0.9 0.79-2.02 1.76-2 3.4 0.01 0.81 0.26 1.64 0.54 2.61 0.09 0.3 0.23 0.77 0.3 1.07-0.12 0.4-0.22 0.54-0.22 0.54-0.05 0.03-0.22 0.1-0.34 0.15-0.75 0.3-2.5 1.01-3.06 3.27-0.53 2.1 0.22 4.03 0.88 5.74 0.69 1.78 0.97 2.68 0.58 3.29-2.33 3.64-5.58 5.27-10.54 5.27-3.83 0-8.2-0.98-12.43-1.93-4.26-0.96-8.66-1.94-12.63-1.94h-0.18c-5.1 0.04-7.92 2.59-10.92 5.28-5.18 4.67-13.01 11.72-42.06 11.72-8.49 0-16.45-8.63-19.93-17.16-0.47-1.16-1.59-1.87-2.78-1.87-0.34 0-0.68 0.06-1.01 0.18-2.13 0.77-4.32 1.15-6.51 1.15-0.81 0-1.63-0.05-2.44-0.16-9.45-1.24-16.68-9.32-16.83-18.81-0.15-9.87 13.37-22.15 15.76-23.7 0.48-0.18 0.91-0.48 1.25-0.88 0.62-0.74 0.85-1.74 0.61-2.67-0.7-4.09 0.15-42.81 13.03-58.23 3.41-4.11 7.28-6.11 11.81-6.11m0-3c-28.14 0-28.7 64.9-27.76 68.08h-0.01c-0.97 0-17.89 14.14-17.7 26.56 0.17 10.95 8.58 20.32 19.44 21.74 0.96 0.13 1.9 0.19 2.83 0.19 2.65 0 5.17-0.49 7.53-1.33 3.67 8.98 12.41 19.03 22.71 19.03 45.5 0 41.23-16.91 53-17h0.16c7.44 0 16.91 3.87 25.06 3.87 5.17 0 9.81-1.56 13.07-6.65 2.15-3.36-1.78-7.09-1.07-9.91 0.48-1.91 2.8-0.35 3.73-4.39 0.17-0.74-0.86-3.15-0.87-4.01-0.01-0.69 3.15-2.27 3.21-4.32 0.06-1.9-1.9-4.87-1.35-5.77 1.45-2.38 4.63-1 6.15-5.19 1.62-4.45-5.4-5.67-10.67-14.15-2.72-4.38 7.54-13.72 4.94-27.99-3.23-17.78-19.58-26.99-29.09-26.99-9.6 0-16.14 0.44-22.05 0.44-11.12 0-19.99-1.54-42.72-10.44-3.1-1.21-5.94-1.77-8.54-1.77z"
          fill="#424242"
        />
      </g>
      <g clipPath="url(#a)" opacity={0.2}>
        <path
          d="m-26.54-4.27c2.42 0 5.05 0.55 7.81 1.63 23.12 9.05 32.09 10.58 43.45 10.58 2.63 0 5.32-0.08 8.43-0.18 3.88-0.12 8.27-0.26 13.62-0.26 9.2 0 24.16 9.03 27.13 25.35 1.39 7.67-1.2 13.77-3.28 18.67-1.73 4.07-3.09 7.29-1.4 10.01 2.17 3.49 5.17 5.54 7.36 7.03 0.46 0.31 0.89 0.61 1.29 0.9 3.04 2.22 3.43 3.06 3.12 3.92-0.57 1.58-1.3 2.04-2.22 2.63-1.03 0.65-2.44 1.55-2.72 3.79-0.29 2.31 0.6 3.64 2.66 3.96 0.05 0.01 0.12 0.02 0.17 0.03 0.02 0.05 0.06 0.13 0.09 0.24 0.37 1.16-0.03 1.74-2.03 2.96-0.96 0.58-1.94 1.19-2.14 2.4-0.32 1.93 0.64 3.28 1.27 4.17 0.18 0.26 0.46 0.65 0.49 0.76 0 0-0.01 0.04-0.05 0.11-0.54 1.06-1.13 1.16-2.42 1.28-1.02 0.1-3.14 0.3-3.68 2.48-0.38 1.51-0.15 2.96 0.07 4.36 0.27 1.71 0.5 3.19-0.39 4.59-2.53 3.96-6.04 5.73-11.38 5.73-3.94 0-8.37-0.99-12.65-1.95-4.4-0.99-8.55-1.92-12.41-1.92h-0.18c-4.72 0.04-7.28 2.35-10.26 5.03-5.28 4.76-13.28 11.97-42.71 11.97-8.93 0-17.25-8.95-20.86-17.79-0.32-0.77-1.06-1.24-1.85-1.24-0.22 0-0.45 0.04-0.68 0.12-2.24 0.81-4.54 1.21-6.85 1.21-0.85 0-1.72-0.06-2.57-0.17-9.94-1.3-17.55-9.81-17.7-19.79-0.16-10.63 14.03-23.26 16.31-24.62 0.35-0.11 0.68-0.32 0.92-0.62 0.42-0.5 0.57-1.19 0.4-1.82-0.68-3.3-0.01-42.71 12.98-58.77 3.7-4.56 7.9-6.78 12.86-6.78m0-2c-28.14 0-28.7 64.9-27.76 68.08h-0.01c-0.97 0-17.89 14.14-17.7 26.56 0.17 10.95 8.58 20.32 19.44 21.74 0.96 0.13 1.9 0.19 2.83 0.19 2.65 0 5.17-0.49 7.53-1.33 3.67 8.98 12.41 19.03 22.71 19.03 45.5 0 41.23-16.91 53-17h0.16c7.44 0 16.91 3.87 25.06 3.87 5.17 0 9.81-1.56 13.07-6.65 2.15-3.36-0.13-6.72 0.57-9.54 0.48-1.91 4.1 0.28 5.95-3.33 1.17-2.28-1.92-3.22-1.53-5.63 0.17-1.02 5.44-2.1 4.1-6.3-0.93-2.91-3.23-0.35-2.85-3.38 0.35-2.77 3.31-1.79 4.83-5.98 0.89-2.44-1.07-4.2-3.82-6.21-2.26-1.65-5.75-3.55-8.13-7.37-2.72-4.38 7.54-13.72 4.94-27.99-3.22-17.78-19.57-26.99-29.08-26.99-9.6 0-16.14 0.44-22.05 0.44-11.13 0-19.99-1.55-42.72-10.44-3.1-1.21-5.94-1.77-8.54-1.77z"
          fill="#424242"
        />
      </g>
      <g clipPath="url(#a)">
        <path
          d="m62.7 75.29c-0.64 0.65-0.78 1.8-0.37 2.35 1.57 2.09 2.93 5.87 2.61 10.54-0.37 5.39-4.8 7.6-7.25 9.38-1.36 0.99-0.79 2.18-0.12 2.84s2.37 0 2.9-0.29c4.03-2.18 8.28-7.36 8.24-12.58-0.04-4.27-1.63-10.81-3.94-12.26-0.43-0.26-2.07 0.02-2.07 0.02z"
          fill="#90CAF9"
        />
      </g>
      <path
        d="m85.74 85.23c7.9 0.03 17.12-1.07 22.73-7.27 3.65-4.04 5.52-8.67 4.62-14.09-0.75-4.52-3.69-8.18-8.64-7.36-6.03 1.01-7.52 7.94-3.46 12.06 1.36 1.38 3.48-0.74 2.12-2.12-4.93-5 4.27-10.38 6.65-3.75 0.81 2.25 0.87 5.3 0.1 7.58-3.41 10.01-14.95 11.99-24.11 11.95-1.94-0.01-1.95 2.99-0.01 3z"
        fill="#90CAF9"
      />
      <path
        d="m84.54 95.25c8.7 0.39 22.18 2.52 25.39 12.35 0.68 2.09 0.55 4.85-0.08 6.92-2.12 6.99-11.85 1.81-6.75-3.36 1.36-1.38-0.76-3.5-2.12-2.12-3.85 3.91-2.79 10.67 2.96 11.94 4.96 1.09 8.18-2.2 9.08-6.84 3.1-15.87-16.38-21.35-28.48-21.89-1.93-0.09-1.92 2.91 0 3z"
        fill="#90CAF9"
      />
      <path
        d="m85.25 90.46c7.54-0.66 15.26-1.34 22.84-0.96 2.12 0.11 6.11 0.09 7.95 1.52 4.12 3.18-3.65 5.91-5.62 2.47-0.96-1.68-3.55-0.17-2.59 1.51 3.35 5.87 16.36 2.64 12.04-4.57-1.97-3.29-7.49-3.64-10.86-3.87-7.86-0.55-15.93 0.22-23.76 0.9-1.9 0.17-1.92 3.17 0 3z"
        fill="#90CAF9"
      />
    </svg>
  );
}

export default WindFace;
