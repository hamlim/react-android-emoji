import React from "react";

function Pill(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <radialGradient
        id="b"
        cx={68}
        cy={64.667}
        r={68.55}
        gradientTransform="matrix(.6516 .7586 -.5017 .4309 56.134 -14.783)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EF5350" offset={0} />
        <stop stopColor="#D83534" offset={0.6263} />
        <stop stopColor="#D32F2F" offset={0.7356} />
        <stop stopColor="#D32F2F" offset={1} />
      </radialGradient>
      <path
        d="m74.06 115.46c11.38 11.38 30.01 11.38 41.4 0 11.38-11.38 11.38-30.01 0-41.4l-30.76-30.76-41.4 41.4 30.76 30.76z"
        fill="url(#b)"
      />
      <radialGradient
        id="a"
        cx={16.667}
        cy={15.667}
        r={66.946}
        gradientTransform="matrix(.7071 .7071 -.5565 .5565 13.599 -4.8363)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEB3B" offset={0} />
        <stop stopColor="#FEE439" offset={0.349} />
        <stop stopColor="#FDD835" offset={0.6698} />
        <stop stopColor="#FBC02D" offset={0.9954} />
      </radialGradient>
      <path
        d="m84.7 43.3-30.76-30.76c-11.38-11.38-30.01-11.38-41.4 0-11.38 11.38-11.38 30.01 0 41.4l30.76 30.76 41.4-41.4z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m33.24 7c7.04 0 13.64 2.72 18.58 7.66l61.52 61.52c4.94 4.94 7.66 11.54 7.66 18.58s-2.72 13.64-7.66 18.58-11.54 7.66-18.58 7.66-13.64-2.72-18.58-7.66l-61.52-61.52c-4.94-4.94-7.66-11.54-7.66-18.58s2.72-13.64 7.66-18.58 11.54-7.66 18.58-7.66m0-3c-7.5 0-15.01 2.85-20.7 8.54-11.38 11.38-11.38 30.01 0 41.4l61.52 61.52c5.69 5.69 13.2 8.54 20.7 8.54s15.01-2.85 20.7-8.54c11.38-11.38 11.38-30.01 0-41.4l-61.52-61.52c-5.69-5.69-13.2-8.54-20.7-8.54z"
          fill="#424242"
        />
      </g>
      <rect
        transform="matrix(-.7071 .7071 -.7071 -.7071 157.07 65.061)"
        x={35.79}
        y={63.56}
        width={58.55}
        height={3}
        fill="#424242"
        opacity={0.2}
      />
    </svg>
  );
}

export default Pill;
