import React from "react";

function NewMoon(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <radialGradient
        id="d"
        cx={47.842}
        cy={28.923}
        r={95.191}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#868686" offset={0} />
        <stop stopColor="#424242" offset={1} />
      </radialGradient>
      <circle cx={64} cy={64} r={60} fill="url(#d)" />
      <circle cx={64} cy={64} r={60} fill="none" />
      <circle cx={64} cy={64} r={60} fill="none" />
      <g opacity={0.2}>
        <path
          d="M64,8c30.88,0,56,25.12,56,56s-25.12,56-56,56S8,94.88,8,64S33.12,8,64,8 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z"
          fill="#eee"
        />
      </g>
      <radialGradient
        id="c"
        cx={24.935}
        cy={82.26}
        r={19.126}
        gradientTransform="matrix(.8574 .5146 -.5146 .8574 48.223 -1.8498)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#212121" offset={0} />
        <stop stopColor="#242424" offset={0.2809} />
        <stop stopColor="#2D2D2D" offset={0.4902} />
        <stop stopColor="#3E3E3E" offset={0.6764} />
        <stop stopColor="#545454" offset={0.8481} />
        <stop stopColor="#616161" offset={0.9256} />
      </radialGradient>
      <path
        d="m40.16 92.16c-3.14 7.61-12.27 11.07-20.4 7.72s-12.16-12.23-9.02-19.85c3.14-7.61 12.27-11.07 20.4-7.72 8.12 3.35 12.16 12.24 9.02 19.85z"
        fill="url(#c)"
        opacity={0.3}
      />
      <radialGradient
        id="b"
        cx={38}
        cy={98.421}
        r={13.252}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#212121" offset={0} />
        <stop stopColor="#242424" offset={0.2809} />
        <stop stopColor="#2D2D2D" offset={0.4902} />
        <stop stopColor="#3E3E3E" offset={0.6764} />
        <stop stopColor="#545454" offset={0.8481} />
        <stop stopColor="#616161" offset={0.9256} />
      </radialGradient>
      <path
        d="m46.26 108.08c-0.77 4.08-4.68 6.76-8.74 6s-6.73-4.69-5.96-8.76c0.77-4.08 4.68-6.76 8.74-6s6.72 4.69 5.96 8.76z"
        fill="url(#b)"
        opacity={0.3}
      />
      <radialGradient
        id="a"
        cx={61.973}
        cy={102.24}
        r={17.206}
        gradientTransform="matrix(1.1129 0 0 .8206 -5.7845 21.164)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#212121" offset={0} />
        <stop stopColor="#242424" offset={0.2809} />
        <stop stopColor="#2D2D2D" offset={0.4902} />
        <stop stopColor="#3E3E3E" offset={0.6764} />
        <stop stopColor="#545454" offset={0.8481} />
        <stop stopColor="#616161" offset={0.9256} />
      </radialGradient>
      <ellipse
        cx={64.12}
        cy={108.5}
        rx={12.88}
        ry={9.5}
        fill="url(#a)"
        opacity={0.3}
      />
      <radialGradient
        id="h"
        cx={107.55}
        cy={48.462}
        r={11.738}
        gradientTransform="matrix(.0682 .9977 -1.0103 .069 145.32 -66.927)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#212121" offset={0} />
        <stop stopColor="#242424" offset={0.2809} />
        <stop stopColor="#2D2D2D" offset={0.4902} />
        <stop stopColor="#3E3E3E" offset={0.6764} />
        <stop stopColor="#545454" offset={0.8481} />
        <stop stopColor="#616161" offset={0.9256} />
      </radialGradient>
      <path
        d="m114.19 45.87c-0.12 5.46-4.74 9.78-10.32 9.66s-10.01-4.64-9.89-10.1 4.74-9.78 10.32-9.66c5.58 0.13 10.01 4.65 9.89 10.1z"
        fill="url(#h)"
        opacity={0.3}
      />
      <radialGradient
        id="g"
        cx={90.646}
        cy={103.4}
        r={14.343}
        fx={89.896}
        fy={102.54}
        gradientTransform="matrix(.9964 .0852 -.0775 .9066 21.54 -33.922)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#212121" offset={0} />
        <stop stopColor="#242424" offset={0.2809} />
        <stop stopColor="#2D2D2D" offset={0.4902} />
        <stop stopColor="#3E3E3E" offset={0.6764} />
        <stop stopColor="#545454" offset={0.8481} />
        <stop stopColor="#616161" offset={0.9256} />
      </radialGradient>
      <path
        d="m118.45 73.94c-0.49 5.69-5.48 9.92-11.15 9.43s-9.87-5.49-9.38-11.19c0.49-5.69 5.48-9.92 11.15-9.43s9.87 5.5 9.38 11.19z"
        fill="url(#g)"
        opacity={0.3}
      />
      <radialGradient
        id="f"
        cx={75.608}
        cy={62.011}
        r={7.4702}
        fx={75.218}
        fy={61.564}
        gradientTransform="matrix(.9964 .0852 -.0775 .9066 21.857 -37.637)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#212121" offset={0} />
        <stop stopColor="#242424" offset={0.2809} />
        <stop stopColor="#2D2D2D" offset={0.4902} />
        <stop stopColor="#3E3E3E" offset={0.6764} />
        <stop stopColor="#545454" offset={0.8481} />
        <stop stopColor="#616161" offset={0.9256} />
      </radialGradient>
      <path
        d="m98.24 26.11c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91 5.15 2.86 4.89 5.83z"
        fill="url(#f)"
        opacity={0.3}
      />
      <radialGradient
        id="e"
        cx={85.79}
        cy={123.41}
        r={12.604}
        fx={85.132}
        fy={122.66}
        gradientTransform="matrix(.9964 .0852 -.0775 .9066 21.386 -32.125)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#212121" offset={0} />
        <stop stopColor="#242424" offset={0.2809} />
        <stop stopColor="#2D2D2D" offset={0.4902} />
        <stop stopColor="#3E3E3E" offset={0.6764} />
        <stop stopColor="#545454" offset={0.8481} />
        <stop stopColor="#616161" offset={0.9256} />
      </radialGradient>
      <path
        d="m110.14 92.69c-0.43 5-4.81 8.72-9.79 8.29s-8.67-4.83-8.25-9.83 4.81-8.72 9.79-8.29c4.99 0.42 8.68 4.83 8.25 9.83z"
        fill="url(#e)"
        opacity={0.3}
      />
    </svg>
  );
}

export default NewMoon;
