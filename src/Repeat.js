import React from "react";

function Repeat(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={4.25}
        y2={123.91}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFAB40" offset={0} />
        <stop stopColor="#FF6D00" offset={1} />
      </linearGradient>
      <path
        d="m116 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z"
          fill="#424242"
        />
      </g>
      <g fill="#424242" opacity={0.2}>
        <path d="m84.02 12c0.9 0 1.82 0.31 2.61 1l24 23.99c1.82 1.59 1.82 4.43 0 6.02l-24 23.99c-0.79 0.69-1.71 1-2.61 1-2.06 0-4.02-1.62-4.02-4.01v-13.99c0-1.1-0.9-2-2-2h-34c-4.82 0-11.55 1.51-12 12l-14.78 13.32c-0.01-0.01-0.02-0.02-0.02-0.03-0.78-2.94-1.2-6.06-1.2-9.29 0-17.67 12.54-32 28-32h34c1.1 0 2-0.9 2-2v-13.99c0-2.39 1.96-4.01 4.02-4.01m0-3c-3.87 0-7.02 3.14-7.02 7.01v12.99h-33c-17.09 0-31 15.7-31 35 0 3.42 0.44 6.81 1.3 10.06l0.22 0.84 0.28 0.26 1.56 2.97 2.87-2.59 14.78-13.32 0.93-0.84 0.06-1.25c0.27-6.4 2.97-9.13 9-9.13h33v12.99c0 3.86 3.15 7.01 7.02 7.01 1.68 0 3.3-0.62 4.59-1.74l0.08-0.07 0.07-0.07 23.94-23.93c1.47-1.33 2.31-3.21 2.31-5.19s-0.84-3.87-2.31-5.19l-23.94-23.93-0.14-0.14c-1.29-1.12-2.92-1.74-4.6-1.74z" />
        <path d="m110.78 54.68c0.01 0.01 0.02 0.02 0.02 0.03 0.78 2.94 1.2 6.06 1.2 9.29 0 17.67-12.54 32-28 32h-34c-1.1 0-2 0.9-2 2v13.99c0 2.39-1.96 4.01-4.02 4.01-0.9 0-1.82-0.31-2.61-1l-24-23.99c-1.82-1.59-1.82-4.43 0-6.02l24-23.99c0.79-0.69 1.71-1 2.61-1 2.06 0 4.02 1.62 4.02 4.01v13.99c0 1.1 0.9 2 2 2h34c4.82 0 11.55-1.51 12-12l14.78-13.32m0.86-4.82-2.87 2.59-14.78 13.32-0.93 0.84-0.06 1.26c-0.27 6.4-2.97 9.13-9 9.13h-33v-12.99c0-3.86-3.15-7.01-7.02-7.01-1.68 0-3.3 0.62-4.59 1.74l-0.08 0.07-24 24c-1.47 1.32-2.31 3.21-2.31 5.19s0.84 3.87 2.31 5.19l23.94 23.93 0.14 0.14c1.28 1.12 2.91 1.74 4.59 1.74 3.87 0 7.02-3.14 7.02-7.01v-12.99h33c17.09 0 31-15.7 31-35 0-3.42-0.44-6.81-1.3-10.06l-0.22-0.84-0.28-0.26-1.56-2.98z" />
      </g>
      <g fill="#FAFAFA">
        <path d="M86.63,67C84.05,69.27,80,67.43,80,63.99V50c0-1.1-0.9-2-2-2H44c-4.82,0-11.55,1.51-12,12 L17.22,73.32c-0.01-0.01-0.02-0.02-0.02-0.03C16.42,70.35,16,67.23,16,64c0-17.67,12.54-32,28-32h34c1.1,0,2-0.9,2-2V16.01 c0-3.44,4.05-5.27,6.63-3.01l24,23.99c1.82,1.59,1.82,4.43,0,6.02L86.63,67z" />
        <path d="M41.37,61c2.59-2.26,6.63-0.43,6.63,3.01V78c0,1.1,0.9,2,2,2h34c4.82,0,11.55-1.51,12-12 l14.78-13.32c0.01,0.01,0.02,0.02,0.02,0.03c0.78,2.94,1.2,6.06,1.2,9.29c0,17.67-12.54,32-28,32H50c-1.1,0-2,0.9-2,2v13.99 c0,3.44-4.05,5.27-6.63,3.01l-24-23.99c-1.82-1.59-1.82-4.43,0-6.02L41.37,61z" />
      </g>
    </svg>
  );
}

export default Repeat;
