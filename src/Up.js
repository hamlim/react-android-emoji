import React from "react";

function Up(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={-0.3333}
        y2={128.1}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#29B6F6" offset={0} />
        <stop stopColor="#169FE4" offset={0.5369} />
        <stop stopColor="#0288D1" offset={0.9954} />
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
        <path d="m51.28 35.96c1.1 0 2 0.9 2 2v34.92c0 5.87-1.88 10.52-5.63 13.94-3.76 3.43-8.76 5.14-15.01 5.14-6.32 0-11.34-1.69-15.06-5.06-3.72-3.38-5.58-8.07-5.58-14.06v-34.88c0-1.1 0.9-2 2-2h5.56c1.1 0 2 0.9 2 2v34.9c0 3.69 0.94 6.5 2.81 8.45 1.87 1.94 4.63 2.92 8.27 2.92 7.39 0 11.08-3.89 11.08-11.67v-34.6c0-1.1 0.9-2 2-2h5.56m0-3h-5.56c-2.76 0-5 2.24-5 5v34.59c0 6.16-2.34 8.67-8.08 8.67-2.82 0-4.82-0.65-6.11-2-1.31-1.36-1.97-3.5-1.97-6.37v-34.9c0-2.76-2.24-5-5-5h-5.56c-2.76 0-5 2.24-5 5v34.88c0 6.85 2.21 12.32 6.56 16.28 4.27 3.88 10.02 5.84 17.08 5.84 6.99 0 12.72-1.99 17.03-5.93 4.39-4 6.61-9.44 6.61-16.16v-34.9c0-2.76-2.24-5-5-5z" />
        <path d="m81.13 35.96c6.17 0 11.07 1.61 14.7 4.82 3.63 3.22 5.45 7.47 5.45 12.76 0 5.42-1.78 9.64-5.33 12.65s-8.53 4.52-14.93 4.52h-9.42c-1.1 0-2 0.9-2 2v16.49c0 1.1-0.9 2-2 2h-5.6c-1.1 0-2-0.9-2-2v-51.24c0-1.1 0.9-2 2-2h19.13m-9.53 27.01h9.53c3.41 0 6.02-0.8 7.82-2.41s2.69-3.93 2.69-6.96c0-2.98-0.91-5.37-2.73-7.15s-4.32-2.7-7.51-2.75h-9.8c-1.1 0-2 0.9-2 2v15.27c0 1.11 0.89 2 2 2m9.53-30.01h-19.13c-2.76 0-5 2.24-5 5v51.24c0 2.76 2.24 5 5 5h5.6c2.76 0 5-2.24 5-5v-15.49h8.42c7.1 0 12.78-1.76 16.87-5.23 4.24-3.6 6.39-8.62 6.39-14.94 0-6.16-2.17-11.21-6.46-15.01-4.17-3.69-9.79-5.57-16.69-5.57zm-8.53 13.74h8.8c2.36 0.04 4.15 0.66 5.41 1.89 1.23 1.21 1.83 2.84 1.83 5.01 0 2.16-0.55 3.71-1.69 4.73-1.22 1.09-3.18 1.65-5.82 1.65h-8.53v-13.28z" />
        <path d="m113.46 35.96c1.12 0 2.03 0.92 2 2.05l-0.82 35c-0.03 1.09-0.91 1.95-2 1.95h-4.02c-1.09 0-1.98-0.87-2-1.96l-0.78-35c-0.03-1.12 0.88-2.04 2-2.04h5.62m-2.69 45.91c1.62 0 2.9 0.47 3.83 1.42 0.94 0.94 1.4 2.14 1.4 3.57 0 1.39-0.45 2.54-1.37 3.48-0.91 0.93-2.2 1.4-3.87 1.4s-2.96-0.47-3.87-1.4-1.37-2.09-1.37-3.48c0-1.44 0.47-2.63 1.4-3.57 0.95-0.95 2.23-1.42 3.85-1.42m2.69-48.91h-5.62c-1.36 0-2.63 0.53-3.57 1.5-0.95 0.97-1.45 2.25-1.42 3.61l0.78 35c0.06 2.7 2.3 4.89 5 4.89h4.02c2.69 0 4.94-2.19 5-4.88l0.82-35c0.03-1.36-0.47-2.64-1.42-3.61-0.96-0.97-2.23-1.51-3.59-1.51zm-2.69 45.91c-3.04 0-4.92 1.25-5.96 2.31-1.49 1.5-2.27 3.46-2.27 5.68 0 2.16 0.77 4.09 2.22 5.57 1.49 1.53 3.52 2.3 6.02 2.3s4.52-0.77 6.02-2.3c1.45-1.49 2.22-3.41 2.22-5.57 0-2.22-0.79-4.18-2.27-5.68-1.06-1.06-2.94-2.31-5.98-2.31z" />
      </g>
      <g fill="#FAFAFA">
        <path d="m51.28 35.96c1.1 0 2 0.9 2 2v34.92c0 5.87-1.88 10.52-5.63 13.94-3.76 3.43-8.76 5.14-15.01 5.14-6.32 0-11.34-1.69-15.06-5.06s-5.58-8.07-5.58-14.06v-34.88c0-1.1 0.9-2 2-2h5.56c1.1 0 2 0.9 2 2v34.9c0 3.69 0.94 6.5 2.81 8.45 1.87 1.94 4.63 2.92 8.27 2.92 7.39 0 11.08-3.89 11.08-11.67v-34.6c0-1.1 0.9-2 2-2h5.56z" />
        <path d="m69.6 72.71v16.49c0 1.1-0.9 2-2 2h-5.6c-1.1 0-2-0.9-2-2v-51.24c0-1.1 0.9-2 2-2h19.13c6.17 0 11.07 1.61 14.7 4.82 3.63 3.22 5.45 7.47 5.45 12.76 0 5.42-1.78 9.64-5.33 12.65s-8.53 4.52-14.93 4.52h-9.42c-1.11 0-2 0.9-2 2zm0-11.74c0 1.1 0.9 2 2 2h9.53c3.41 0 6.02-0.8 7.82-2.41s2.69-3.93 2.69-6.96c0-2.98-0.91-5.37-2.73-7.15s-4.32-2.7-7.51-2.75h-9.8c-1.1 0-2 0.9-2 2v15.27z" />
        <path d="m105.53 86.86c0-1.44 0.47-2.63 1.4-3.57 0.94-0.95 2.21-1.42 3.83-1.42s2.9 0.47 3.83 1.42c0.94 0.94 1.4 2.14 1.4 3.57 0 1.39-0.45 2.54-1.37 3.48-0.91 0.93-2.2 1.4-3.87 1.4s-2.96-0.47-3.87-1.4c-0.9-0.94-1.35-2.1-1.35-3.48zm7.11-11.9h-4.02c-1.09 0-1.98-0.87-2-1.96l-0.78-35c-0.03-1.12 0.88-2.04 2-2.04h5.62c1.12 0 2.03 0.92 2 2.05l-0.82 35c-0.02 1.09-0.91 1.95-2 1.95z" />
      </g>
    </svg>
  );
}

export default Up;
