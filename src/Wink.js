import React from "react";

function Wink(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <symbol viewBox="-64.5 -64.5 129 129">
        <g fill="none" stroke="#4285F4" strokeMiterlimit={10}>
          <rect x={-64} y={-64} width={128} height={128} />
          <path d="M36.95,37.82C27.32,46.32,14.2,51,0,51 c-14.27,0-27.39-4.62-36.96-13.01C-47.45,28.79-53,15.65-53,0c0-15.58,5.55-28.69,16.04-37.92C-27.36-46.35-14.24-51,0-51 c14.17,0,27.29,4.71,36.95,13.25C47.45-28.45,53-15.4,53,0C53,15.47,47.45,28.55,36.95,37.82z" />
          <path d="m0 55c-29.59 0-57-19.01-57-55 0-35.8 27.41-55 57-55s57 19.69 57 55c0 35.51-27.41 55-57 55z" />
          <path d="M0-43c-12.29,0-23.54,3.94-31.68,11.09 C-40.39-24.25-45-13.21-45,0c0,29.7,22.6,43,45,43c21.67,0,45-13.46,45-43S21.67-43,0-43L0-43z" />
          <line x1={-0.01} x2={-0.01} y1={51} y2={-51} />
          <line x1={-16} x2={-16} y1={48.95} y2={-48.93} />
          <line x1={15.99} x2={15.99} y1={48.91} y2={-48.93} />
          <line x1={53} x2={-53} y1={0.08} y2={0.08} />
        </g>
      </symbol>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={19.717}
        y2={107.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEE133" offset={0.5} />
        <stop stopColor="#FEDE32" offset={0.6118} />
        <stop stopColor="#FCD32F" offset={0.7076} />
        <stop stopColor="#FAC12B" offset={0.7975} />
        <stop stopColor="#F7A924" offset={0.8834} />
        <stop stopColor="#F6A323" offset={0.9} />
      </linearGradient>
      <path
        d="M64,119.89C36.07,119.89,6,102.4,6,64S36.07,8.11,64,8.11c15.48,0,29.81,5.12,40.36,14.43 C115.9,32.72,122,47.06,122,64c0,16.86-6.1,31.17-17.64,41.39C93.78,114.74,79.45,119.89,64,119.89z"
        fill="url(#a)"
      />
      <path
        d="m64 10.11c14.99 0 28.86 4.95 39.03 13.93 11.1 9.79 16.97 23.61 16.97 39.96 0 16.27-5.87 30.07-16.97 39.89-10.21 9.03-24.07 14-39.03 14-15.04 0-28.9-4.91-39.04-13.82-11.1-9.75-16.96-23.61-16.96-40.07 0-16.54 5.86-30.42 16.96-40.15 10.11-8.86 23.97-13.74 39.04-13.74m0-4c-31.15 0-60 20-60 57.89 0 37.68 28.85 57.89 60 57.89s60-20.73 60-57.89c0-37.37-28.85-57.89-60-57.89z"
        fill="#EB8F00"
      />
      <g fill="#242424">
        <path d="m72.66 57.5s0.07-0.06 0.2-0.17c0.06-0.06 0.15-0.12 0.24-0.2 0.13-0.1 0.31-0.21 0.5-0.34 0.39-0.25 0.77-0.49 1.27-0.73 0.49-0.25 1.05-0.49 1.67-0.7 1.24-0.45 2.71-0.76 4.28-0.91 1.57-0.16 3.24-0.08 4.89 0.12 0.5 0.09 0.69 0.11 1.18 0.21 0.44 0.09 0.86 0.18 1.25 0.28 0.8 0.19 1.56 0.46 2.3 0.74 1.47 0.57 2.8 1.28 3.87 2.05 1.08 0.75 1.89 1.55 2.42 2.17 0.27 0.3 0.46 0.57 0.59 0.75s0.2 0.28 0.2 0.28c0.88 1.23 0.59 2.94-0.64 3.81-0.98 0.7-2.27 0.66-3.2-0.02l-0.28-0.21s-0.2-0.15-0.6-0.39c-0.39-0.24-0.98-0.58-1.76-0.94-0.77-0.36-1.74-0.71-2.82-1.03-0.54-0.16-1.11-0.29-1.69-0.42-0.3-0.07-0.57-0.12-0.84-0.17-0.22-0.05-0.74-0.11-0.95-0.15-1.21-0.18-2.42-0.25-3.55-0.25-1.12 0.01-2.15 0.09-2.99 0.22-0.42 0.07-0.8 0.13-1.13 0.21-0.32 0.07-0.63 0.16-0.8 0.2-0.09 0.02-0.17 0.04-0.25 0.05-0.12 0.05-0.21 0.09-0.29 0.12-0.16 0.06-0.24 0.1-0.24 0.1-1.42 0.57-3.03-0.11-3.6-1.53-0.46-1.14-0.11-2.39 0.77-3.15z" />
        <path d="m71.97 57.82s0.05-0.08 0.13-0.23c0.07-0.13 0.24-0.41 0.5-0.76 0.46-0.64 1.12-1.46 2-2.33 0.87-0.88 1.93-1.81 3.13-2.7 0.6-0.44 1.22-0.9 1.88-1.31 0.67-0.43 1.3-0.81 2.04-1.25 0.62-0.33 1.36-0.73 2.06-1.08 0.69-0.36 1.41-0.64 2.09-0.94 1.38-0.57 2.73-1 3.92-1.29 1.19-0.3 2.25-0.45 3.02-0.51s1.25-0.04 1.25-0.04c1.52 0.06 2.71 1.34 2.65 2.86-0.04 1.15-0.78 2.11-1.8 2.48l-0.22 0.08s-0.28 0.1-0.76 0.28c-0.5 0.19-1.23 0.48-2.14 0.88-0.9 0.41-1.97 0.91-3.1 1.49-0.57 0.3-1.15 0.61-1.75 0.92-0.59 0.31-1.15 0.62-1.82 1.01-0.55 0.3-1.18 0.67-1.75 1.01-0.57 0.35-1.14 0.69-1.69 1.03-1.08 0.68-2.06 1.34-2.87 1.9-0.81 0.57-1.44 1.06-1.85 1.38-0.17 0.13-0.33 0.24-0.47 0.38-0.13 0.12-0.2 0.18-0.2 0.18-1.13 1.03-2.88 0.94-3.91-0.19-0.81-0.93-0.91-2.24-0.34-3.25z" />
      </g>
      <path
        d="m29.84 43.8c-0.89 0-1.7-0.41-2.18-1.11-0.48-0.69-0.56-1.56-0.24-2.44 1.94-5.01 5.94-9.21 10.99-11.54 1.88-0.87 3.85-1.45 5.86-1.72 0.15-0.02 0.27-0.02 0.4-0.02 1.31 0 2.32 0.85 2.52 2.11 0.18 1.15-0.41 2.56-1.89 3.04l-0.38-0.71 0.26 0.75c-5.33 1.84-10.08 5.6-13.03 10.32-0.5 0.83-1.35 1.32-2.31 1.32z"
        fill="#EB8F00"
        stroke="#EB8F00"
        strokeMiterlimit={10}
      />
      <path
        d="m64.25 94.44c-12.74 0-21.82-6.61-24.55-10.77-1.06-1.61-1.26-3.35-0.55-4.67 0.53-0.99 1.51-1.56 2.67-1.56 0.39 0 0.79 0.07 1.2 0.19 6.42 2.01 13.78 3.07 21.28 3.07 7.46 0 14.79-1.06 21.19-3.07 0.41-0.13 0.81-0.19 1.2-0.19 1.16 0 2.14 0.57 2.67 1.56 0.71 1.31 0.5 3.06-0.55 4.67-2.74 4.16-11.82 10.77-24.56 10.77z"
        fill="#242424"
      />
      <path
        d="m44.67 45.94c-4.19 0-8 3.54-8 9.42s3.81 9.42 8 9.42 8-3.54 8-9.42-3.81-9.42-8-9.42z"
        fill="#242424"
      />
    </svg>
  );
}

export default Wink;
