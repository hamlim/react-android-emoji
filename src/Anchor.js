import React from "react";

function Anchor(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={123.81}
        y2={4.3568}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#757575" offset={0.0142} />
        <stop stopColor="#818181" offset={0.1718} />
        <stop stopColor="#A2A2A2" offset={0.4588} />
        <stop stopColor="#D6D6D6" offset={0.8399} />
        <stop stopColor="#eee" offset={1} />
      </linearGradient>
      <path
        d="m121.38 72.41-8.09-12.1c-0.66-0.99-2.11-0.98-2.76 0.01l-7.97 12.1c-0.73 1.1 0.06 2.58 1.38 2.58h3.63c-2.6 12-13.56 21.27-27.97 24.96-5.51 1.41-11.6-2.54-11.6-8.31v-33.65h11.36c2.64 0 4.79-2.36 4.79-5s-2.16-5-4.79-5h-11.36v-9.11c8-1.93 13.34-8.79 13.34-16.99 0-9.69-7.8-17.55-17.49-17.55s-17.54 7.86-17.54 17.55c0 8 5.69 14.74 12.69 16.85v9.25h-10.36c-2.64 0-4.79 2.36-4.79 5s2.16 5 4.79 5h10.36v33.6c0 6.02-7.42 9.58-13.08 7.77-12.92-4.14-22.43-13.37-24.82-24.37h2.96c1.33 0 2.12-1.49 1.38-2.59l-8.09-12.1c-0.66-0.99-2.11-0.98-2.76 0.01l-7.97 12.1c-0.73 1.1 0.06 2.58 1.38 2.58h3.4c2.35 17 17.42 31.24 37.03 36.19 3.96 1 7.49 3.25 9.93 6.56l2.79 5.17c0.87 1.18 3.99 1.18 4.86-0.01l2.36-4.6c2.52-3.44 6.12-6.41 10.26-7.29 20.7-4.42 36.1-18.02 38.4-36.02h2.97c1.33 0 2.12-1.49 1.38-2.59zm-67.28-50.5c0-5.42 4.39-9.81 9.81-9.81s9.81 4.39 9.81 9.81-4.39 9.81-9.81 9.81c-5.41 0-9.81-4.4-9.81-9.81z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m63.86 7.25c7.99 0 14.49 6.53 14.49 14.55 0 6.82-4.44 12.48-11.05 14.07-1.35 0.33-2.3 1.53-2.3 2.92v9.61c0 1.66 1.34 3 3 3h11.36c0.92 0 1.79 0.97 1.79 2s-0.87 2-1.79 2h-11.36c-1.66 0-3 1.34-3 3v33.15c0 6.41 5.68 11.83 12.41 11.83 1 0 1.98-0.12 2.94-0.37 16.12-4.13 27.39-14.21 30.16-26.98 0.19-0.89-0.03-1.81-0.6-2.52s-1.43-1.12-2.34-1.12h-1.31l5.64-8.72 5.77 8.72h-0.67c-1.51 0-2.78 1.12-2.98 2.62-2.07 16.19-15.88 28.92-36.05 33.23-4.62 0.99-8.9 3.9-12.05 8.21-0.09 0.13-0.18 0.27-0.25 0.41l-1.98 3.88c-0.05 0-0.11 0.01-0.18 0.01h-0.13l-2.41-4.41c-0.06-0.12-0.14-0.23-0.22-0.34-2.75-3.73-6.77-6.34-11.61-7.57-9.22-2.33-17.4-6.72-23.64-12.71s-10.1-13.16-11.15-20.74c-0.21-1.48-1.47-2.59-2.97-2.59h-1.08l5.64-8.72 5.77 8.72h-0.61c-0.91 0-1.77 0.41-2.34 1.12s-0.79 1.63-0.6 2.52c2.6 11.94 12.63 21.79 26.84 26.34 1.24 0.4 2.55 0.6 3.91 0.6 6.32 0 13.09-4.61 13.09-11.47v-33.1c0-1.66-1.34-3-3-3h-10.36c-0.92 0-1.79-0.97-1.79-2s0.87-2 1.79-2h10.36c1.66 0 3-1.34 3-3v-9.75c0-1.32-0.87-2.49-2.13-2.87-6.11-1.85-10.55-7.72-10.55-13.98-0.01-8.02 6.52-14.55 14.54-14.55m0.06 27.36c7.06 0 12.81-5.75 12.81-12.81s-5.75-12.81-12.81-12.81-12.81 5.75-12.81 12.81c-0.01 7.06 5.74 12.81 12.81 12.81m-0.06-30.36c-9.69 0-17.54 7.86-17.54 17.55 0 8 5.69 14.74 12.69 16.85v9.75h-10.37c-2.64 0-4.79 2.36-4.79 5s2.16 5 4.79 5h10.36v33.1c0 5-5.12 8.47-10.09 8.47-1.02 0-2.03-0.15-2.99-0.45-12.92-4.15-22.43-13.13-24.82-24.13h2.96c1.33 0 2.12-1.74 1.38-2.84l-8.09-12.22c-0.34-0.51-0.89-0.77-1.43-0.77-0.51 0-1.02 0.23-1.33 0.71l-7.98 12.32c-0.73 1.1 0.06 2.8 1.38 2.8h3.4c2.35 17 17.42 30.99 37.03 35.94 3.96 1 7.49 3.13 9.93 6.44l2.79 5.1c0.43 0.58 1.4 0.87 2.38 0.87 1.01 0 2.03-0.31 2.47-0.91l2.36-4.62c2.52-3.44 6.12-6.16 10.26-7.05 20.7-4.42 36.1-17.78 38.4-35.78h2.99c1.33 0 2.12-1.74 1.38-2.84l-8.09-12.22c-0.34-0.51-0.89-0.77-1.43-0.77-0.51 0-1.02 0.23-1.33 0.71l-7.97 12.32c-0.73 1.1 0.06 2.8 1.38 2.8h3.63c-2.6 12-13.56 21.02-27.97 24.71-0.73 0.19-1.46 0.27-2.19 0.27-4.82 0-9.41-3.83-9.41-8.83v-33.14h11.36c2.64 0 4.79-2.36 4.79-5s-2.16-5-4.79-5h-11.36v-9.61c8-1.93 13.34-8.79 13.34-16.99 0-9.68-7.79-17.54-17.48-17.54zm0.06 27.36c-5.42 0-9.81-4.39-9.81-9.81s4.39-9.81 9.81-9.81 9.81 4.39 9.81 9.81-4.4 9.81-9.81 9.81z"
          fill="#0D47A1"
        />
      </g>
    </svg>
  );
}

export default Anchor;
