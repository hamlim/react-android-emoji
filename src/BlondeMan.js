import React from "react";

function BlondeMan(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <defs>
        <rect id="h" x={4} y={4} width={120} height={120} />
      </defs>
      <clipPath id="a">
        <use xlinkHref="#h" />
      </clipPath>
      <g clipPath="url(#a)">
        <linearGradient
          id="g"
          x1={64}
          x2={64}
          y1={96.18}
          y2={129.4}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00BFA5" offset={0} />
          <stop stopColor="#00B29A" offset={0.7047} />
          <stop stopColor="#00AB94" offset={1} />
        </linearGradient>
        <path
          d="m14.37 129.4v-9.44c0-7.61 5.08-13.64 15.1-17.92 8.83-3.77 21.09-5.85 34.54-5.86h0.13c24.6 0 49.5 8.17 49.5 23.78v9.44h-99.27z"
          fill="url(#g)"
        />
        <path
          d="m64.13 97.68c12.78 0 25.13 2.22 33.89 6.1 6.44 2.85 14.12 7.97 14.12 16.18v7.94h-96.27v-7.94c0-15.35 24.18-22.25 48.14-22.28h0.12m0-3h-0.13c-25.49 0.03-51.13 7.5-51.13 25.28v10.94h102.27v-10.94c-0.01-16.76-25.41-25.28-51.01-25.28z"
          fill="#009984"
        />
      </g>
      <g clipPath="url(#a)">
        <path
          d="m63.17 107.23c-4 0-7.26-3.22-7.26-7.17v-8.98h16.16v8.98c0 3.96-3.26 7.17-7.26 7.17h-1.64z"
          fill="#E49800"
        />
        <path
          d="m71.08 92.08v7.98c0 3.4-2.81 6.17-6.26 6.17h-1.65c-3.45 0-6.26-2.77-6.26-6.17v-7.98h14.17m2-2h-18.16v9.98c0 4.51 3.7 8.17 8.26 8.17h1.65c4.56 0 8.26-3.66 8.26-8.17v-9.98h-0.01z"
          fill="#C78500"
        />
      </g>
      <g clipPath="url(#a)">
        <defs>
          <rect id="f" x={18.35} y={4} width={91.3} height={91.3} />
        </defs>
        <clipPath id="e">
          <use xlinkHref="#f" />
        </clipPath>
        <g clipPath="url(#e)">
          <path
            d="m36.67 72.26c-5.36 0-9.71-4.67-9.71-10.41s4.36-10.41 9.71-10.41h54.65c5.36 0 9.71 4.67 9.71 10.41s-4.36 10.41-9.71 10.41h-54.65z"
            fill="#E59600"
          />
          <path
            d="m91.33 52.43c4.8 0 8.71 4.22 8.71 9.41s-3.91 9.41-8.71 9.41h-54.66c-4.8 0-8.71-4.22-8.71-9.41s3.91-9.41 8.71-9.41h54.66m0-2h-54.66c-5.89 0-10.71 5.14-10.71 11.41 0 6.28 4.82 11.41 10.71 11.41h54.65c5.89 0 10.71-5.14 10.71-11.41 0.01-6.27-4.81-11.41-10.7-11.41z"
            fill="#CC8600"
          />
          <linearGradient
            id="d"
            x1={64}
            x2={64}
            y1={93.591}
            y2={11.825}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFB300" offset={0} />
            <stop stopColor="#FFB809" offset={0.102} />
            <stop stopColor="#FFC21A" offset={0.3707} />
            <stop stopColor="#FFC825" offset={0.6592} />
            <stop stopColor="#FFCA28" offset={1} />
          </linearGradient>
          <path
            d="m64 94.27c-15.66 0-32.52-12.14-32.52-38.81 0-12.38 3.56-23.79 10.02-32.13 6.04-7.8 14.25-12.27 22.5-12.27s16.45 4.47 22.5 12.27c6.46 8.33 10.02 19.75 10.02 32.13 0 12.09-3.51 22.19-10.14 29.21-5.86 6.19-13.81 9.6-22.38 9.6z"
            fill="url(#d)"
          />
          <path
            d="m64 12.07c7.94 0 15.85 4.33 21.71 11.88 6.33 8.16 9.81 19.35 9.81 31.52 0 11.83-3.41 21.7-9.87 28.52-5.67 5.99-13.36 9.29-21.65 9.29s-15.98-3.3-21.65-9.29c-6.46-6.82-9.87-16.69-9.87-28.52 0-12.16 3.49-23.35 9.81-31.52 5.86-7.55 13.77-11.88 21.71-11.88m0-2c-17.4 0-33.52 18.61-33.52 45.39 0 26.64 16.61 39.81 33.52 39.81s33.52-13.17 33.52-39.81c0-26.78-16.12-45.39-33.52-45.39z"
            fill="#EDA600"
          />
          <g fill="#FFEB3B">
            <path d="m40.18 50.73s0.13-0.19 0.38-0.51c0.07-0.08 0.12-0.16 0.22-0.26 0.11-0.11 0.23-0.22 0.37-0.34s0.28-0.24 0.43-0.38c0.15-0.13 0.31-0.23 0.48-0.35 0.17-0.11 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.47-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.07 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.33 0.22 0.47 0.34s0.27 0.24 0.4 0.35c0.12 0.11 0.24 0.21 0.34 0.31s0.18 0.21 0.26 0.29c0.31 0.36 0.46 0.57 0.46 0.57 0.51 0.7 0.35 1.69-0.36 2.19-0.43 0.31-0.96 0.37-1.43 0.21l-0.29-0.1s-0.19-0.07-0.49-0.2c-0.08-0.03-0.15-0.07-0.25-0.11-0.1-0.03-0.19-0.07-0.3-0.11-0.21-0.08-0.44-0.17-0.7-0.25-0.13-0.04-0.26-0.09-0.4-0.13-0.14-0.03-0.28-0.07-0.43-0.11-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.07-0.43 0.11s-0.27 0.09-0.4 0.13-0.25 0.08-0.37 0.11c-0.1 0.04-0.2 0.07-0.29 0.1s-0.18 0.06-0.27 0.09c-0.1 0.04-0.2 0.1-0.29 0.14-0.36 0.18-0.57 0.27-0.57 0.27-0.83 0.34-1.77-0.05-2.11-0.87-0.24-0.48-0.16-1.06 0.13-1.49z" />
            <path d="m85.86 53.13s-0.22-0.09-0.57-0.27c-0.09-0.04-0.19-0.1-0.29-0.14-0.09-0.02-0.18-0.06-0.27-0.09s-0.19-0.07-0.29-0.1c-0.12-0.04-0.24-0.07-0.37-0.11s-0.26-0.09-0.4-0.13-0.28-0.07-0.43-0.11c-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.08-0.43 0.11-0.14 0.04-0.27 0.09-0.4 0.13-0.26 0.07-0.49 0.16-0.7 0.25-0.11 0.04-0.2 0.08-0.3 0.11-0.09 0.04-0.17 0.08-0.25 0.11-0.3 0.13-0.49 0.2-0.49 0.2l-0.28 0.1c-0.82 0.29-1.72-0.15-2-0.97-0.17-0.5-0.08-1.03 0.21-1.44 0 0 0.16-0.22 0.46-0.57 0.08-0.09 0.16-0.19 0.26-0.29s0.22-0.2 0.34-0.31 0.26-0.23 0.4-0.35 0.31-0.22 0.47-0.34c0.17-0.12 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.46-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.06 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.32 0.22 0.48 0.35 0.15 0.13 0.3 0.26 0.43 0.38s0.26 0.23 0.37 0.34c0.09 0.1 0.15 0.18 0.22 0.26 0.25 0.31 0.38 0.51 0.38 0.51 0.5 0.74 0.31 1.74-0.43 2.25-0.5 0.28-1.08 0.32-1.56 0.12z" />
          </g>
          <g fill="#404040">
            <ellipse cx={47.37} cy={58.81} rx={4.93} ry={5.1} />
            <ellipse cx={80.63} cy={58.81} rx={4.93} ry={5.1} />
          </g>
          <radialGradient
            id="c"
            cx={64.243}
            cy={4.2736}
            r={48.85}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFEE58" offset={0} />
            <stop stopColor="#FDD835" offset={1} />
          </radialGradient>
          <path
            d="m64 4.03h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.12 52.14-36.12 52.14s5.1 8.99 5.1 8.81c-0.16-7.25 2.74-20.09 4.8-25.55 1.04-2.76 3.9-4.36 6.79-3.83 4.45 0.81 11.55 1.81 19.37 1.81h0.08 0.08c7.83 0 14.92-1 19.37-1.81 2.9-0.53 5.76 1.08 6.79 3.83 2.06 5.47 4.96 18.3 4.8 25.55 0 0.18 5.1-8.81 5.1-8.81s9.32-51.9-36.12-52.14z"
            fill="url(#c)"
          />
          <path
            d="m67.86 68.06c-0.11-0.04-0.21-0.07-0.32-0.08h-7.07c-0.11 0.01-0.22 0.04-0.32 0.08-0.64 0.26-0.99 0.92-0.69 1.63s1.71 2.69 4.55 2.69 4.25-1.99 4.55-2.69c0.29-0.71-0.06-1.37-0.7-1.63z"
            fill="#E59600"
          />
          <path
            d="m72.21 76.14c-3.19 1.89-13.63 1.89-16.81 0-1.83-1.09-3.7 0.58-2.94 2.24 0.75 1.63 6.45 5.42 11.37 5.42s10.55-3.79 11.3-5.42c0.75-1.66-1.09-3.33-2.92-2.24z"
            fill="#795548"
          />
          <defs>
            <path
              id="b"
              d="m64 4.03h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.12 52.14-36.12 52.14s5.1 8.99 5.1 8.81c-0.03-1.41 0.46-6.89 0.46-6.89l-2.68-2.92s3.89-25.44 6.79-24.91c4.45 0.81 26.54 2 26.57 2 7.83 0 14.92-0.36 19.37-1.17 2.9-0.53 9.64 1.7 10.68 4.45 1.33 3.54 3.13 19.71 3.13 19.71l-2.68 2.83s0.49 5.51 0.46 6.89c0 0.18 5.1-8.81 5.1-8.81s9.3-51.89-36.14-52.13z"
            />
          </defs>
          <clipPath id="i">
            <use xlinkHref="#b" />
          </clipPath>
          <g clipPath="url(#i)">
            <path
              d="m63.95 7.03h0.04c11.32 0.06 19.93 3.54 25.6 10.35 10.81 12.96 8.18 34.33 7.67 37.79-0.02 0.04-0.04 0.08-0.07 0.12-1.02-6.43-2.76-13.23-4.15-16.91-1.32-3.52-4.74-5.88-8.5-5.88-0.55 0-1.1 0.05-1.63 0.15-4.43 0.8-11.29 1.76-18.82 1.76l-0.07 3 0.01-3h-0.02-0.11c-7.55 0-14.41-0.96-18.84-1.76-0.54-0.1-1.09-0.15-1.63-0.15-3.76 0-7.18 2.36-8.5 5.88-1.38 3.68-3.13 10.48-4.15 16.91-0.02-0.04-0.04-0.08-0.07-0.12-0.24-1.6-0.93-6.98-0.55-13.56 0.41-7.04 2.17-16.96 8.22-24.22 5.67-6.81 14.28-10.3 25.57-10.36m0.05-3h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.12 52.14-36.12 52.14s5 8.81 5.1 8.81c-0.16-7.25 2.74-20.09 4.8-25.55 0.91-2.41 3.2-3.93 5.7-3.93 0.36 0 0.73 0.03 1.1 0.1 4.45 0.81 11.55 1.81 19.37 1.81h0.08 0.08c7.83 0 14.92-1 19.37-1.81 0.37-0.07 0.74-0.1 1.1-0.1 2.5 0 4.79 1.53 5.7 3.93 2.06 5.47 4.96 18.3 4.8 25.55 0.09 0 5.1-8.81 5.1-8.81s9.3-51.9-36.14-52.14z"
              fill="#FBB914"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default BlondeMan;
