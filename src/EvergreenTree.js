import React from "react";

function EvergreenTree(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="e"
        x1={64}
        x2={64}
        y1={100.5}
        y2={124.01}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8D6E63" offset={0} />
        <stop stopColor="#5D4037" offset={0.9977} />
      </linearGradient>
      <path
        d="m67.06 124h-6.11c-3.28 0-5.94-2.66-5.94-5.94v-20.24c0-3.28 2.66-5.94 5.94-5.94h6.11c3.28 0 5.94 2.66 5.94 5.94v20.24c0 3.28-2.66 5.94-5.94 5.94z"
        fill="url(#e)"
      />
      <g opacity={0.2}>
        <path
          d="m67.06 95.28c1.4 0 2.54 1.14 2.54 2.54v20.24c0 1.4-1.14 2.54-2.54 2.54h-6.11c-1.4 0-2.54-1.14-2.54-2.54v-20.24c0-1.4 1.14-2.54 2.54-2.54h6.11m0-3.4h-6.11c-3.28 0-5.94 2.66-5.94 5.94v20.24c0 3.28 2.66 5.94 5.94 5.94h6.11c3.28 0 5.94-2.66 5.94-5.94v-20.24c0-3.28-2.66-5.94-5.94-5.94z"
          fill="#424242"
        />
      </g>
      <linearGradient
        id="d"
        x1={64.094}
        x2={64.094}
        y1={105.7}
        y2={8.9974}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#558B2F" offset={0.3954} />
        <stop stopColor="#588E31" offset={0.4168} />
        <stop stopColor="#89BB57" offset={0.8069} />
        <stop stopColor="#9CCC65" offset={1} />
      </linearGradient>
      <path
        d="m114.47 100.14c-33.25 7.14-67.65 6.82-100.74-0.83-3.01-0.75-4.07-3.82-1.75-5.42 15.32-10.87 27.73-25 36.59-37.71 0.57-0.8 1.47-1.29 2.44-1.3 8.68-0.09 17.35-0.18 26.02-0.28 0.96-0.01 1.87 0.46 2.44 1.27 8.81 12.72 21.26 27.19 36.73 38.7 2.33 1.71 1.29 4.86-1.73 5.57z"
        fill="url(#d)"
      />
      <g opacity={0.2}>
        <path
          d="m76.98 57.66c7.52 10.86 20.08 26.46 37.3 39.3-0.1 0.07-0.26 0.15-0.49 0.21-15.66 3.36-31.74 5.06-47.79 5.06-17.31 0-34.66-1.98-51.56-5.88-0.18-0.05-0.32-0.11-0.43-0.17 17.07-12.18 29.56-27.51 37.02-38.25l13.39-0.14 12.56-0.13m0.07-3.05h-0.03c-8.66 0.09-17.34 0.18-26.02 0.28-0.96 0.01-1.87 0.49-2.44 1.3-8.86 12.71-21.26 26.83-36.58 37.7-2.32 1.6-1.26 4.67 1.75 5.42 17.19 3.97 34.73 5.97 52.28 5.97 16.24 0 32.49-1.71 48.46-5.14 3.02-0.7 4.06-3.86 1.72-5.56-15.48-11.52-27.93-25.98-36.73-38.7-0.57-0.8-1.46-1.27-2.41-1.27z"
          fill="#424242"
        />
      </g>
      <linearGradient
        id="c"
        x1={64.073}
        x2={64.073}
        y1={107.56}
        y2={10.299}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#558B2F" offset={0.1327} />
        <stop stopColor="#598E32" offset={0.3523} />
        <stop stopColor="#64983A" offset={0.5514} />
        <stop stopColor="#76A948" offset={0.7427} />
        <stop stopColor="#90C15C" offset={0.928} />
        <stop stopColor="#9CCC65" offset={1} />
      </linearGradient>
      <path
        d="m105.8 78.83c-27.55 5.84-56.02 5.59-83.45-0.66-3.04-0.76-4.03-3.89-1.6-5.48 12.38-8.44 22.37-19.31 29.8-29.13 0.58-0.75 1.45-1.2 2.37-1.21 7.4-0.07 14.79-0.15 22.17-0.22 0.93-0.01 1.8 0.43 2.37 1.18 7.38 9.83 17.4 20.96 29.9 29.89 2.46 1.69 1.5 4.91-1.56 5.63z"
        fill="url(#c)"
      />
      <g opacity={0.2}>
        <path
          d="m75.06 45.18c9.33 12.42 19.6 22.68 30.52 30.49-0.1 0.06-0.24 0.14-0.45 0.19-12.96 2.74-26.25 4.14-39.52 4.14-14.28 0-28.59-1.61-42.54-4.78-0.16-0.04-0.29-0.1-0.39-0.15 10.85-7.43 21.04-17.41 30.27-29.66l11.36-0.11 10.75-0.12m0.07-3.05h-0.03c-7.38 0.07-14.77 0.15-22.17 0.22-0.93 0.01-1.8 0.46-2.37 1.21-7.42 9.82-17.42 20.69-29.8 29.13-2.43 1.59-1.45 4.72 1.6 5.48 14.23 3.24 28.74 4.87 43.26 4.87 13.46 0 26.93-1.4 40.19-4.21 3.06-0.72 4.02-3.94 1.56-5.63-12.49-8.93-22.52-20.06-29.9-29.89-0.57-0.74-1.43-1.18-2.34-1.18z"
          fill="#424242"
        />
      </g>
      <linearGradient
        id="b"
        x1={64.034}
        x2={64.034}
        y1={113.53}
        y2={17.134}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#558B2F" offset={0.1238} />
        <stop stopColor="#5D9235" offset={0.31} />
        <stop stopColor="#73A746" offset={0.601} />
        <stop stopColor="#97C861" offset={0.9586} />
        <stop stopColor="#9CCC65" offset={1} />
      </linearGradient>
      <path
        d="m93.91 56.98c-19.74 4.02-40.1 3.83-59.75-0.5-3.1-0.78-4.1-3.89-1.62-5.49 9.39-6.41 16.73-14.49 22.35-21.89 0.58-0.75 1.45-1.2 2.37-1.21 4.42-0.05 8.83-0.1 13.24-0.14 0.92-0.01 1.79 0.42 2.36 1.16 5.64 7.39 13.05 15.66 22.61 22.43 2.53 1.69 1.57 4.91-1.56 5.64z"
        fill="url(#b)"
      />
      <g opacity={0.2}>
        <path
          d="m70.48 30.78c7.37 9.64 14.97 17.17 23.24 23.03-0.1 0.06-0.25 0.14-0.46 0.19-9.19 1.87-18.61 2.82-28 2.82-10.19 0-20.41-1.11-30.38-3.31-0.17-0.04-0.3-0.1-0.4-0.15 8.21-5.64 15.69-12.98 22.83-22.43l13.17-0.15m0.06-3.05h-0.03c-4.41 0.05-8.83 0.1-13.24 0.14-0.93 0.01-1.8 0.46-2.37 1.21-5.62 7.4-12.96 15.48-22.35 21.89-2.48 1.61-1.48 4.72 1.62 5.49 10.23 2.26 20.66 3.39 31.09 3.39 9.6 0 19.2-0.96 28.66-2.89 3.13-0.72 4.09-3.94 1.57-5.65-9.56-6.77-16.97-15.05-22.61-22.43-0.58-0.72-1.43-1.15-2.34-1.15z"
          fill="#424242"
        />
      </g>
      <linearGradient
        id="a"
        x1={63.985}
        x2={63.985}
        y1={111.5}
        y2={18.365}
        gradientTransform="matrix(1.0407 -.0108 -.0108 1.0532 -2.4286 -1.7213)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#689F38" offset={0.0048071} />
        <stop stopColor="#9CCC65" offset={0.7896} />
      </linearGradient>
      <path
        d="m66.59 6.05c4.8 6.96 10.86 14.7 19.78 21.15 2.63 1.8 1.41 5.14-2.07 5.89-13.54 2.56-27.43 2.58-40.98-0.14-3.47-0.8-4.65-4.01-1.99-5.72 9.05-6.15 15.26-13.9 20.2-21.06 1.27-1.81 3.82-1.89 5.06-0.12z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m64.1 8.06c4.51 6.51 10.87 14.8 20.26 21.63-0.15 0.1-0.38 0.21-0.71 0.28-6.48 1.22-13.08 1.84-19.6 1.84-6.75 0-13.5-0.67-20.07-1.98-0.22-0.05-0.4-0.12-0.55-0.19 9.7-6.66 16.14-15.02 20.67-21.58m0.05-3.29c-0.98 0-1.97 0.47-2.62 1.41-4.94 7.15-11.15 14.91-20.2 21.06-2.65 1.7-1.48 4.92 1.99 5.72 6.85 1.37 13.8 2.04 20.74 2.04 6.78 0 13.55-0.64 20.24-1.91 3.48-0.75 4.69-4.09 2.07-5.89-8.92-6.45-14.98-14.19-19.78-21.15-0.61-0.86-1.52-1.28-2.44-1.28z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default EvergreenTree;
