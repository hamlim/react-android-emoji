import React from "react";

function Droplet(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <rect x={-1228} y={-57.67} width={0} height={0.67} fill="#F2F2F2" />
      <radialGradient
        id="a"
        cx={52.25}
        cy={43.75}
        r={54.993}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BBDEFB" offset={0.3559} />
        <stop stopColor="#64B5F6" offset={0.9361} />
      </radialGradient>
      <path
        d="m103.22 85.01c0 21.66-17.62 39.19-39.28 39.15s-39.15-17.62-39.15-39.28c0-32.38 38.7-80.23 38.7-80.23s39.73 48.1 39.73 80.36z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m63.52 11.15c9.22 11.98 35.7 48.5 35.7 73.78 0 19.38-15.8 35.07-35.22 35.07h-0.06c-19.39 0-35.16-15.78-35.16-35.2 0-25.35 25.72-61.67 34.74-73.65m-0.03-6.5s-38.7 47.76-38.7 80.15c0 21.66 17.49 39.2 39.15 39.2h0.07c21.63 0 39.22-17.43 39.22-39.07-0.01-32.26-39.74-80.28-39.74-80.28z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default Droplet;
