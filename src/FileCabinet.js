import React from "react";

function FileCabinet(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <rect x={21.02} y={4} width={85.97} height={120} fill="#424242" />
      <g opacity={0.2}>
        <path
          d="m103.98 7v114h-79.96v-114h79.96m3-3h-85.96v120h85.97v-120h-0.01z"
          fill="#eee"
        />
      </g>
      <line
        x1={24.31}
        x2={103.69}
        y1={64}
        y2={64}
        fill="none"
        stroke="#212121"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <linearGradient
        id="b"
        x1={64}
        x2={64}
        y1={9.1922}
        y2={58.551}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BDBDBD" offset={0.0123} />
        <stop stopColor="#9F9F9F" offset={0.2727} />
        <stop stopColor="#888" offset={0.5364} />
        <stop stopColor="#7A7A7A" offset={0.7847} />
        <stop stopColor="#757575" offset={1} />
      </linearGradient>
      <rect x={27.57} y={9.3} width={72.86} height={50.72} fill="url(#b)" />
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={68.102}
        y2={117.46}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BDBDBD" offset={0.0123} />
        <stop stopColor="#9F9F9F" offset={0.2727} />
        <stop stopColor="#888" offset={0.5364} />
        <stop stopColor="#7A7A7A" offset={0.7847} />
        <stop stopColor="#757575" offset={1} />
      </linearGradient>
      <rect x={27.57} y={68.21} width={72.86} height={50.72} fill="url(#a)" />
      <rect
        x={49.2}
        y={21.57}
        width={29.61}
        height={13.7}
        fill="#fff"
        stroke="#BDBDBD"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <rect x={49.2} y={44.4} width={29.61} height={4.79} fill="#BDBDBD" />
      <rect
        x={49.2}
        y={79.76}
        width={29.61}
        height={13.7}
        fill="#fff"
        stroke="#BDBDBD"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <rect x={49.2} y={102.59} width={29.61} height={4.79} fill="#BDBDBD" />
    </svg>
  );
}

export default FileCabinet;
