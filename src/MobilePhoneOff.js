import React from "react";

function MobilePhoneOff(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="g"
        x1={63.986}
        x2={63.986}
        y1={3.4016}
        y2={125.11}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#616161" offset={0} />
        <stop stopColor="#212121" offset={1} />
      </linearGradient>
      <path
        d="m92.3 7.31c-3.1-0.8-11.31-3.31-28.31-3.31s-26.62 2.81-28.32 3.31c-2.1 0.5-3.69 2.59-3.69 4.69v104c0 2.1 1.59 4.19 3.69 4.69 1.7 0.5 11.31 3.31 28.31 3.31s25.21-2.51 28.31-3.31c2.1-0.5 3.69-2.59 3.69-4.69v-104c0.01-2.1-1.58-4.19-3.68-4.69z"
        fill="url(#g)"
      />
      <path
        d="m77.99 116h-28c-1.1 0-2-0.9-2-2s0.9-2 2-2h28c1.1 0 2 0.9 2 2s-0.9 2-2 2z"
        fill="#212121"
      />
      <radialGradient
        id="f"
        cx={63.236}
        cy={24.5}
        r={79.857}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#757575" offset={0} />
        <stop stopColor="#424242" offset={1} />
      </radialGradient>
      <path
        d="m85.99 104h-44c-1.1 0-2-0.9-2-2v-76c0-1.1 0.9-2 2-2h44c1.1 0 2 0.9 2 2v76c0 1.1-0.9 2-2 2z"
        fill="url(#f)"
      />
      <g opacity={0.2}>
        <path
          d="m77.99 113c0.55 0 1 0.45 1 1s-0.45 1-1 1h-28c-0.55 0-1-0.45-1-1s0.45-1 1-1h28m0-1h-28c-1.1 0-2 0.9-2 2s0.9 2 2 2h28c1.1 0 2-0.9 2-2s-0.9-2-2-2z"
          fill="#eee"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m85.99 24c1.1 0 2 0.9 2 2v76c0 1.1-0.9 2-2 2h-44c-1.1 0-2-0.9-2-2v-76c0-1.1 0.9-2 2-2h44m0-3h-44c-2.76 0-5 2.24-5 5v76c0 2.76 2.24 5 5 5h44c2.76 0 5-2.24 5-5v-76c0-2.76-2.25-5-5-5z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m63.99 7c15.45 0 23.43 2.12 26.84 3.03 0.27 0.07 0.51 0.14 0.73 0.19l0.06 0.02c0.71 0.17 1.38 1.03 1.38 1.77v103.99c0 0.74-0.67 1.6-1.38 1.77l-0.06 0.02c-0.22 0.06-0.46 0.12-0.73 0.19-3.41 0.91-11.39 3.03-26.84 3.03-15 0-24.2-2.23-27.47-3.19l-0.16-0.04c-0.71-0.17-1.38-1.03-1.38-1.77v-104.01c0-0.74 0.67-1.6 1.38-1.77l0.16-0.04c3.26-0.96 12.47-3.19 27.47-3.19m0-3c-17 0-26.61 2.81-28.31 3.31-2.1 0.5-3.69 2.59-3.69 4.69v104c0 2.1 1.59 4.19 3.69 4.69 1.7 0.5 11.31 3.31 28.31 3.31s25.21-2.51 28.31-3.31c2.1-0.5 3.69-2.59 3.69-4.69v-104c0-2.1-1.59-4.19-3.69-4.69-3.1-0.8-11.31-3.31-28.31-3.31z"
          fill="#eee"
        />
      </g>
      <defs>
        <path
          id="e"
          d="m92.3 7.31c-3.1-0.8-11.31-3.31-28.31-3.31s-26.62 2.81-28.32 3.31c-2.1 0.5-3.69 2.59-3.69 4.69v104c0 2.1 1.59 4.19 3.69 4.69 1.7 0.5 11.31 3.31 28.31 3.31s25.21-2.51 28.31-3.31c2.1-0.5 3.69-2.59 3.69-4.69v-104c0.01-2.1-1.58-4.19-3.68-4.69z"
        />
      </defs>
      <clipPath id="d">
        <use xlinkHref="#e" />
      </clipPath>
      <g clipPath="url(#d)" fill="#424242" opacity={0.2}>
        <path d="m25.54 38.71c4.17 0 7.89 0.99 11.16 2.98 3.27 1.98 5.81 4.81 7.62 8.47s2.73 7.86 2.76 12.6v2.27c0 4.8-0.89 9.05-2.67 12.75s-4.31 6.54-7.59 8.54c-3.28 1.99-7.02 2.99-11.21 2.99s-7.91-0.96-11.16-2.89-5.78-4.68-7.59-8.27c-1.82-3.6-2.77-7.71-2.86-12.36v-2.77c0-4.82 0.88-9.08 2.65-12.76 1.77-3.69 4.3-6.53 7.61-8.54 3.3-2.01 7.06-3.01 11.28-3.01m0.07 41.32c3 0 5.31-1.27 6.93-3.82s2.45-6.21 2.47-10.99v-2.27c0-4.89-0.82-8.61-2.45-11.14-1.63-2.54-3.97-3.8-7.02-3.8-5.95 0-9.1 4.46-9.43 13.39l-0.03 3.62c0 4.82 0.8 8.53 2.4 11.12 1.59 2.59 3.97 3.89 7.13 3.89m-0.07-44.32c-4.75 0-9.07 1.16-12.83 3.45-3.79 2.3-6.74 5.6-8.75 9.8-1.97 4.07-2.96 8.8-2.96 14.06v2.77 0.06c0.1 5.08 1.17 9.67 3.18 13.64 2.07 4.08 5.01 7.28 8.74 9.49 3.7 2.2 7.97 3.31 12.69 3.31 4.73 0 9.03-1.15 12.77-3.43 3.77-2.29 6.71-5.59 8.73-9.8 1.97-4.09 2.97-8.82 2.97-14.05v-2.27c-0.02-5.19-1.06-9.87-3.07-13.93-2.06-4.16-5.01-7.43-8.76-9.7-3.73-2.25-8-3.4-12.71-3.4zm-6.44 25.76c0.41-10.46 4.63-10.46 6.43-10.46 2.03 0 3.41 0.75 4.49 2.43 1.31 2.03 1.97 5.23 1.97 9.52v2.27c-0.02 4.17-0.69 7.33-2 9.38-1.07 1.68-2.43 2.43-4.4 2.43-2.12 0-3.53-0.76-4.58-2.46-1.3-2.1-1.95-5.31-1.95-9.55l0.04-3.56z" />
        <path d="m84.13 39.38c1.1 0 2 0.9 2 2v5.16c0 1.1-0.9 2-2 2h-17.06c-1.1 0-2 0.9-2 2v7.33c0 1.1 0.9 2 2 2h15.13c1.1 0 2 0.9 2 2v5.13c0 1.1-0.9 2-2 2h-15.13c-1.1 0-2 0.9-2 2v15.61c0 1.1-0.9 2-2 2h-7.87c-1.1 0-2-0.9-2-2v-45.23c0-1.1 0.9-2 2-2h28.93m0-3h-28.93c-2.76 0-5 2.24-5 5v45.23c0 2.76 2.24 5 5 5h7.87c2.76 0 5-2.24 5-5v-14.61h14.13c2.76 0 5-2.24 5-5v-5.13c0-2.76-2.24-5-5-5h-14.13v-5.33h16.06c2.76 0 5-2.24 5-5v-5.16c0-2.75-2.24-5-5-5z" />
        <path d="m122 39.38c1.1 0 2 0.9 2 2v5.16c0 1.1-0.9 2-2 2h-17.06c-1.1 0-2 0.9-2 2v7.33c0 1.1 0.9 2 2 2h15.14c1.1 0 2 0.9 2 2v5.13c0 1.1-0.9 2-2 2h-15.14c-1.1 0-2 0.9-2 2v15.61c0 1.1-0.9 2-2 2h-7.87c-1.1 0-2-0.9-2-2v-45.23c0-1.1 0.9-2 2-2h28.93m0-3h-28.93c-2.76 0-5 2.24-5 5v45.23c0 2.76 2.24 5 5 5h7.87c2.76 0 5-2.24 5-5v-14.61h14.14c2.76 0 5-2.24 5-5v-5.13c0-2.76-2.24-5-5-5h-14.14v-5.33h16.06c2.76 0 5-2.24 5-5v-5.16c0-2.75-2.24-5-5-5z" />
      </g>
      <linearGradient
        id="c"
        x1={25.538}
        x2={25.538}
        y1={38.805}
        y2={89.388}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9100" offset={0} />
        <stop stopColor="#FF8100" offset={0.4983} />
        <stop stopColor="#FF6D00" offset={1} />
      </linearGradient>
      <path
        d="m47.08 65.01c0 4.8-0.89 9.05-2.67 12.75s-4.31 6.54-7.59 8.54c-3.28 1.99-7.02 2.99-11.21 2.99s-7.91-0.96-11.16-2.89-5.78-4.68-7.59-8.27c-1.82-3.58-2.77-7.69-2.86-12.34v-2.77c0-4.82 0.88-9.08 2.65-12.76 1.77-3.69 4.3-6.53 7.61-8.54 3.3-2.01 7.06-3.01 11.28-3.01 4.17 0 7.89 0.99 11.16 2.98 3.27 1.98 5.81 4.81 7.62 8.47s2.73 7.86 2.76 12.6v2.25zm-12.07-2.06c0-4.89-0.82-8.61-2.45-11.14-1.63-2.54-3.97-3.8-7.02-3.8-5.95 0-9.1 4.46-9.43 13.39l-0.03 3.62c0 4.82 0.8 8.53 2.4 11.12s3.98 3.89 7.13 3.89c3 0 5.31-1.27 6.93-3.82s2.45-6.21 2.47-10.99v-2.27z"
        fill="url(#c)"
      />
      <linearGradient
        id="b"
        x1={69.663}
        x2={69.663}
        y1={38.805}
        y2={89.42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9100" offset={0} />
        <stop stopColor="#FF8100" offset={0.4983} />
        <stop stopColor="#FF6D00" offset={1} />
      </linearGradient>
      <path
        d="m82.2 69h-15.13c-1.1 0-2 0.9-2 2v15.61c0 1.1-0.9 2-2 2h-7.87c-1.1 0-2-0.9-2-2v-45.23c0-1.1 0.9-2 2-2h28.93c1.1 0 2 0.9 2 2v5.16c0 1.1-0.9 2-2 2h-17.06c-1.1 0-2 0.9-2 2v7.33c0 1.1 0.9 2 2 2h15.13c1.1 0 2 0.9 2 2v5.13c0 1.11-0.89 2-2 2z"
        fill="url(#b)"
      />
      <linearGradient
        id="a"
        x1={107.53}
        x2={107.53}
        y1={38.805}
        y2={89.42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9100" offset={0} />
        <stop stopColor="#FF8100" offset={0.4983} />
        <stop stopColor="#FF6D00" offset={1} />
      </linearGradient>
      <path
        d="m120.07 69h-15.14c-1.1 0-2 0.9-2 2v15.61c0 1.1-0.9 2-2 2h-7.87c-1.1 0-2-0.9-2-2v-45.23c0-1.1 0.9-2 2-2h28.94c1.1 0 2 0.9 2 2v5.16c0 1.1-0.9 2-2 2h-17.06c-1.1 0-2 0.9-2 2v7.33c0 1.1 0.9 2 2 2h15.14c1.1 0 2 0.9 2 2v5.13c-0.01 1.11-0.9 2-2.01 2z"
        fill="url(#a)"
      />
      <g fill="#424242" opacity={0.2}>
        <path d="m25.54 41.71c3.64 0 6.78 0.83 9.6 2.54 2.8 1.7 4.92 4.07 6.49 7.24 1.6 3.23 2.42 7.03 2.44 11.26v2.27c0 4.32-0.8 8.17-2.37 11.44-1.54 3.19-3.65 5.57-6.45 7.28-2.83 1.72-5.98 2.56-9.65 2.56-3.63 0-6.86-0.83-9.63-2.47-2.77-1.65-4.88-3.95-6.45-7.04-1.58-3.17-2.44-6.87-2.52-11.03v-2.74c0-4.35 0.79-8.21 2.36-11.47 1.53-3.18 3.64-5.56 6.46-7.27 2.85-1.73 6.03-2.57 9.72-2.57m0.07 41.32c4.02 0 7.29-1.8 9.46-5.21 1.95-3.06 2.91-7.18 2.94-12.6v-2.27c0-5.53-0.96-9.71-2.93-12.77-2.18-3.39-5.48-5.18-9.54-5.18-10.28 0-12.2 10.2-12.43 16.28v0.09l-0.03 3.65c0 5.44 0.93 9.6 2.85 12.7 2.13 3.47 5.48 5.31 9.68 5.31m-0.07-44.32c-4.22 0-7.97 1-11.28 3.01-3.3 2.01-5.84 4.85-7.61 8.54-1.77 3.68-2.65 7.94-2.65 12.76v2.77c0.09 4.64 1.04 8.76 2.86 12.34 1.81 3.58 4.34 6.34 7.59 8.27s6.97 2.89 11.16 2.89 7.93-1 11.21-2.99 5.81-4.84 7.59-8.54 2.67-7.95 2.67-12.75v-2.27c-0.02-4.73-0.94-8.93-2.76-12.6-1.81-3.66-4.36-6.49-7.62-8.47-3.27-1.97-6.99-2.96-11.16-2.96zm0.07 41.32c-3.16 0-5.53-1.3-7.13-3.89s-2.4-6.3-2.4-11.12l0.03-3.62c0.34-8.93 3.48-13.39 9.43-13.39 3.04 0 5.38 1.27 7.02 3.8 1.63 2.54 2.45 6.25 2.45 11.14v2.27c-0.02 4.78-0.85 8.44-2.47 10.99-1.63 2.54-3.94 3.82-6.93 3.82z" />
        <path d="m83.13 42.38v3.16h-16.06c-2.76 0-5 2.24-5 5v7.33c0 2.76 2.24 5 5 5h14.13v3.13h-14.13c-2.76 0-5 2.24-5 5v14.61h-5.87v-43.23h26.93m1-3h-28.93c-1.1 0-2 0.9-2 2v45.23c0 1.1 0.9 2 2 2h7.87c1.1 0 2-0.9 2-2v-15.61c0-1.1 0.9-2 2-2h15.13c1.1 0 2-0.9 2-2v-5.13c0-1.1-0.9-2-2-2h-15.13c-1.1 0-2-0.9-2-2v-7.33c0-1.1 0.9-2 2-2h17.06c1.1 0 2-0.9 2-2v-5.16c0-1.1-0.9-2-2-2z" />
        <path d="m121 42.38v3.16h-16.06c-2.76 0-5 2.24-5 5v7.33c0 2.76 2.24 5 5 5h14.14v3.13h-14.14c-2.76 0-5 2.24-5 5v14.61h-5.87v-43.23h26.93m1-3h-28.93c-1.1 0-2 0.9-2 2v45.23c0 1.1 0.9 2 2 2h7.87c1.1 0 2-0.9 2-2v-15.61c0-1.1 0.9-2 2-2h15.14c1.1 0 2-0.9 2-2v-5.13c0-1.1-0.9-2-2-2h-15.14c-1.1 0-2-0.9-2-2v-7.33c0-1.1 0.9-2 2-2h17.06c1.1 0 2-0.9 2-2v-5.16c0-1.1-0.9-2-2-2z" />
      </g>
    </svg>
  );
}

export default MobilePhoneOff;
