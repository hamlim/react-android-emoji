import React from "react";

function Bike(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <path
        d="m68.32 44.52c-2.69-0.71-12.25-3.21-12.93-3.39-0.03-0.01-0.05-0.01-0.08-0.02-4.51-0.69-6.42 0.52-7.12 4.09l-1.08 5c-0.26 1.51 0.22 2.96 1.09 4.16l-24.82 46.69c-0.52 0.98-0.15 2.19 0.83 2.7 0.3 0.16 0.62 0.23 0.94 0.23 0.72 0 1.41-0.38 1.77-1.06l25.17-47.35c0.52-0.98 0.15-2.19-0.83-2.7-0.14-0.07-0.28-0.12-0.42-0.16-1.07-2.1 0.02-5.68 0.02-5.68 0.5-2.46 1.65-2.81 4.21-2.5l12.44 2.93c0.36 0.09 0.72-0.13 0.83-0.48l0.48-1.59c0.11-0.37-0.11-0.76-0.5-0.87z"
        fill="#E0E0E0"
      />
      <path
        d="M48,103v-3H30.84c-0.07-0.27-0.16-0.54-0.27-0.8L42.9,86.87l-2.12-2.12L28.56,96.97 c-0.48-0.29-1-0.51-1.56-0.63V80h-3v16.65c-0.18,0.08-0.34,0.18-0.5,0.27L12.06,85.49l-2.12,2.12l11.52,11.52 c-0.13,0.28-0.23,0.57-0.31,0.87H5v3h16.29c0.11,0.29,0.24,0.57,0.4,0.84L9.86,115.66l2.12,2.12l11.94-11.94 c0.03,0.01,0.05,0.03,0.07,0.04V123h3v-16.81c0.4-0.08,0.77-0.22,1.13-0.39l11.94,11.94l2.12-2.12l-11.86-11.86 c0.14-0.24,0.26-0.49,0.36-0.76H48z"
        fill="#BDBDBD"
      />
      <polygon
        points="123 100 104.77 100 117.9 86.87 115.78 84.75 102 98.53 102 80 99 80 99 97.43 87.06 85.49 84.94 87.61 97.33 100 80 100 80 103 97.53 103 84.86 115.66 86.98 117.78 99 105.77 99 123 102 123.5 102 104.67 115.07 117.74 117.19 115.62 104.57 103 123 103"
        fill="#BDBDBD"
      />
      <path
        d="m26.57 81.44c10.85 0 19.68 8.83 19.68 19.68s-8.83 19.68-19.68 19.68-19.68-8.83-19.68-19.68 8.83-19.68 19.68-19.68m0-3.11c-12.59 0-22.8 10.21-22.8 22.8s10.21 22.8 22.8 22.8 22.8-10.21 22.8-22.8c0.01-12.6-10.2-22.8-22.8-22.8z"
        fill="#43A047"
      />
      <path
        d="m101.57 81.44c10.85 0 19.68 8.83 19.68 19.68s-8.83 19.68-19.68 19.68-19.68-8.83-19.68-19.68 8.83-19.68 19.68-19.68m0-3.11c-12.59 0-22.8 10.21-22.8 22.8s10.21 22.8 22.8 22.8 22.8-10.21 22.8-22.8c0.01-12.6-10.2-22.8-22.8-22.8z"
        fill="#0288D1"
      />
      <path
        d="m42.1 65.85-18.72 35.21c-0.52 0.98-0.15 2.19 0.83 2.7 0.3 0.16 0.62 0.23 0.94 0.23 0.72 0 1.41-0.38 1.77-1.06l17.72-33.34c-0.92-1.21-1.77-2.45-2.54-3.74z"
        fill="#F44336"
      />
      <g opacity={0.15}>
        <path
          d="m53.14 41.93c0.58 0 1.26 0.06 2 0.17l1 0.26 11.63 3.05-0.31 1.02-12.17-2.87c-0.04-0.01-0.07-0.02-0.11-0.02-0.58-0.07-1.04-0.1-1.45-0.1-2.18 0-3.37 1.03-3.85 3.35-0.17 0.58-1.12 4.07 0.06 6.38 0.13 0.25 0.36 0.44 0.63 0.51 0.08 0.02 0.15 0.05 0.21 0.08 0.24 0.13 0.41 0.34 0.49 0.59 0.08 0.26 0.05 0.53-0.07 0.76l-25.17 47.35c-0.17 0.33-0.51 0.53-0.88 0.53-0.16 0-0.32-0.04-0.47-0.12-0.24-0.12-0.41-0.33-0.49-0.59s-0.05-0.53 0.07-0.76l24.82-46.69c0.18-0.34 0.15-0.75-0.07-1.06-0.55-0.76-1.16-1.97-0.92-3.36l1.09-5.02c0.5-2.55 1.54-3.46 3.96-3.46m0-1c-2.98 0-4.37 1.34-4.95 4.28l-1.08 5c-0.26 1.51 0.22 2.96 1.09 4.16l-24.82 46.69c-0.52 0.98-0.15 2.19 0.83 2.7 0.3 0.16 0.62 0.23 0.94 0.23 0.72 0 1.41-0.38 1.77-1.06l25.17-47.35c0.52-0.98 0.15-2.19-0.83-2.7-0.14-0.07-0.28-0.12-0.42-0.16-1.07-2.1 0.02-5.68 0.02-5.68 0.4-1.98 1.23-2.59 2.88-2.59 0.39 0 0.84 0.03 1.33 0.09l12.44 2.93c0.05 0.01 0.11 0.02 0.16 0.02 0.3 0 0.58-0.2 0.67-0.5l0.48-1.59c0.11-0.38-0.11-0.78-0.49-0.88-2.69-0.71-12.25-3.21-12.93-3.39-0.03-0.01-0.05-0.01-0.08-0.02-0.81-0.12-1.53-0.18-2.18-0.18z"
          fill="#424242"
        />
      </g>
      <path
        d="m57.37 40.18 2.54 0.52c1.35 0.28 2.68-0.6 2.95-1.95 0.28-1.35-0.6-2.68-1.95-2.95l-2.54-0.52c-1.35-0.28-2.68 0.6-2.95 1.95s0.6 2.68 1.95 2.95z"
        fill="#F44336"
      />
      <linearGradient
        id="a"
        x1={73.104}
        x2={73.104}
        y1={65.167}
        y2={111.63}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEE58" offset={0} />
        <stop stopColor="#FEE34D" offset={0.2329} />
        <stop stopColor="#FBC02D" offset={0.9977} />
      </linearGradient>
      <path
        d="m102 97.35v-0.09c-1 0-1.18 0-2.17-0.01-3.79-0.01-16.12 0.03-24.75 0.05l17.71-33.37c0.51-0.98 0.2-2.19-0.78-2.7-0.98-0.52-2.15-0.14-2.67 0.84l-18.55 35.25c-1.21 0-2.2 0.01-2.89 0.01l-25.5-32.13-2.73 5.09 22.09 28.77c-1.49 1.2-2.62 3.14-2.62 6.22 0 5.24 5.35 9.22 10.35 7.52l33.82-7.53c2.14-0.06 3.23-1.81 3.23-3.96 0-2.13-1.54-3.84-4.54-3.96z"
        fill="url(#a)"
      />
      <g opacity={0.1}>
        <path
          d="m91.12 62.5c0.08 0 0.15 0.02 0.23 0.06 0.14 0.07 0.2 0.19 0.22 0.27s0.05 0.23-0.04 0.4l-17.64 33.38-1.17 2.21 2.5-0.01h0.78c7.76-0.02 18.18-0.05 22.82-0.05h1.27 0.92v0.04l1.44 0.05c1.91 0.07 2.84 0.87 2.84 2.45 0 1.11-0.53 2.42-2.02 2.46h-0.14l-0.14 0.03-33.82 7.53-0.08 0.02-0.08 0.03c-0.62 0.21-1.26 0.32-1.91 0.32-3.5 0-6.46-2.94-6.46-6.42 0-2.25 0.69-3.95 2.06-5.05l1.14-0.92-0.89-1.16-21.5-28 1.19-2.23 24.09 30.34 0.45 0.57h0.73l2.89-0.01h0.9l0.42-0.8 18.56-35.25c0.11-0.19 0.3-0.26 0.44-0.26m0-1.5c-0.71 0-1.4 0.39-1.76 1.07l-18.56 35.25c-1.21 0-2.2 0.01-2.89 0.01l-25.51-32.13-2.73 5.09 22.09 28.77c-1.49 1.2-2.62 3.14-2.62 6.22 0 4.4 3.78 7.92 7.96 7.92 0.79 0 1.6-0.13 2.39-0.4l33.82-7.53c2.14-0.06 3.23-1.81 3.23-3.96 0-2.12-1.54-3.84-4.54-3.95v-0.09c-1 0-1.18 0-2.17-0.01h-1.14c-4.8 0-15.72 0.03-23.54 0.05l17.67-33.37c0.51-0.98 0.19-2.19-0.79-2.7-0.29-0.17-0.59-0.24-0.91-0.24z"
          fill="#424242"
        />
      </g>
      <circle cx={68.13} cy={105.28} r={5.22} fill="#FF8F00" />
      <path
        d="m59.67 119.32c-0.2 0-0.4-0.06-0.58-0.17-0.49-0.32-0.62-0.97-0.3-1.46l8.46-12.92c0.32-0.49 0.97-0.63 1.46-0.3 0.49 0.32 0.62 0.97 0.3 1.46l-8.46 12.92c-0.19 0.3-0.53 0.47-0.88 0.47z"
        fill="#FDD835"
      />
      <path
        d="m56.95 120.78h7.57c1.47 0 2.67-1.19 2.67-2.67 0-1.47-1.19-2.67-2.67-2.67h-7.57c-1.47 0-2.67 1.19-2.67 2.67 0.01 1.48 1.2 2.67 2.67 2.67z"
        fill="#E0E0E0"
      />
      <g opacity={0.2}>
        <path
          d="m64.52 116.45c0.92 0 1.67 0.75 1.67 1.67s-0.75 1.67-1.67 1.67h-7.57c-0.92 0-1.67-0.75-1.67-1.67s0.75-1.67 1.67-1.67h7.57m0-1h-7.57c-1.47 0-2.67 1.19-2.67 2.67 0 1.47 1.19 2.67 2.67 2.67h7.57c1.47 0 2.67-1.19 2.67-2.67s-1.2-2.67-2.67-2.67z"
          fill="#424242"
        />
      </g>
      <path
        d="m100.71 63.69c-0.45-2.74-2.91-4.65-5.63-4.47-0.21-0.01-0.43-0.01-0.65 0-0.17-0.01-0.34 0.01-0.51 0.02-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.01-0.64 0-0.21-0.02-0.42-0.02-0.64 0-0.21-0.02-0.42-0.02-0.64 0-0.31-0.03-0.63-0.03-0.96 0.02-2.04 0.34-3.43 2.27-3.09 4.31 0.27 1.64 1.57 2.83 3.13 3.08 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.06 0.4 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.2 0.06 0.4 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.17 0.05 0.33 0.1 0.51 0.14 0.23 0.08 0.47 0.13 0.71 0.18 0.77 0.24 1.61 0.31 2.46 0.17 2.9-0.47 4.88-3.23 4.39-6.15z"
        fill="#F44336"
      />
      <g opacity={0.2}>
        <path
          d="m95.43 60.71c1.89 0 3.49 1.36 3.8 3.23 0.35 2.1-1.08 4.09-3.18 4.44-0.21 0.03-0.41 0.05-0.62 0.05-0.39 0-0.77-0.06-1.15-0.18l-0.09-0.03-0.09-0.02c-0.19-0.03-0.35-0.08-0.51-0.13l-0.09-0.03-0.09-0.02c-0.12-0.02-0.24-0.06-0.36-0.1l-0.09-0.03-0.09-0.02c-0.15-0.03-0.29-0.06-0.43-0.11l-0.09-0.03-0.09-0.02c-0.15-0.03-0.29-0.06-0.43-0.11l-0.09-0.03-0.09-0.02c-0.14-0.03-0.28-0.06-0.43-0.1l-0.09-0.03-0.1-0.02c-0.14-0.03-0.28-0.06-0.43-0.1l-0.09-0.03-0.1-0.02c-0.14-0.02-0.28-0.06-0.42-0.1l-0.1-0.03-0.1-0.02c-0.14-0.02-0.28-0.06-0.42-0.1l-0.1-0.03-0.1-0.02c-0.14-0.02-0.28-0.06-0.42-0.1l-0.1-0.03-0.1-0.02c-0.14-0.02-0.28-0.06-0.41-0.1l-0.1-0.03-0.1-0.02c-0.14-0.02-0.27-0.06-0.41-0.1l-0.1-0.03-0.11-0.02c-0.14-0.02-0.27-0.06-0.41-0.1l-0.1-0.03-0.11-0.02c-0.14-0.02-0.27-0.06-0.4-0.1l-0.11-0.03-0.11-0.02c-0.14-0.02-0.27-0.05-0.4-0.1l-0.11-0.04-0.11-0.02c-0.14-0.02-0.26-0.05-0.39-0.1l-0.11-0.04-0.11-0.02c-0.13-0.02-0.26-0.05-0.39-0.1l-0.11-0.04-0.12-0.02c-0.13-0.02-0.26-0.05-0.39-0.09l-0.11-0.04-0.12-0.02c-0.13-0.02-0.26-0.05-0.38-0.09l-0.12-0.04-0.12-0.02c-0.13-0.02-0.25-0.05-0.38-0.09l-0.12-0.04-0.12-0.02c-0.13-0.02-0.25-0.05-0.37-0.09l-0.1 0.02-0.13-0.02c-0.97-0.15-1.72-0.89-1.88-1.84-0.1-0.59 0.04-1.19 0.39-1.68s0.87-0.81 1.46-0.91c0.09-0.01 0.18-0.02 0.29-0.02 0.1 0 0.19 0.01 0.29 0.01l0.13 0.01 0.13-0.01c0.07-0.01 0.15-0.01 0.22-0.01 0.05 0 0.11 0 0.16 0.01l0.12 0.01 0.12-0.01c0.08-0.01 0.15-0.01 0.23-0.01 0.06 0 0.11 0 0.16 0.01l0.12 0.01 0.12-0.01c0.08-0.01 0.16-0.01 0.23-0.01 0.05 0 0.11 0 0.16 0.01l0.12 0.01 0.12-0.01c0.08-0.01 0.16-0.01 0.24-0.01 0.05 0 0.11 0 0.16 0.01l0.14 0.01 0.12-0.01c0.08-0.01 0.16-0.01 0.24-0.01 0.05 0 0.11 0 0.16 0.01l0.11 0.01 0.11-0.01c0.08-0.01 0.16-0.01 0.25-0.01 0.05 0 0.11 0 0.16 0.01l0.11 0.01 0.11-0.01c0.08-0.01 0.17-0.01 0.25-0.01 0.05 0 0.11 0 0.16 0.01l0.11 0.01 0.11-0.01c0.09-0.01 0.17-0.01 0.25-0.01 0.05 0 0.11 0 0.16 0.01l0.11 0.01 0.11-0.01c0.09-0.01 0.17-0.01 0.26-0.01 0.05 0 0.11 0 0.16 0.01l0.11 0.01 0.11-0.01c0.09-0.01 0.17-0.01 0.26-0.01 0.05 0 0.11 0 0.16 0.01l0.11 0.01 0.11-0.01c0.09-0.01 0.18-0.01 0.27-0.01 0.05 0 0.11 0 0.16 0.01l0.1 0.01 0.1-0.01c0.09-0.01 0.18-0.01 0.27-0.01 0.05 0 0.11 0 0.16 0.01l0.1 0.01 0.1-0.01c0.09 0 0.18-0.01 0.27-0.01 0.05 0 0.11 0 0.16 0.01l0.1 0.01 0.1-0.01c0.09 0 0.18-0.01 0.28-0.01 0.05 0 0.11 0 0.16 0.01l0.1 0.01 0.1-0.01c0.09 0 0.19-0.01 0.28-0.01 0.05 0 0.11 0 0.16 0.01l0.1 0.01h0.1c0.1 0 0.19-0.01 0.28-0.01 0.05 0 0.11 0 0.16 0.01l0.1 0.01h0.1c0.1 0 0.19-0.01 0.29-0.01 0.05 0 0.11 0 0.16 0.01l0.09 0.01h0.09c0.1 0 0.19-0.01 0.29-0.01 0.05 0 0.11 0 0.16 0.01l0.09 0.01h0.09l0.17 0.13c0.06 0 0.11 0.13 0.18 0.13h0.01l0.09-0.14 0.09-0.08c0.08-0.01 0.16-0.04 0.24-0.04s0.15-0.02 0.23-0.01h0.09l0.09-0.01c0.09-0.05 0.18-0.05 0.26-0.05m0-1.5c-0.12 0-0.23 0-0.35 0.01-0.1-0.01-0.21-0.01-0.31-0.01-0.11 0-0.23 0-0.34 0.01h-0.09c-0.14 0-0.28 0.01-0.42 0.02-0.09-0.01-0.18-0.01-0.28-0.01-0.12 0-0.24 0-0.36 0.01-0.09-0.01-0.18-0.01-0.28-0.01-0.12 0-0.24 0-0.36 0.01-0.09-0.01-0.19-0.01-0.28-0.01-0.12 0-0.24 0-0.36 0.01-0.09-0.01-0.19-0.01-0.28-0.01-0.12 0-0.24 0-0.36 0.01-0.09-0.01-0.19-0.01-0.28-0.01-0.12 0-0.24 0-0.35 0.01-0.09-0.01-0.19-0.01-0.28-0.01-0.12 0-0.23 0-0.35 0.01-0.09-0.01-0.19-0.01-0.28-0.01-0.12 0-0.23 0-0.35 0.01-0.09-0.01-0.19-0.01-0.29-0.01-0.12 0-0.23 0-0.35 0.01-0.1-0.01-0.19-0.01-0.29-0.01-0.12 0-0.23 0-0.35 0.01-0.1-0.01-0.19-0.01-0.29-0.01-0.12 0-0.23 0-0.35 0.01-0.1-0.01-0.19-0.01-0.29-0.01-0.11 0-0.23 0-0.35 0.01-0.1-0.01-0.19-0.01-0.29-0.01-0.11 0-0.23 0-0.35 0.01-0.1-0.01-0.19-0.01-0.29-0.01-0.11 0-0.23 0-0.34 0.01-0.1-0.01-0.2-0.01-0.29-0.01-0.11 0-0.23 0-0.34 0.01-0.1-0.01-0.2-0.01-0.3-0.01-0.11 0-0.23 0-0.34 0.01-0.1-0.01-0.2-0.01-0.3-0.01-0.11 0-0.23 0-0.34 0.01-0.1-0.01-0.2-0.01-0.3-0.01-0.11 0-0.22 0-0.34 0.01-0.1-0.01-0.2-0.01-0.3-0.01-0.11 0-0.22 0-0.34 0.01-0.14-0.01-0.28-0.02-0.42-0.02-0.18 0-0.35 0.01-0.53 0.04-2.04 0.34-3.43 2.27-3.09 4.31 0.27 1.64 1.57 2.83 3.13 3.08 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.07 0.4 0.12 0.62 0.15 0.2 0.06 0.4 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.2 0.06 0.4 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.2 0.06 0.41 0.11 0.62 0.15 0.17 0.05 0.33 0.1 0.51 0.14 0.23 0.08 0.47 0.13 0.71 0.18 0.51 0.16 1.04 0.24 1.59 0.24 0.29 0 0.58-0.02 0.87-0.07 2.92-0.48 4.9-3.24 4.41-6.16-0.51-2.61-2.79-4.47-5.36-4.47z"
          fill="#424242"
        />
      </g>
      <path
        d="m63.5 47.99 9.6 2.47c0.83 0.21 1.67-0.29 1.89-1.11l0.67-2.6c0.21-0.83-0.29-1.67-1.11-1.89l-9.6-2.47c-0.83-0.21-1.67 0.29-1.89 1.11l-0.67 2.6c-0.22 0.83 0.28 1.67 1.11 1.89z"
        fill="#039BE5"
      />
      <g opacity={0.2}>
        <path
          d="m64.55 43.33c0.05 0 0.09 0.01 0.14 0.02l9.6 2.47c0.29 0.08 0.47 0.38 0.4 0.67l-0.67 2.6c-0.06 0.24-0.28 0.41-0.53 0.41-0.05 0-0.09-0.01-0.14-0.02l-9.6-2.47c-0.29-0.08-0.47-0.38-0.4-0.67l0.67-2.6c0.07-0.24 0.28-0.41 0.53-0.41m0-1c-0.69 0-1.32 0.46-1.5 1.16l-0.67 2.6c-0.21 0.83 0.29 1.67 1.11 1.89l9.6 2.47c0.13 0.03 0.26 0.05 0.39 0.05 0.69 0 1.32-0.46 1.5-1.16l0.67-2.6c0.21-0.83-0.29-1.67-1.11-1.89l-9.6-2.47c-0.13-0.03-0.26-0.05-0.39-0.05z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default Bike;
