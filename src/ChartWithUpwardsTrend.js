import React from "react";

function ChartWithUpwardsTrend(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={4.378}
        y2={123.54}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" offset={0} />
        <stop stopColor="#C8C9CA" offset={1} />
      </linearGradient>
      <rect x={4} y={4} width={120} height={120} fill="url(#a)" />
      <g fill="none" stroke="#575757" strokeMiterlimit={10}>
        <rect x={4} y={4} width={120} height={120} />
        <line x1={4} x2={124} y1={104} y2={104} />
        <line x1={4} x2={124} y1={84} y2={84} />
        <line x1={4} x2={124} y1={64} y2={64} />
        <line x1={4} x2={124} y1={44} y2={44} />
        <line x1={4} x2={124} y1={24} y2={24} />
        <line x1={104} x2={104} y1={4} y2={124} />
        <line x1={84} x2={84} y1={4} y2={124} />
        <line x1={64} x2={64} y1={4} y2={124} />
        <line x1={44} x2={44} y1={4} y2={124} />
        <line x1={24} x2={24} y1={4} y2={124} />
      </g>
      <polyline
        points="10.77 113.19 33.47 75.66 47.57 93.52 70.91 61.35 92.81 73.84 116.16 13.5"
        fill="none"
        stroke="#EC4431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <g opacity={0.2}>
        <path d="M121,7v114H7V7H121 M124,4H4v120h120V4L124,4z" fill="#424242" />
      </g>
    </svg>
  );
}

export default ChartWithUpwardsTrend;
