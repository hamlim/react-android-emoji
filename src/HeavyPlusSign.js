import React from "react";

function HeavyPlusSign(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={3.2622}
        y2={124.81}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEB3B" offset={0} />
        <stop stopColor="#FFE93A" offset={0.0365} />
        <stop stopColor="#FDD835" offset={0.5078} />
        <stop stopColor="#FCCF32" offset={0.6593} />
        <stop stopColor="#FBC02D" offset={1} />
      </linearGradient>
      <path
        d="m120 52h-42c-1.1 0-2-0.9-2-2v-42c0-2.21-1.79-4-4-4h-16c-2.21 0-4 1.79-4 4v42c0 1.1-0.9 2-2 2h-42c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h42c1.1 0 2 0.9 2 2v42c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-42c0-1.1 0.9-2 2-2h42c2.21 0 4-1.79 4-4v-16c0-2.21-1.79-4-4-4z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="M72,7c0.55,0,1,0.45,1,1v42c0,2.76,2.24,5,5,5h42c0.55,0,1,0.45,1,1v16c0,0.55-0.45,1-1,1H78 c-2.76,0-5,2.24-5,5v42c0,0.55-0.45,1-1,1H56c-0.55,0-1-0.45-1-1V78c0-2.76-2.24-5-5-5H8c-0.55,0-1-0.45-1-1V56c0-0.55,0.45-1,1-1 h42c2.76,0,5-2.24,5-5V8c0-0.55,0.45-1,1-1H72 M72,4H56c-2.21,0-4,1.79-4,4v42c0,1.1-0.9,2-2,2H8c-2.21,0-4,1.79-4,4v16 c0,2.21,1.79,4,4,4h42c1.1,0,2,0.9,2,2v42c0,2.21,1.79,4,4,4h16c2.21,0,4-1.79,4-4V78c0-1.1,0.9-2,2-2h42c2.21,0,4-1.79,4-4V56 c0-2.21-1.79-4-4-4H78c-1.1,0-2-0.9-2-2V8C76,5.79,74.21,4,72,4L72,4z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default HeavyPlusSign;
