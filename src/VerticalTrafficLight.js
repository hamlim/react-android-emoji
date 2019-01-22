import React from "react";

function VerticalTrafficLight(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="d"
        x1={64}
        x2={64}
        y1={5.3946}
        y2={121.39}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#212121" offset={0} />
        <stop stopColor="#242424" offset={0.3086} />
        <stop stopColor="#2D2D2D" offset={0.5332} />
        <stop stopColor="#3D3D3D" offset={0.7312} />
        <stop stopColor="#535353" offset={0.9127} />
        <stop stopColor="#616161" offset={1} />
      </linearGradient>
      <path
        d="m76.44 124h-24.88c-5.5 0-10-4.5-10-10v-100c0-5.5 4.5-10 10-10h24.88c5.5 0 10 4.5 10 10v100c0 5.5-4.5 10-10 10z"
        fill="url(#d)"
      />
      <radialGradient
        id="c"
        cx={60.105}
        cy={61.054}
        r={13.076}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEE58" offset={0.0014825} />
        <stop stopColor="#FDD743" offset={0.3529} />
        <stop stopColor="#FCC633" offset={0.7247} />
        <stop stopColor="#FBC02D" offset={1} />
      </radialGradient>
      <circle cx={64} cy={63.84} r={13.08} fill="url(#c)" />
      <radialGradient
        id="b"
        cx={59.966}
        cy={96.247}
        r={13.076}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#81C784" offset={0.0019061} />
        <stop stopColor="#77C07A" offset={0.1121} />
        <stop stopColor="#5AAF5E" offset={0.4646} />
        <stop stopColor="#49A44D" offset={0.7726} />
        <stop stopColor="#43A047" offset={1} />
      </radialGradient>
      <circle cx={64} cy={99.45} r={13.08} fill="url(#b)" />
      <g opacity={0.2}>
        <path
          d="m76.44 7.11c3.8 0 6.89 3.09 6.89 6.89v100c0 3.8-3.09 6.89-6.89 6.89h-24.88c-3.8 0-6.89-3.09-6.89-6.89v-100c0-3.8 3.09-6.89 6.89-6.89h24.88m0-3.11h-24.88c-5.5 0-10 4.5-10 10v100c0 5.5 4.5 10 10 10h24.88c5.5 0 10-4.5 10-10v-100c0-5.5-4.5-10-10-10z"
          fill="#eee"
        />
      </g>
      <radialGradient
        id="a"
        cx={59.92}
        cy={24.794}
        r={13.076}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E57373" offset={0} />
        <stop stopColor="#E56969" offset={0.1104} />
        <stop stopColor="#E54F4C" offset={0.4636} />
        <stop stopColor="#E53F3B" offset={0.7721} />
        <stop stopColor="#E53935" offset={1} />
      </radialGradient>
      <circle cx={64} cy={28.23} r={13.08} fill="url(#a)" />
    </svg>
  );
}

export default VerticalTrafficLight;
