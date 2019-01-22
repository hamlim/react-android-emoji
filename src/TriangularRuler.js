import React from "react";

function TriangularRuler(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <polygon points="4 4 4 124 122.46 124" fill="#90A4AE" />
      <g opacity={0.2}>
        <path
          d="M7,11.31L115.29,121H7V11.31 M4,4v120h118.46L4,4L4,4z"
          fill="#424242"
        />
      </g>
      <linearGradient
        id="a"
        x1={60.036}
        x2={60.036}
        y1={18.226}
        y2={118.46}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#eee" offset={0.0028914} />
        <stop stopColor="#EBEBEB" offset={0.3492} />
        <stop stopColor="#E2E2E2" offset={0.5939} />
        <stop stopColor="#D3D3D3" offset={0.8065} />
        <stop stopColor="#BDBDBD" offset={1} />
      </linearGradient>
      <path
        d="M8.91,113.37v6.17l102.25-0.24L8.91,18.1l0,21.74h7.12v5.69H8.91v5.69h7.12v5.69H8.91v5.69 h14.23v5.22H8.91v5.69h7.12v5.69H8.91v5.69h7.12v5.69H8.91v5.69h14.23v5.69H8.91v5.69h7.12v5.69H8.91z M29.31,58.05l43.06,42.82 H29.31V58.05z"
        fill="url(#a)"
      />
    </svg>
  );
}

export default TriangularRuler;
