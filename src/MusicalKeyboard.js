import React from "react";

function MusicalKeyboard(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <radialGradient
        id="b"
        cx={63.333}
        cy={3.3333}
        r={120.14}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#eee" offset={0} />
        <stop stopColor="#EBEBEB" offset={0.3167} />
        <stop stopColor="#E1E1E1" offset={0.5781} />
        <stop stopColor="#CFCFCF" offset={0.819} />
        <stop stopColor="#BDBDBD" offset={1} />
      </radialGradient>
      <rect x={4} y={4} width={120} height={120} fill="url(#b)" />
      <g opacity={0.2}>
        <path d="M121,7v114H7V7H121 M124,4H4v120h120V4L124,4z" fill="#424242" />
      </g>
      <radialGradient
        id="a"
        cx={63.667}
        cy={5.6667}
        r={109.36}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#616161" offset={0} />
        <stop stopColor="#5E5E5E" offset={0.2204} />
        <stop stopColor="#535353" offset={0.4074} />
        <stop stopColor="#424242" offset={0.5821} />
        <stop stopColor="#292929" offset={0.7485} />
        <stop stopColor="#212121" offset={0.7941} />
        <stop stopColor="#212121" offset={1} />
      </radialGradient>
      <path
        d="M4,4v24h16v60c0,2.21,1.79,4,4,4h12c2.21,0,4-1.79,4-4V28h14v60c0,2.21,1.79,4,4,4h12 c2.21,0,4-1.79,4-4V28h14v60c0,2.21,1.79,4,4,4h12c2.21,0,4-1.79,4-4V28h16V4H4z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="M121,7v18h-13c-1.66,0-3,1.34-3,3v60c0,0.55-0.45,1-1,1H92c-0.55,0-1-0.45-1-1V28c0-1.66-1.34-3-3-3 H74c-1.66,0-3,1.34-3,3v60c0,0.55-0.45,1-1,1H58c-0.55,0-1-0.45-1-1V28c0-1.66-1.34-3-3-3H40c-1.66,0-3,1.34-3,3v60 c0,0.55-0.45,1-1,1H24c-0.55,0-1-0.45-1-1V28c0-1.66-1.34-3-3-3H7V7H121 M124,4H4v24h16v60c0,2.21,1.79,4,4,4h12c2.21,0,4-1.79,4-4 V28h14v60c0,2.21,1.79,4,4,4h12c2.21,0,4-1.79,4-4V28h14v60c0,2.21,1.79,4,4,4h12c2.21,0,4-1.79,4-4V28h16V4L124,4z"
          fill="#eee"
        />
      </g>
      <rect x={40} y={28} width={14} height={56} fill="none" />
      <rect x={74} y={28} width={14} height={56} fill="none" />
      <rect x={7} y={20} width={114} height={8} fill="#424242" />
      <rect x={28} y={92} width={4} height={32} fill="#424242" />
      <rect x={62.06} y={92} width={4} height={32} fill="#424242" />
      <rect x={96} y={92} width={4} height={32} fill="#424242" />
    </svg>
  );
}

export default MusicalKeyboard;
