import React from "react";

function AtomSymbol(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={4.25}
        y2={124.41}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B388FF" offset={0} />
        <stop stopColor="#A175FF" offset={0.3773} />
        <stop stopColor="#7C4DFF" offset={1} />
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
        <path d="m64 58c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9z" />
        <path d="m64 16c6.67 0 12.58 7.85 16.21 19.92 4.25-1 8.19-1.51 11.68-1.51 6.57 0 11.49 1.82 13.68 5.59 3.34 5.78-0.51 14.82-9.14 24 8.63 9.18 12.48 18.22 9.14 24-2.18 3.78-7.1 5.59-13.68 5.59-3.48 0-7.43-0.51-11.68-1.51-3.63 12.07-9.54 19.92-16.21 19.92s-12.58-7.85-16.21-19.92c-4.25 1-8.19 1.51-11.68 1.51-6.57 0-11.49-1.82-13.68-5.59-3.34-5.78 0.51-14.82 9.14-24-8.63-9.18-12.48-18.22-9.14-24 2.18-3.78 7.1-5.59 13.68-5.59 3.48 0 7.43 0.51 11.68 1.51 3.63-12.07 9.54-19.92 16.21-19.92m0 25.45c0.14 0 0.28-0.03 0.4-0.09 3.1-1.38 6.15-2.57 9.11-3.55 0.52-0.17 0.81-0.73 0.64-1.26-3.1-9.53-7.39-14.55-10.15-14.55s-7.05 5.02-10.15 14.56c-0.17 0.52 0.11 1.08 0.64 1.26 2.96 0.98 6.01 2.16 9.11 3.55 0.12 0.05 0.26 0.08 0.4 0.08m28.09 17.95c0.27 0 0.54-0.11 0.74-0.33 6.71-7.46 8.92-13.68 7.54-16.07-0.89-1.54-3.88-2.58-8.5-2.58-2.58 0-5.68 0.33-9.19 1.07-0.54 0.11-0.88 0.64-0.76 1.17 0.63 3.05 1.13 6.29 1.48 9.66 0.03 0.28 0.18 0.53 0.4 0.7 2.75 1.99 5.3 4.04 7.63 6.12 0.19 0.18 0.43 0.26 0.66 0.26m-56.18 0c0.24 0 0.47-0.08 0.66-0.25 2.33-2.07 4.88-4.12 7.63-6.12 0.23-0.16 0.37-0.42 0.4-0.7 0.35-3.38 0.85-6.61 1.48-9.66 0.11-0.54-0.23-1.06-0.76-1.17-3.52-0.75-6.61-1.07-9.19-1.07-4.62 0-7.61 1.04-8.5 2.58-1.38 2.39 0.83 8.61 7.54 16.07 0.19 0.21 0.46 0.32 0.74 0.32m40.97-11c-0.27-1.79-0.58-3.49-0.93-5.1-1.57 0.51-3.2 1.08-4.88 1.74 0.98 0.53 1.96 1.07 2.93 1.63 0.98 0.57 1.93 1.15 2.88 1.73m-25.76 0c0.95-0.58 1.9-1.16 2.88-1.73 0.98-0.56 1.96-1.1 2.93-1.63-1.68-0.66-3.31-1.24-4.88-1.74-0.35 1.62-0.66 3.32-0.93 5.1m12.88 31.33c0.15 0 0.3-0.03 0.44-0.1 2.13-1.05 4.31-2.21 6.56-3.5 2.24-1.3 4.34-2.61 6.31-3.93 0.26-0.17 0.42-0.45 0.44-0.77 0.16-2.36 0.25-4.84 0.25-7.43s-0.09-5.07-0.24-7.43c-0.02-0.31-0.18-0.59-0.44-0.77-1.97-1.32-4.07-2.63-6.31-3.93s-4.43-2.46-6.56-3.5c-0.14-0.07-0.29-0.1-0.44-0.1s-0.3 0.03-0.44 0.1c-2.13 1.05-4.31 2.21-6.56 3.5-2.24 1.3-4.34 2.61-6.31 3.93-0.26 0.17-0.42 0.45-0.44 0.77-0.17 2.36-0.26 4.84-0.26 7.43s0.09 5.07 0.24 7.43c0.02 0.31 0.18 0.59 0.44 0.77 1.97 1.32 4.07 2.63 6.31 3.93s4.43 2.46 6.56 3.5c0.15 0.07 0.3 0.1 0.45 0.1m19.95-12.37c1.41-1.13 2.73-2.25 3.95-3.36-1.22-1.11-2.54-2.23-3.95-3.36 0.03 1.11 0.05 2.23 0.05 3.36s-0.02 2.25-0.05 3.36m-39.9 0c-0.03-1.11-0.05-2.23-0.05-3.36s0.02-2.25 0.05-3.36c-1.41 1.13-2.73 2.25-3.95 3.36 1.23 1.11 2.54 2.23 3.95 3.36m47.83 20.22c4.62 0 7.61-1.04 8.5-2.58 1.38-2.39-0.83-8.61-7.54-16.07-0.2-0.22-0.47-0.33-0.74-0.33-0.24 0-0.47 0.08-0.66 0.25-2.33 2.07-4.88 4.12-7.63 6.12-0.23 0.16-0.37 0.42-0.4 0.7-0.35 3.38-0.85 6.61-1.48 9.66-0.11 0.54 0.23 1.06 0.76 1.17 3.51 0.75 6.6 1.08 9.19 1.08m-55.76 0c2.58 0 5.68-0.33 9.19-1.07 0.54-0.11 0.88-0.64 0.76-1.17-0.63-3.05-1.13-6.29-1.48-9.66-0.03-0.28-0.18-0.53-0.4-0.7-2.75-1.99-5.3-4.04-7.63-6.12-0.19-0.17-0.43-0.25-0.66-0.25-0.27 0-0.54 0.11-0.74 0.33-6.71 7.46-8.92 13.68-7.54 16.07 0.89 1.53 3.88 2.57 8.5 2.57m39.83-2.89c0.35-1.61 0.66-3.31 0.93-5.1-0.95 0.58-1.9 1.16-2.88 1.73-0.98 0.56-1.96 1.1-2.93 1.63 1.68 0.66 3.31 1.24 4.88 1.74m-23.9 0c1.57-0.51 3.2-1.08 4.88-1.74-0.98-0.53-1.96-1.07-2.93-1.63-0.98-0.56-1.93-1.14-2.88-1.73 0.27 1.79 0.58 3.49 0.93 5.1m11.95 21.31c2.76 0 7.05-5.02 10.15-14.56 0.17-0.52-0.11-1.08-0.64-1.26-2.96-0.98-6.01-2.16-9.11-3.55-0.13-0.06-0.27-0.09-0.4-0.09-0.14 0-0.28 0.03-0.4 0.09-3.1 1.38-6.15 2.57-9.11 3.55-0.52 0.17-0.81 0.73-0.64 1.26 3.1 9.54 7.39 14.56 10.15 14.56m0-93c-7.4 0-13.96 7.03-18.24 19.41-3.46-0.67-6.7-1.01-9.66-1.01-10.07 0-14.41 3.86-16.27 7.09-3.7 6.41-0.89 15.61 7.69 25.5-8.58 9.89-11.39 19.09-7.69 25.5 1.87 3.24 6.21 7.09 16.27 7.09 2.96 0 6.2-0.34 9.66-1.01 4.28 12.4 10.84 19.43 18.24 19.43s13.96-7.03 18.24-19.41c3.46 0.67 6.7 1.01 9.66 1.01 10.07 0 14.41-3.86 16.27-7.09 3.7-6.41 0.89-15.61-7.69-25.5 8.58-9.89 11.39-19.09 7.69-25.5-1.87-3.24-6.21-7.09-16.27-7.09-2.96 0-6.2 0.34-9.66 1.01-4.28-12.4-10.84-19.43-18.24-19.43zm-6.65 22.63c2.67-7.3 5.66-10.25 6.65-10.61 0.99 0.36 3.98 3.31 6.65 10.61-2.2 0.78-4.42 1.66-6.65 2.64-2.23-0.98-4.46-1.86-6.65-2.64zm27.89 8.42c2.4-0.42 4.62-0.63 6.63-0.63 3.75 0 5.46 0.75 5.88 1.09 0.18 1.04-0.88 5.1-5.86 11.06-1.77-1.51-3.65-3-5.61-4.44-0.26-2.41-0.61-4.79-1.04-7.08zm-55 0.46c0.42-0.34 2.14-1.09 5.88-1.09 2.01 0 4.23 0.21 6.63 0.63-0.42 2.29-0.77 4.66-1.04 7.08-1.96 1.44-3.84 2.93-5.61 4.44-4.98-5.95-6.04-10.02-5.86-11.06zm22.94 13.24c1.73-1.14 3.52-2.24 5.32-3.28s3.65-2.04 5.5-2.97c1.85 0.93 3.7 1.93 5.5 2.97s3.59 2.14 5.32 3.28c0.12 2.07 0.18 4.17 0.18 6.25s-0.06 4.18-0.18 6.25c-1.73 1.14-3.52 2.24-5.32 3.28s-3.65 2.04-5.5 2.97c-1.85-0.93-3.7-1.93-5.5-2.97s-3.59-2.14-5.32-3.28c-0.12-2.07-0.18-4.17-0.18-6.25s0.06-4.18 0.18-6.25zm-22.94 25.74c-0.18-1.04 0.88-5.1 5.86-11.06 1.77 1.51 3.65 3 5.61 4.44 0.27 2.42 0.62 4.79 1.04 7.08-2.4 0.42-4.62 0.63-6.63 0.63-3.74 0-5.46-0.75-5.88-1.09zm56.05-6.62c1.96-1.44 3.84-2.93 5.61-4.44 4.98 5.96 6.05 10.02 5.86 11.06-0.42 0.34-2.14 1.09-5.88 1.09-2.01 0-4.23-0.21-6.63-0.63 0.42-2.29 0.77-4.67 1.04-7.08zm-28.94 15.5c2.2-0.78 4.42-1.66 6.65-2.64 2.23 0.97 4.46 1.86 6.65 2.64-2.67 7.3-5.66 10.25-6.65 10.61-0.99-0.36-3.98-3.31-6.65-10.61z" />
      </g>
      <g fill="#FAFAFA">
        <circle cx={64} cy={64} r={6} />
        <path d="m105.57 40c-3.34-5.78-13.09-6.97-25.35-4.08-3.64-12.07-9.55-19.92-16.22-19.92s-12.58 7.85-16.21 19.92c-12.26-2.88-22.02-1.7-25.35 4.08s0.51 14.82 9.14 24c-8.63 9.18-12.48 18.22-9.14 24s13.09 6.97 25.35 4.08c3.63 12.07 9.54 19.92 16.21 19.92s12.58-7.85 16.21-19.92c12.26 2.88 22.02 1.7 25.35-4.08s-0.51-14.82-9.14-24c8.64-9.18 12.49-18.22 9.15-24zm-5.2 3c1.38 2.39-0.83 8.61-7.54 16.07-0.37 0.41-1 0.44-1.4 0.08-2.33-2.07-4.88-4.12-7.63-6.12-0.23-0.16-0.37-0.42-0.4-0.7-0.35-3.38-0.85-6.61-1.48-9.66-0.11-0.54 0.23-1.06 0.76-1.17 9.82-2.09 16.31-0.89 17.69 1.5zm-29.37 33.12c-2.24 1.3-4.43 2.46-6.56 3.5-0.28 0.14-0.6 0.14-0.89 0-2.13-1.05-4.31-2.21-6.56-3.5s-4.34-2.61-6.31-3.93c-0.26-0.17-0.42-0.45-0.44-0.77-0.15-2.35-0.24-4.83-0.24-7.42s0.09-5.07 0.24-7.43c0.02-0.31 0.18-0.59 0.44-0.77 1.97-1.32 4.07-2.63 6.31-3.93s4.43-2.46 6.56-3.5c0.28-0.14 0.6-0.14 0.89 0 2.13 1.05 4.31 2.21 6.56 3.5s4.34 2.61 6.31 3.93c0.26 0.17 0.42 0.45 0.44 0.77 0.16 2.36 0.25 4.84 0.25 7.43s-0.09 5.07-0.24 7.43c-0.02 0.31-0.18 0.59-0.44 0.77-1.98 1.32-4.08 2.63-6.32 3.92zm5.88 3.48c-0.27 1.79-0.58 3.49-0.93 5.1-1.57-0.51-3.2-1.08-4.88-1.74 0.98-0.53 1.96-1.07 2.93-1.63s1.93-1.15 2.88-1.73zm-19.95 3.35c-1.68 0.66-3.31 1.24-4.88 1.74-0.35-1.61-0.66-3.31-0.93-5.1 0.95 0.58 1.9 1.16 2.88 1.73s1.96 1.1 2.93 1.63zm-12.88-15.59c-1.41-1.13-2.73-2.25-3.95-3.36 1.22-1.11 2.54-2.23 3.95-3.36-0.03 1.11-0.05 2.23-0.05 3.36s0.02 2.25 0.05 3.36zm7.07-18.96c0.27-1.79 0.58-3.49 0.93-5.1 1.57 0.51 3.2 1.08 4.88 1.74-0.98 0.53-1.96 1.07-2.93 1.63-0.98 0.57-1.93 1.15-2.88 1.73zm19.95-3.35c1.68-0.66 3.31-1.24 4.88-1.74 0.35 1.61 0.66 3.31 0.93 5.1-0.95-0.58-1.9-1.16-2.88-1.73s-1.96-1.1-2.93-1.63zm12.88 15.59c1.41 1.13 2.73 2.25 3.95 3.36-1.22 1.11-2.54 2.23-3.95 3.36 0.03-1.11 0.05-2.23 0.05-3.36s-0.02-2.25-0.05-3.36zm-19.95-38.64c2.76 0 7.05 5.02 10.15 14.56 0.17 0.52-0.11 1.08-0.64 1.26-2.96 0.98-6.01 2.16-9.11 3.55-0.26 0.11-0.55 0.11-0.81 0-3.1-1.38-6.15-2.57-9.11-3.55-0.52-0.17-0.81-0.73-0.64-1.26 3.11-9.54 7.4-14.56 10.16-14.56zm-36.37 21c1.38-2.39 7.87-3.59 17.69-1.51 0.54 0.11 0.88 0.64 0.76 1.17-0.63 3.05-1.13 6.29-1.48 9.66-0.03 0.28-0.18 0.53-0.4 0.7-2.75 1.99-5.3 4.04-7.63 6.12-0.41 0.36-1.04 0.33-1.4-0.08-6.72-7.45-8.92-13.67-7.54-16.06zm0 42c-1.38-2.39 0.83-8.61 7.54-16.07 0.37-0.41 1-0.44 1.4-0.08 2.33 2.07 4.88 4.12 7.63 6.12 0.23 0.16 0.37 0.42 0.4 0.7 0.35 3.38 0.85 6.61 1.48 9.66 0.11 0.54-0.23 1.06-0.76 1.17-9.82 2.09-16.31 0.89-17.69-1.5zm36.37 21c-2.76 0-7.05-5.02-10.15-14.56-0.17-0.52 0.11-1.08 0.64-1.26 2.96-0.98 6.01-2.16 9.11-3.55 0.26-0.11 0.55-0.11 0.81 0 3.1 1.38 6.15 2.57 9.11 3.55 0.52 0.17 0.81 0.73 0.64 1.26-3.11 9.54-7.4 14.56-10.16 14.56zm36.37-21c-1.38 2.39-7.87 3.59-17.69 1.51-0.54-0.11-0.88-0.64-0.76-1.17 0.63-3.05 1.13-6.29 1.48-9.66 0.03-0.28 0.18-0.53 0.4-0.7 2.75-1.99 5.3-4.04 7.63-6.12 0.41-0.36 1.04-0.33 1.4 0.08 6.72 7.45 8.92 13.67 7.54 16.06z" />
      </g>
    </svg>
  );
}

export default AtomSymbol;
