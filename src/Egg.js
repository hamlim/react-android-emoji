import React from "react";

function Egg(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <radialGradient
        id="a"
        cx={46.333}
        cy={39.667}
        r={77.333}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFDCB5" offset={0} />
        <stop stopColor="#F3CA9C" offset={0.2414} />
        <stop stopColor="#E4B37D" offset={0.6022} />
        <stop stopColor="#DEAA71" offset={0.803} />
        <stop stopColor="#E0AB7B" offset={0.9901} />
      </radialGradient>
      <path
        d="m107.3 66.42c-1.62-21.91-16.43-59.83-44.09-59.83-25.36 0-42.69 37.93-44.09 59.82-2.81 44 23.67 57.27 44.09 57.27 19.9 0.01 47.23-14.57 44.09-57.26z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m63.21 9.59c14.09 0 23.68 11.01 29.24 20.24 7.68 12.74 11.16 27.37 11.85 36.8 1.29 17.49-2.74 31.8-11.64 41.38-7.37 7.94-18.39 12.68-29.46 12.68-11.5 0-22.24-4.41-29.45-12.1-8.9-9.49-12.82-23.62-11.65-41.98 0.72-11.26 5.67-25.67 12.61-36.72 4.78-7.58 14.81-20.3 28.5-20.3m0-3c-25.36 0-42.69 37.93-44.09 59.82-2.81 44 23.67 57.27 44.09 57.27 19.9 0 47.23-14.57 44.09-57.27-1.62-21.9-16.43-59.82-44.09-59.82z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default Egg;
