import React from "react";

function Ferry(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="f"
        x1={64}
        x2={64}
        y1={83.5}
        y2={125.65}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#29B6F6" offset={0} />
        <stop stopColor="#0288D1" offset={0.9826} />
      </linearGradient>
      <rect x={4} y={80} width={120} height={44} fill="url(#f)" />
      <g opacity={0.2}>
        <path d="m121 83v38h-114v-38h114m3-3h-120v44h120v-44z" fill="#424242" />
      </g>
      <path
        d="m110.91 41h-38.91v4h11v9h3v-9h8v9h4v-9h7v9h4v-9h1.46c1.14 0 2.54-0.56 2.54-1.79v-0.34c0-0.95-1.19-1.87-2.09-1.87z"
        fill="#212121"
      />
      <g opacity={0.2}>
        <path
          d="M111.19,42c0.27,0,0.81,0.41,0.81,0.88v0.34c0,0.22-0.47,0.79-1.54,0.79h-1.67 c-0.55,0-0.8,0.45-0.8,1v8h-2v-8c0-0.55-0.39-1-0.94-1h-7.48C97.03,44,97,44.45,97,45v8h-2v-8c0-0.55-0.6-1-1.16-1h-7.48 C85.82,44,85,44.45,85,45v8h-1v-8c0-0.55-0.82-1-1.37-1H73v-2h38 M110.91,41H72v4h11v9h3v-9h8v9h4v-9h7v9h4v-9h1.46 c1.14,0,2.54-0.56,2.54-1.79v-0.34c0-0.96-1.14-1.88-2.03-1.88H110.91z"
          fill="#eee"
        />
      </g>
      <path
        d="m54.48 22.5h-17.8c-1.4 0-2.54 1.19-2.57 2.69-0.03 1.53 1.14 2.78 2.57 2.74l3.27-0.09-13.9 20.09 41.98 0.54-7.82-20.47c-0.86-2.05-1.41-5.5-5.73-5.5zm-11.14 6.47c0.4-0.61 1.06-0.94 1.75-0.88 3.08 0.28 8.45 1.15 12.76 6.62l0.43 0.31-21.35 3.67 6.41-9.72z"
        fill="#212121"
      />
      <g opacity={0.2}>
        <path
          d="m54.48 23.5c3.02 0 3.71 1.9 4.44 3.91 0.12 0.34 0.24 0.67 0.36 0.95l7.29 19.09-38.63-0.5 12.83-18.55c0.21-0.31 0.24-0.71 0.06-1.05-0.18-0.32-0.51-0.52-0.88-0.52h-0.03l-3.31 0.09c-0.37 0-0.73-0.16-1.01-0.44-0.32-0.33-0.5-0.79-0.49-1.28 0.02-0.94 0.73-1.71 1.57-1.71h17.8m-17.54 16.2c0.06 0 0.11 0 0.17-0.01l21.35-3.67c0.4-0.07 0.71-0.37 0.8-0.76s-0.06-0.8-0.39-1.04l-0.32-0.23c-4.37-5.47-9.72-6.55-13.37-6.89-0.09-0.01-0.17-0.01-0.26-0.01-0.97 0-1.87 0.5-2.42 1.33l-6.4 9.72c-0.22 0.33-0.22 0.76 0 1.1 0.19 0.3 0.51 0.46 0.84 0.46m17.54-17.19h-17.8c-1.4 0-2.54 1.19-2.57 2.69-0.03 1.51 1.1 2.74 2.5 2.74h0.07l3.27-0.09-13.9 20.09 41.98 0.54-7.82-20.47c-0.86-2.05-1.41-5.5-5.73-5.5zm-17.54 16.19 6.4-9.72c0.37-0.56 0.96-0.88 1.59-0.88 0.06 0 0.11 0 0.17 0.01 3.08 0.28 8.45 1.15 12.76 6.62l0.43 0.31-21.35 3.66z"
          fill="#eee"
        />
      </g>
      <linearGradient
        id="e"
        x1={66.106}
        x2={66.106}
        y1={44}
        y2={80.004}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFAFA" offset={0} />
        <stop stopColor="#EFEFEF" offset={0.5098} />
        <stop stopColor="#E0E0E0" offset={1} />
      </linearGradient>
      <path
        d="m80.53 31.42s-26.92-0.03-28.69-0.03-3.76 0.51-6.58 1.22c-5.85 1.46-11.3 5.33-15.47 9.97-2.41 2.68-5.16 6.02-7.58 9.59-3.66 5.42-5.84 11.82-6.43 18.48l-0.43 4.89h100.92l-5.14-15.15c-0.49-1.26 0.37-2.65 1.64-2.65l3.03-0.01c0.76 0 1.27-0.84 0.96-1.58l-2.18-5.34c-0.43-1.06-1.42-1.75-2.5-1.75l-33.4 0.08c-0.88 0-1.67-0.55-2.03-1.42l-4.23-8.32c-0.27-0.67 0.19-1.43 0.88-1.43h6.61c4.09-0.04 4.09-6.55 0.62-6.55z"
        fill="url(#e)"
      />
      <path
        d="m58.8 27.83"
        fill="none"
        stroke="#f00"
        strokeMiterlimit={10}
        strokeWidth={0.25}
      />
      <path
        d="m21.14 54.36"
        fill="none"
        stroke="#f00"
        strokeMiterlimit={10}
        strokeWidth={0.25}
      />
      <path d="m86.97 53.46" fill="#808080" />
      <path d="m48.93 53.46" fill="#808080" />
      <polygon
        points="70.78 64.71 70.78 64.71 70.78 64.71 70.78 64.71 70.78 64.71 70.78 64.71 70.78 64.71"
        fill="#999"
      />
      <path
        d="m41.98 50.8h-4.07c-1.1 0-2-0.9-2-2v-4.03c0-1.1 0.9-2 2-2h4.07c1.1 0 2 0.9 2 2v4.03c0 1.11-0.9 2-2 2z"
        fill="#4FC3F7"
      />
      <path
        d="m54.01 50.8h-4.07c-1.1 0-2-0.9-2-2v-4.03c0-1.1 0.9-2 2-2h4.07c1.1 0 2 0.9 2 2v4.03c0 1.11-0.9 2-2 2z"
        fill="#4FC3F7"
      />
      <path
        d="m66.02 50.8h-4.07c-1.1 0-2-0.9-2-2v-4.03c0-1.1 0.9-2 2-2h4.07c1.1 0 2 0.9 2 2v4.03c0 1.11-0.89 2-2 2z"
        fill="#4FC3F7"
      />
      <g opacity={0.2}>
        <path
          d="m51.84 33.39c1.76 0 28.68 0.03 28.69 0.03 0.51 0 0.53 1.07 0.53 1.08 0 0.44-0.13 0.86-0.34 1.13-0.13 0.16-0.33 0.34-0.8 0.34h-6.61c-0.97 0-1.88 0.49-2.43 1.31-0.57 0.85-0.68 1.92-0.29 2.88 0.02 0.05 0.04 0.1 0.07 0.15l4.19 8.25c0.68 1.57 2.17 2.58 3.85 2.58l33.4-0.08c0.27 0 0.52 0.2 0.64 0.5l1.7 4.17-1.67 0.01c-1.23 0-2.38 0.63-3.09 1.66-0.73 1.08-0.89 2.45-0.43 3.67l4.23 12.47h-95.94l0.24-2.71c0.56-6.39 2.67-12.46 6.09-17.54 2.02-3 4.51-6.15 7.41-9.38 4.29-4.79 9.43-8.11 14.46-9.37l0.25-0.06c2.55-0.63 4.39-1.09 5.85-1.09m0-2c-1.76 0-3.76 0.51-6.58 1.22-5.85 1.46-11.3 5.33-15.47 9.97-2.41 2.68-5.16 6.02-7.58 9.59-3.66 5.42-5.84 11.82-6.43 18.48l-0.43 4.89h100.92l-5.14-15.15c-0.49-1.26 0.37-2.65 1.64-2.65l3.03-0.01c0.76 0 1.27-0.84 0.96-1.58l-2.18-5.34c-0.43-1.06-1.41-1.75-2.49-1.75h-0.01l-33.4 0.08c-0.88 0-1.67-0.56-2.02-1.42l-4.23-8.32c-0.27-0.67 0.19-1.43 0.88-1.43h6.61c4.08 0 4.08-6.56 0.61-6.56 0 0.01-26.93-0.02-28.69-0.02z"
          fill="#424242"
        />
      </g>
      <defs>
        <polygon
          id="d"
          points="120 72 8 72 8 75.43 12.08 88.13 116.3 88.01 120 75.43"
        />
      </defs>
      <clipPath id="c">
        <use xlinkHref="#d" />
      </clipPath>
      <rect
        x={3.92}
        y={75.42}
        width={120.14}
        height={12.58}
        clipPath="url(#c)"
        fill="#B2DFDB"
      />
      <polygon
        points="120.01 72 8 72 8 76 12.08 88.1 116.3 87.96 120.14 76"
        fill="#01579B"
      />
      <defs>
        <polygon
          id="b"
          points="120.01 72 8 72 8 76 12.08 88.1 116.3 87.96 120.14 76"
        />
      </defs>
      <clipPath id="a">
        <use xlinkHref="#b" />
      </clipPath>
      <rect
        x={7.06}
        y={76.12}
        width={113.77}
        height={3.21}
        clipPath="url(#a)"
        fill="#DCEDC8"
      />
      <path
        d="m35.01 68.12h-4.63c-1.1 0-2-0.9-2-2v-6.7c0-1.1 0.9-2 2-2h4.63c1.1 0 2 0.9 2 2v6.7c0 1.11-0.89 2-2 2z"
        fill="#4FC3F7"
      />
      <g opacity={0.2}>
        <path
          d="m35.01 58.43c0.55 0 1 0.45 1 1v6.7c0 0.55-0.45 1-1 1h-4.63c-0.55 0-1-0.45-1-1v-6.7c0-0.55 0.45-1 1-1h4.63m0-1h-4.63c-1.1 0-2 0.9-2 2v6.7c0 1.1 0.9 2 2 2h4.63c1.1 0 2-0.9 2-2v-6.7c0-1.11-0.89-2-2-2z"
          fill="#424242"
        />
      </g>
      <path
        d="m97.81 68.12h-4.63c-1.1 0-2-0.9-2-2v-6.7c0-1.1 0.9-2 2-2h4.63c1.1 0 2 0.9 2 2v6.7c0 1.11-0.89 2-2 2z"
        fill="#4FC3F7"
      />
      <g opacity={0.2}>
        <path
          d="m97.81 58.43c0.55 0 1 0.45 1 1v6.7c0 0.55-0.45 1-1 1h-4.63c-0.55 0-1-0.45-1-1v-6.7c0-0.55 0.45-1 1-1h4.63m0-1h-4.63c-1.1 0-2 0.9-2 2v6.7c0 1.1 0.9 2 2 2h4.63c1.1 0 2-0.9 2-2v-6.7c0-1.11-0.89-2-2-2z"
          fill="#424242"
        />
      </g>
      <path
        d="m50.71 68.12h-4.63c-1.1 0-2-0.9-2-2v-6.7c0-1.1 0.9-2 2-2h4.63c1.1 0 2 0.9 2 2v6.7c0 1.11-0.89 2-2 2z"
        fill="#4FC3F7"
      />
      <g opacity={0.2}>
        <path
          d="m50.71 58.43c0.55 0 1 0.45 1 1v6.7c0 0.55-0.45 1-1 1h-4.63c-0.55 0-1-0.45-1-1v-6.7c0-0.55 0.45-1 1-1h4.63m0-1h-4.63c-1.1 0-2 0.9-2 2v6.7c0 1.1 0.9 2 2 2h4.63c1.1 0 2-0.9 2-2v-6.7c0-1.11-0.89-2-2-2z"
          fill="#424242"
        />
      </g>
      <path
        d="m66.41 68.12h-4.63c-1.1 0-2-0.9-2-2v-6.7c0-1.1 0.9-2 2-2h4.63c1.1 0 2 0.9 2 2v6.7c0 1.11-0.89 2-2 2z"
        fill="#4FC3F7"
      />
      <g opacity={0.2}>
        <path
          d="m66.41 58.43c0.55 0 1 0.45 1 1v6.7c0 0.55-0.45 1-1 1h-4.63c-0.55 0-1-0.45-1-1v-6.7c0-0.55 0.45-1 1-1h4.63m0-1h-4.63c-1.1 0-2 0.9-2 2v6.7c0 1.1 0.9 2 2 2h4.63c1.1 0 2-0.9 2-2v-6.7c0-1.11-0.89-2-2-2z"
          fill="#424242"
        />
      </g>
      <path
        d="m82.11 68.12h-4.63c-1.1 0-2-0.9-2-2v-6.7c0-1.1 0.9-2 2-2h4.63c1.1 0 2 0.9 2 2v6.7c0 1.11-0.89 2-2 2z"
        fill="#4FC3F7"
      />
      <g opacity={0.2}>
        <path
          d="m82.11 58.43c0.55 0 1 0.45 1 1v6.7c0 0.55-0.45 1-1 1h-4.63c-0.55 0-1-0.45-1-1v-6.7c0-0.55 0.45-1 1-1h4.63m0-1h-4.63c-1.1 0-2 0.9-2 2v6.7c0 1.1 0.9 2 2 2h4.63c1.1 0 2-0.9 2-2v-6.7c0-1.11-0.89-2-2-2z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m41.98 43.77c0.55 0 1 0.45 1 1v4.03c0 0.55-0.45 1-1 1h-4.07c-0.55 0-1-0.45-1-1v-4.03c0-0.55 0.45-1 1-1h4.07m0-1h-4.07c-1.1 0-2 0.9-2 2v4.03c0 1.1 0.9 2 2 2h4.07c1.1 0 2-0.9 2-2v-4.03c0-1.11-0.9-2-2-2z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m54.01 43.77c0.55 0 1 0.45 1 1v4.03c0 0.55-0.45 1-1 1h-4.07c-0.55 0-1-0.45-1-1v-4.03c0-0.55 0.45-1 1-1h4.07m0-1h-4.07c-1.1 0-2 0.9-2 2v4.03c0 1.1 0.9 2 2 2h4.07c1.1 0 2-0.9 2-2v-4.03c0-1.11-0.9-2-2-2z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m66.02 43.77c0.55 0 1 0.45 1 1v4.03c0 0.55-0.45 1-1 1h-4.07c-0.55 0-1-0.45-1-1v-4.03c0-0.55 0.45-1 1-1h4.07m0-1h-4.07c-1.1 0-2 0.9-2 2v4.03c0 1.1 0.9 2 2 2h4.07c1.1 0 2-0.9 2-2v-4.03c0-1.11-0.89-2-2-2z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m118.04 74 0.07 1.72-3.28 10.24-101.32 0.14-3.51-10.43v-1.67h108m2.01-2h-112.01v4l4.08 12.1 104.22-0.14 3.84-11.96-0.13-4z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default Ferry;
