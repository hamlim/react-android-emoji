import React from "react";

function ChildrenCrossing(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="e"
        x1={64}
        x2={64}
        y1={4}
        y2={118.26}
        gradientTransform="matrix(-1 0 0 1 128 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEB3B" offset={0} />
        <stop stopColor="#FFDC28" offset={0.419} />
        <stop stopColor="#FFC107" offset={0.9954} />
      </linearGradient>
      <path
        d="m69.66 6.34 52.16 52c2.97 3.15 2.89 8.08-0.16 11.14l-52 52.16c-3.12 3.12-8.19 3.12-11.31 0l-52-52.16c-3.06-3.06-3.13-8-0.16-11.14l52.16-52c3.12-3.12 8.18-3.12 11.31 0z"
        fill="url(#e)"
      />
      <g opacity={0.2}>
        <path
          d="m64 7c1.34 0 2.59 0.52 3.54 1.47l52.13 51.97c1.84 1.98 1.78 5.02-0.13 6.94l-52 52.16c-0.94 0.94-2.2 1.46-3.54 1.46s-2.59-0.52-3.53-1.46l-52-52.17c-1.91-1.92-1.97-4.95-0.13-6.93l52.12-51.98c0.95-0.94 2.2-1.46 3.54-1.46m0-3c-2.05 0-4.09 0.78-5.66 2.34l-52.16 52c-2.97 3.15-2.89 8.08 0.16 11.14l52 52.16c1.56 1.56 3.61 2.34 5.66 2.34s4.09-0.78 5.66-2.34l52-52.16c3.06-3.06 3.13-8 0.16-11.14l-52.16-52c-1.57-1.56-3.61-2.34-5.66-2.34z"
          fill="#424242"
        />
      </g>
      <g fill="#424242" opacity={0.2}>
        <path d="m74.74 25.91c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.92-6.5 6.5-6.5m0-3c-5.24 0-9.5 4.26-9.5 9.5s4.26 9.5 9.5 9.5 9.5-4.26 9.5-9.5-4.26-9.5-9.5-9.5z" />
        <path d="m75.64 39.63c1.2 0 2.36 0.16 3.39 0.48 1.49 0.46 2.7 1.54 3.45 2.9l4.52 8.18c0.16 0.29 0.38 0.55 0.64 0.77l8.79 7.07c1.04 0.84 1.2 2.37 0.36 3.4-0.48 0.59-1.18 0.9-1.89 0.9-0.53 0-1.07-0.18-1.52-0.54l-9.53-7.66c-0.18-0.15-0.32-0.32-0.45-0.5-0.07-0.09-0.14-0.19-0.2-0.29l-1.2-2.17v10.45c0 0.99 0.18 1.96 0.53 2.88l8.51 22.31c0.6 1.59-0.21 3.39-1.8 3.99-0.36 0.13-0.72 0.2-1.08 0.2-1.25 0-2.44-0.77-2.9-2l-8.5-22.27c-0.24-0.62-0.84-1.04-1.51-1.04-0.88 0-1.6 0.71-1.61 1.59l-0.12 7.39c-0.01 0.35-0.08 0.67-0.19 0.98-0.04 0.37-0.14 0.73-0.32 1.08l-6.44 12.59c-0.55 1.06-1.64 1.67-2.76 1.67-0.48 0-0.97-0.11-1.42-0.35-1.51-0.78-2.11-2.66-1.32-4.17l6.26-12.24 0.15-9.66c0-0.02-0.01-0.05-0.01-0.07v-1.65c-0.2 0.17-0.43 0.33-0.7 0.43-0.28 0.11-0.57 0.16-0.86 0.16-0.97 0-1.9-0.59-2.27-1.55l-3.74-9.44c-0.38-0.98-0.06-2.06 0.71-2.71l7.71-8.44c1.69-1.81 4.57-2.67 7.32-2.67m-8.16 19.77v-8.37c0-0.15-0.12-0.24-0.24-0.24-0.06 0-0.13 0.02-0.18 0.08l-1.73 1.89c-0.21 0.23-0.27 0.55-0.15 0.84l2.3 5.8m8.16-22.77c-3.85 0-7.4 1.36-9.51 3.64l-7.62 8.34c-1.63 1.5-2.19 3.85-1.4 5.92l3.76 9.47c0.61 1.59 1.98 2.79 3.6 3.25l-0.11 7.24-5.94 11.61c-0.74 1.42-0.88 3.08-0.39 4.63s1.56 2.82 3 3.57c0.86 0.45 1.83 0.68 2.8 0.68 2.29 0 4.37-1.26 5.42-3.28l6.45-12.61c0.28-0.54 0.47-1.13 0.58-1.76 0.17-0.55 0.25-1.08 0.26-1.62v-0.17l5.92 15.53c0.89 2.35 3.18 3.93 5.71 3.93 0.73 0 1.45-0.13 2.14-0.39 3.15-1.19 4.74-4.71 3.55-7.86l-8.52-22.33c-0.22-0.58-0.33-1.19-0.33-1.81v-2.71l6.51 5.23c0.95 0.77 2.16 1.2 3.4 1.2 1.65 0 3.19-0.73 4.22-2.01 1.88-2.32 1.52-5.74-0.81-7.62l-8.73-7.02-4.48-8.1c-1.17-2.11-3.01-3.64-5.19-4.32-1.32-0.42-2.8-0.63-4.29-0.63z" />
        <path d="m48.42 38.69c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5m0-3c-5.24 0-9.5 4.26-9.5 9.5s4.26 9.5 9.5 9.5 9.5-4.26 9.5-9.5-4.26-9.5-9.5-9.5z" />
        <path d="m48.58 52.49c1.5 0 3.02 0.29 4.5 0.86 1.7 0.65 4.06 5.01 5.13 6.54 0.19 0.27 0.49 0.42 0.81 0.42 0.07 0 0.14-0.01 0.2-0.02l5.8-1.18c0.17-0.04 0.35-0.05 0.52-0.05 0.91 0 1.78 0.47 2.2 1.3 0.74 1.49-0.16 3.17-1.67 3.48l-7.98 1.62c-0.14 0.03-0.28 0.04-0.42 0.04-0.09 0-0.19-0.01-0.28-0.01-0.08-0.01-0.16-0.01-0.24-0.02-0.02 0-0.04-0.01-0.06-0.01-0.57-0.11-1.1-0.41-1.47-0.91l-1.3-1.72v8.98c0.03 0.07 0.07 0.14 0.1 0.21l6.08 16.74c0.45 1.25-0.21 2.65-1.46 3.1-0.27 0.09-0.54 0.14-0.81 0.14-0.99 0-1.93-0.62-2.28-1.6l-5.13-14.14c-0.26-0.71-0.93-1.18-1.68-1.18-0.99 0-1.8 0.81-1.79 1.8l0.03 3.25c0.1 0.61-0.03 1.27-0.41 1.81l-6.47 9.02c-0.47 0.66-1.22 1.01-1.97 1.01-0.49 0-0.98-0.15-1.4-0.45-1.08-0.77-1.34-2.29-0.56-3.38l5.79-8.07c0.12-0.17 0.19-0.38 0.19-0.59l-0.07-7.07c0-0.19 0.02-0.37 0.06-0.55v-9.41c0-0.59-0.49-1-1-1-0.21 0-0.42 0.07-0.61 0.21l-1.27 0.99c-0.13 0.1-0.23 0.23-0.3 0.38l-3.02 6.67c-0.4 0.89-1.29 1.42-2.21 1.42-0.53 0-1.08-0.18-1.55-0.57-0.85-0.7-1.06-1.93-0.61-2.93l3.33-7.34s0-0.01 0.01-0.01c0.06-0.14 0.14-0.28 0.23-0.4l0.01-0.01c0.09-0.12 0.19-0.24 0.3-0.34 0.01 0 0.01-0.01 0.02-0.01 0.05-0.04 0.09-0.1 0.14-0.14 0 0 6.9-5.35 7.22-5.52 1.68-0.92 3.51-1.36 5.35-1.36m0-3c-2.37 0-4.65 0.57-6.78 1.68-0.29 0.15-0.56 0.29-7.66 5.81-0.16 0.12-0.28 0.24-0.38 0.34l-0.01 0.01c-0.25 0.23-0.47 0.48-0.66 0.75l-0.02 0.03-0.02 0.04c-0.13 0.19-0.27 0.4-0.38 0.63l-0.03 0.05-0.1 0.22-3.32 7.32c-1.03 2.28-0.44 4.95 1.44 6.49 0.98 0.8 2.21 1.25 3.46 1.25 2.13 0 4.07-1.25 4.95-3.18l0.47-1.03v1.69c-0.05 0.29-0.07 0.57-0.06 0.86l0.07 6.42-5.41 7.53c-0.84 1.18-1.18 2.62-0.94 4.05s1.02 2.68 2.19 3.52c0.92 0.66 2.01 1.01 3.15 1.01 1.75 0 3.4-0.85 4.42-2.27l6.47-9.01c0.22-0.31 0.41-0.64 0.56-0.98l3.16 8.71c0.77 2.14 2.82 3.58 5.1 3.58 0.62 0 1.24-0.11 1.83-0.32 2.81-1.01 4.28-4.12 3.27-6.94l-6-16.54v-2.71c0.11 0.01 0.23 0.01 0.35 0.01 0.35 0 0.69-0.03 1.02-0.1l7.98-1.62c1.66-0.34 3.05-1.41 3.79-2.94s0.73-3.28-0.03-4.82c-0.91-1.83-2.78-2.96-4.88-2.96-0.38 0-0.75 0.04-1.12 0.11l-4.46 0.91c-0.04-0.06-0.08-0.13-0.12-0.19-1.95-3.1-3.6-5.53-5.68-6.33-1.88-0.72-3.75-1.08-5.62-1.08z" />
      </g>
      <linearGradient
        id="d"
        x1={74.745}
        x2={74.745}
        y1={24.75}
        y2={93.642}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#424242" offset={0} />
        <stop stopColor="#212121" offset={1} />
      </linearGradient>
      <circle cx={74.74} cy={32.41} r={6.5} fill="url(#d)" />
      <linearGradient
        id="c"
        x1={78.544}
        x2={78.544}
        y1={24.75}
        y2={93.642}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#424242" offset={0} />
        <stop stopColor="#212121" offset={1} />
      </linearGradient>
      <path
        d="m96.44 59.02-8.79-7.07c-0.26-0.21-0.48-0.47-0.64-0.77l-4.52-8.17c-0.75-1.36-1.97-2.44-3.45-2.9-3.38-1.05-8.29-0.41-10.69 2.19l-7.71 8.44c-0.76 0.65-1.09 1.73-0.71 2.71l3.74 9.43c0.48 1.24 1.88 1.87 3.13 1.39 0.26-0.1 0.49-0.25 0.7-0.43v1.65c0 0.03 0.01 0.05 0.01 0.07l-0.15 9.66-6.26 12.24c-0.78 1.51-0.19 3.39 1.32 4.17s3.39 0.19 4.17-1.32l6.44-12.59c0.18-0.35 0.28-0.71 0.32-1.08 0.11-0.31 0.19-0.64 0.19-0.98l0.12-7.39c0.01-0.88 0.73-1.59 1.61-1.59 0.67 0 1.27 0.41 1.51 1.04l8.48 22.28c0.6 1.59 2.4 2.41 3.99 1.8 1.59-0.6 2.41-2.4 1.8-3.99l-8.51-22.31c-0.35-0.92-0.53-1.9-0.53-2.88v-10.46l1.2 2.17c0.06 0.11 0.13 0.2 0.2 0.29 0.13 0.18 0.27 0.35 0.45 0.5l9.53 7.66c1.04 0.84 2.57 0.67 3.4-0.36 0.85-1.03 0.68-2.56-0.35-3.4zm-31.11-6.26 1.73-1.89c0.15-0.16 0.42-0.06 0.42 0.16v8.37l-2.3-5.8c-0.11-0.28-0.05-0.61 0.15-0.84z"
        fill="url(#c)"
      />
      <linearGradient
        id="b"
        x1={48.419}
        x2={48.419}
        y1={24.75}
        y2={93.642}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#424242" offset={0} />
        <stop stopColor="#212121" offset={1} />
      </linearGradient>
      <circle cx={48.42} cy={45.19} r={6.5} fill="url(#b)" />
      <linearGradient
        id="a"
        x1={49.858}
        x2={49.858}
        y1={24.75}
        y2={93.642}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#424242" offset={0} />
        <stop stopColor="#212121" offset={1} />
      </linearGradient>
      <path
        d="m67.74 60.37c-0.49-0.99-1.64-1.47-2.72-1.25l-5.8 1.18c-0.39 0.08-0.78-0.07-1.01-0.4-1.07-1.53-3.43-5.89-5.13-6.54-3.31-1.27-6.77-1.15-9.88 0.48-0.32 0.17-7.22 5.52-7.22 5.52-0.05 0.04-0.1 0.09-0.14 0.14-0.01 0-0.01 0.01-0.02 0.01-0.11 0.11-0.21 0.22-0.3 0.34l-0.01 0.01c-0.09 0.13-0.17 0.26-0.23 0.4 0 0 0 0.01-0.01 0.01l-3.33 7.34c-0.46 1-0.24 2.23 0.61 2.93 1.29 1.06 3.13 0.55 3.77-0.86l3.02-6.67c0.07-0.15 0.17-0.28 0.3-0.38l1.27-0.99c0.66-0.51 1.61-0.04 1.61 0.79v9.41c-0.04 0.18-0.06 0.36-0.06 0.55l0.07 7.07c0 0.21-0.06 0.42-0.19 0.59l-5.79 8.07c-0.77 1.08-0.52 2.6 0.56 3.38s2.6 0.52 3.38-0.56l6.47-9.02c0.39-0.54 0.52-1.2 0.41-1.81l-0.03-3.25c-0.01-0.99 0.79-1.8 1.79-1.8 0.75 0 1.42 0.47 1.68 1.18l5.13 14.14c0.45 1.25 1.84 1.91 3.1 1.46 1.25-0.45 1.91-1.84 1.46-3.1l-6.08-16.74c-0.03-0.08-0.07-0.14-0.1-0.21v-8.98l1.3 1.72c0.37 0.5 0.9 0.8 1.47 0.91 0.02 0 0.04 0.01 0.06 0.01 0.08 0.01 0.16 0.02 0.24 0.02 0.23 0.02 0.47 0.02 0.7-0.03l7.98-1.62c1.51-0.28 2.42-1.96 1.67-3.45z"
        fill="url(#a)"
      />
    </svg>
  );
}

export default ChildrenCrossing;
