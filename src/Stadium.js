import React from "react";

function Stadium(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <g fill="#BDBDBD">
        <rect x={19} y={24} width={4} height={24} />
        <rect x={39} y={24} width={4} height={24} />
      </g>
      <g fill="#BDBDBD">
        <rect x={85} y={24} width={4} height={24} />
        <rect x={105} y={24} width={4} height={24} />
      </g>
      <linearGradient
        id="f"
        x1={64}
        x2={64}
        y1={32}
        y2={86.333}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DD2C00" offset={0} />
        <stop stopColor="#E03200" offset={0.0607} />
        <stop stopColor="#F15200" offset={0.451} />
        <stop stopColor="#FB6600" offset={0.778} />
        <stop stopColor="#FF6D00" offset={1} />
      </linearGradient>
      <path
        d="M124,58c0-14.36-26.86-26-60-26S4,43.64,4,58c0,0.23,0.03,0.46,0.04,0.69H4l2.17,27.64 l115.32-5.24l2.51-22.4h-0.04C123.97,58.46,124,58.23,124,58z"
        fill="url(#f)"
      />
      <g fill="#424242" opacity={0.2}>
        <path d="m22 25v22h-2v-22h2m1-1h-4v24h4v-24z" />
        <path d="m42 25v22h-2v-22h2m1-1h-4v24h4v-24z" />
      </g>
      <g fill="#424242" opacity={0.2}>
        <path d="m88 25v22h-2v-22h2m1-1h-4v24h4v-24z" />
        <path d="m108 25v22h-2v-22h2m1-1h-4v24h4v-24z" />
      </g>
      <linearGradient
        id="e"
        x1={63.917}
        x2={63.917}
        y1={66.847}
        y2={30.094}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DD2C00" offset={0} />
        <stop stopColor="#E03200" offset={0.0607} />
        <stop stopColor="#F15200" offset={0.451} />
        <stop stopColor="#FB6600" offset={0.778} />
        <stop stopColor="#FF6D00" offset={1} />
      </linearGradient>
      <ellipse cx={63.92} cy={58.89} rx={56.08} ry={26} fill="url(#e)" />
      <linearGradient
        id="c"
        x1={51.17}
        x2={30.67}
        y1={58.658}
        y2={39.658}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFAB91" offset={0} />
        <stop stopColor="#FF7043" offset={1} />
      </linearGradient>
      <path
        d="m35.85 36.89s-1.25-0.75-12.02 4l36.05 24h4.01l-28.04-28z"
        fill="url(#c)"
      />
      <linearGradient
        id="b"
        x1={79.659}
        x2={94.659}
        y1={58.309}
        y2={38.809}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFAB91" offset={0} />
        <stop stopColor="#FF7043" offset={1} />
      </linearGradient>
      <path
        d="m91.87 36.85s1.25-0.75 12.02 4l-36.05 24h-4.01l28.04-28z"
        fill="url(#b)"
      />
      <ellipse cx={63.83} cy={78.85} rx={44} ry={22} fill="#E0E0E0" />
      <linearGradient
        id="a"
        x1={63.917}
        x2={63.917}
        y1={62.167}
        y2={81.621}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C6FF00" offset={0} />
        <stop stopColor="#C1FA00" offset={0.4064} />
        <stop stopColor="#B2ED00" offset={0.9047} />
        <stop stopColor="#AEEA00" offset={1} />
      </linearGradient>
      <ellipse cx={63.92} cy={78.89} rx={40.06} ry={18} fill="url(#a)" />
      <rect x={63.5} y={60.89} width={1} height={26.16} fill="#FAFAFA" />
      <path
        d="m36.06 83.17h-1v-10.67h-8.6s0.32-0.41 0.41-0.5c0.34-0.35 0.5-0.5 0.5-0.5h8.69v11.67z"
        fill="#FAFAFA"
      />
      <path
        d="m91.92 83.18h1v-10.66h8.46s-0.32-0.41-0.41-0.5c-0.34-0.35-0.5-0.5-0.5-0.5h-8.56v11.66z"
        fill="#FAFAFA"
      />
      <path
        d="m47.72 84.75c-0.1-0.51-0.18-1.03-0.18-1.57 0-6.27 7.38-11.38 16.46-11.38s16.46 5.1 16.46 11.38c0 0.53-0.07 1.05-0.18 1.57h1.02c0.09-0.51 0.16-1.04 0.16-1.57 0-6.82-7.83-12.38-17.46-12.38s-17.46 5.55-17.46 12.38c0 0.53 0.06 1.05 0.16 1.57h1.02z"
        fill="#FAFAFA"
      />
      <path
        d="m64 105.07c-25.83-0.02-50.54-9.55-60-19.6v4.06c10.74 9.37 34.06 18.45 60 18.47 25.94-0.02 49.26-9.1 60-18.47v-4.06c-9.46 10.05-34.17 19.58-60 19.6z"
        fill="#E0E0E0"
        opacity={0.5}
      />
      <rect x={63.5} y={60.89} width={1} height={26.16} fill="#FAFAFA" />
      <path
        d="m36.06 83.17h-1v-10.67h-8.6s0.32-0.41 0.41-0.5c0.34-0.35 0.5-0.5 0.5-0.5h8.69v11.67z"
        fill="#FAFAFA"
      />
      <path
        d="m91.92 83.18h1v-10.66h8.46s-0.32-0.41-0.41-0.5c-0.34-0.35-0.5-0.5-0.5-0.5h-8.56v11.66z"
        fill="#FAFAFA"
      />
      <path
        d="m47.72 84.75c-0.1-0.51-0.18-1.03-0.18-1.57 0-6.27 7.38-11.38 16.46-11.38s16.46 5.1 16.46 11.38c0 0.53-0.07 1.05-0.18 1.57h1.02c0.09-0.51 0.16-1.04 0.16-1.57 0-6.82-7.83-12.38-17.46-12.38s-17.46 5.55-17.46 12.38c0 0.53 0.06 1.05 0.16 1.57h1.02z"
        fill="#FAFAFA"
      />
      <path
        d="m64 105.07c-25.83-0.02-50.54-9.55-60-19.6v4.06c10.74 9.37 34.06 18.45 60 18.47 25.94-0.02 49.26-9.1 60-18.47v-4.06c-9.46 10.05-34.17 19.58-60 19.6z"
        fill="#E0E0E0"
        opacity={0.5}
      />
      <linearGradient
        id="d"
        x1={63.872}
        x2={63.872}
        y1={66.847}
        y2={30.094}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DD2C00" offset={0} />
        <stop stopColor="#E03200" offset={0.0607} />
        <stop stopColor="#F15200" offset={0.451} />
        <stop stopColor="#FB6600" offset={0.778} />
        <stop stopColor="#FF6D00" offset={1} />
      </linearGradient>
      <ellipse cx={63.87} cy={58.89} rx={56.62} ry={26} fill="url(#d)" />
      <path
        d="m35.85 36.89s-1.25-0.75-12.02 4l36.05 24h4.01l-28.04-28z"
        fill="url(#c)"
      />
      <path
        d="m91.87 36.85s1.25-0.75 12.02 4l-36.05 24h-4.01l28.04-28z"
        fill="url(#b)"
      />
      <ellipse cx={63.83} cy={78.85} rx={44} ry={22} fill="#eee" />
      <ellipse cx={63.92} cy={78.89} rx={40.06} ry={18} fill="url(#a)" />
      <linearGradient
        id="o"
        x1={63.917}
        x2={63.917}
        y1={87.635}
        y2={67.337}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D4E157" offset={0} />
        <stop stopColor="#D4E157" stopOpacity={0} offset={1} />
      </linearGradient>
      <ellipse cx={63.92} cy={78.89} rx={40.06} ry={18} fill="url(#o)" />
      <linearGradient
        id="n"
        x1={64}
        x2={64}
        y1={62.266}
        y2={130.46}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E0E0E0" offset={0} />
        <stop stopColor="#D8D8D8" offset={0.2232} />
        <stop stopColor="#C2C2C2" offset={0.5696} />
        <stop stopColor="#9F9F9F" offset={0.994} />
        <stop stopColor="#9E9E9E" offset={1} />
      </linearGradient>
      <path
        d="m123.81 60c-2.36 13.42-28.26 24-59.89 24s-57.53-10.58-59.89-24l-0.03-1.11v41.07c2.36 13.42 28.29 24.04 59.92 24.04s57.72-10.58 60.08-24v-41.31l-0.19 1.31z"
        fill="url(#n)"
      />
      <linearGradient
        id="m"
        x1={4.0324}
        x2={4.0324}
        y1={63.5}
        y2={130.33}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E0E0E0" offset={0} />
        <stop stopColor="#D8D8D8" offset={0.2232} />
        <stop stopColor="#C2C2C2" offset={0.5696} />
        <stop stopColor="#9F9F9F" offset={0.994} />
        <stop stopColor="#9E9E9E" offset={1} />
      </linearGradient>
      <path
        d="M4.06,59.07C4.03,58.71,4,58.36,4,58C4,58.36,4.03,58.71,4.06,59.07z"
        fill="url(#m)"
      />
      <linearGradient
        id="l"
        x1={123.97}
        x2={123.97}
        y1={63.5}
        y2={130.33}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E0E0E0" offset={0} />
        <stop stopColor="#D8D8D8" offset={0.2232} />
        <stop stopColor="#C2C2C2" offset={0.5696} />
        <stop stopColor="#9F9F9F" offset={0.994} />
        <stop stopColor="#9E9E9E" offset={1} />
      </linearGradient>
      <path
        d="m123.94 59.07c0.04-0.35 0.06-0.71 0.06-1.07 0 0.36-0.03 0.71-0.06 1.07z"
        fill="url(#l)"
      />
      <rect x={63.5} y={60.89} width={1} height={26.16} fill="#FAFAFA" />
      <path
        d="m36.06 83.17h-1v-10.67h-8.6s0.32-0.41 0.41-0.5c0.34-0.35 0.5-0.5 0.5-0.5h8.69v11.67z"
        fill="#FAFAFA"
      />
      <path
        d="m91.92 83.18h1v-10.66h8.46s-0.32-0.41-0.41-0.5c-0.34-0.35-0.5-0.5-0.5-0.5h-8.56v11.66z"
        fill="#FAFAFA"
      />
      <path
        d="m47.72 84.75c-0.1-0.51-0.18-1.03-0.18-1.57 0-6.27 7.38-11.38 16.46-11.38s16.46 5.1 16.46 11.38c0 0.53-0.07 1.05-0.18 1.57h1.02c0.09-0.51 0.16-1.04 0.16-1.57 0-6.82-7.83-12.38-17.46-12.38s-17.46 5.55-17.46 12.38c0 0.53 0.06 1.05 0.16 1.57h1.02z"
        fill="#FAFAFA"
      />
      <g opacity={0.2}>
        <path
          d="m63.92 60.89c-22.12 0-40.06 8.06-40.06 18 0 0.15 0.02 0.3 0.03 0.44h2.01c-0.01-0.15-0.03-0.3-0.03-0.44 0-7.73 15.29-16 38.06-16 22.76 0 38.06 8.27 38.06 16 0 0.48-0.06 0.96-0.18 1.44h2.04c0.08-0.48 0.14-0.96 0.14-1.44-0.02-9.94-17.95-18-40.07-18z"
          fill="#424242"
        />
      </g>
      <defs>
        <ellipse id="k" cx={63.87} cy={58.89} rx={56.62} ry={26} />
      </defs>
      <clipPath>
        <use xlinkHref="#k" />
      </clipPath>
      <linearGradient
        id="j"
        x1={64}
        x2={64}
        y1={32.083}
        y2={78.235}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DD2C00" offset={0} />
        <stop stopColor="#E03306" offset={0.0704} />
        <stop stopColor="#F15326" offset={0.4566} />
        <stop stopColor="#FB6739" offset={0.7803} />
        <stop stopColor="#FF6E40" offset={1} />
      </linearGradient>
      <path
        d="m64 32.08c-33.14 0-60 11.64-60 26 0 7.79 7.91 14.77 20.42 19.53-10.58-4.72-17.17-11.32-17.17-18.64 0-14.36 25.35-26 56.62-26s56.62 11.64 56.62 26c0 7.64-7.17 14.5-18.59 19.26 13.49-4.76 22.1-12.02 22.1-20.15 0-14.36-26.86-26-60-26z"
        fill="url(#j)"
      />
      <g fill="#424242" opacity={0.2}>
        <path d="m121 70.6v29.12c-2.12 10.28-24.39 21.28-57.08 21.28-32.59 0-54.8-11.02-56.92-21.33v-28.91c3.55 3.44 8.58 6.52 14.88 9.05 11.49 4.64 26.42 7.19 42.04 7.19s30.55-2.55 42.04-7.18c6.39-2.58 11.48-5.72 15.04-9.22m3-11.91-0.19 1.31c-2.36 13.42-28.26 24-59.89 24s-57.53-10.58-59.89-24l-0.03-1.11v41.07c2.36 13.42 28.29 24.04 59.92 24.04s57.72-10.58 60.08-24v-41.31zm-0.19 1.31zm-119.78 0z" />
        <path d="m4 58zm0 0.01c0 0.36 0.02 0.71 0.06 1.06-0.03-0.36-0.06-0.71-0.06-1.06z" />
        <path d="m124 58zm0 0.01c0 0.36-0.03 0.71-0.06 1.06 0.04-0.36 0.06-0.71 0.06-1.06z" />
      </g>
      <path
        d="m64 110.07c-25.83-0.02-50.54-9.55-60-19.6v4.06c10.74 9.36 34.06 18.45 60 18.47 25.94-0.02 49.26-9.1 60-18.47v-4.06c-9.46 10.05-34.17 19.58-60 19.6z"
        fill="#BDBDBD"
        opacity={0.5}
      />
      <path
        d="m64 98.34c-25.83-0.02-50.54-9.55-60-19.6v4.06c10.74 9.36 34.06 18.45 60 18.47 25.94-0.02 49.26-9.1 60-18.47v-4.06c-9.46 10.05-34.17 19.58-60 19.6z"
        fill="#BDBDBD"
        opacity={0.5}
      />
      <radialGradient
        id="i"
        cx={64}
        cy={73.253}
        r={43.689}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6E40" offset={0} />
        <stop stopColor="#FE6C3E" offset={0.4889} />
        <stop stopColor="#FB6538" offset={0.665} />
        <stop stopColor="#F45A2C" offset={0.7905} />
        <stop stopColor="#EC491C" offset={0.892} />
        <stop stopColor="#E13307" offset={0.9779} />
        <stop stopColor="#DD2C00" offset={1} />
      </radialGradient>
      <path
        d="m123.81 60c-2.36 13.42-28.26 24-59.89 24-31.59 0-57.47-10.55-59.88-23.95l-0.04-1.16v2.77 0.33c0 14.36 26.73 26 59.92 26 33.14 0 60.01-11.61 60.08-25.95v-3.55c0.01 0.14-0.19 1.52-0.19 1.51z"
        fill="url(#i)"
      />
      <path
        d="m76 123.47s-6.71 0.54-12.08 0.53c-9.34-0.03-11.92-0.51-11.92-0.51v-15.49c0-6.63 5.37-12 12-12s12 5.37 12 12v15.47z"
        fill="#455A64"
      />
      <path
        d="m119 94.57h-2c-0.55 0-1-0.45-1-1v-6c0-0.55 0.45-1 1-1h2c0.55 0 1 0.45 1 1v6c0 0.55-0.45 1-1 1z"
        fill="#546E7A"
      />
      <path
        d="m108.33 100.82h-2c-0.55 0-1-0.45-1-1v-6c0-0.55 0.45-1 1-1h2c0.55 0 1 0.45 1 1v6c0 0.55-0.44 1-1 1z"
        fill="#546E7A"
      />
      <path
        d="m97.67 104.49h-2c-0.55 0-1-0.45-1-1v-6c0-0.55 0.45-1 1-1h2c0.55 0 1 0.45 1 1v6c0 0.55-0.45 1-1 1z"
        fill="#546E7A"
      />
      <path
        d="m87 107h-2c-0.55 0-1-0.45-1-1v-6c0-0.55 0.45-1 1-1h2c0.55 0 1 0.45 1 1v6c0 0.55-0.45 1-1 1z"
        fill="#546E7A"
      />
      <path
        d="m9 94.57h2c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1z"
        fill="#546E7A"
      />
      <path
        d="m19.67 100.82h2c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v6c0 0.55 0.44 1 1 1z"
        fill="#546E7A"
      />
      <path
        d="m30.33 104.49h2c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1z"
        fill="#546E7A"
      />
      <path
        d="m41 107h2c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1z"
        fill="#546E7A"
      />
      <linearGradient
        id="h"
        x1={31}
        x2={31}
        y1={4.375}
        y2={27.923}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9E9E9E" offset={0} />
        <stop stopColor="#616161" offset={1} />
      </linearGradient>
      <path
        d="m46 26h-30c-2.21 0-4-1.79-4-4v-14c0-2.21 1.79-4 4-4h30c2.21 0 4 1.79 4 4v14c0 2.21-1.79 4-4 4z"
        fill="url(#h)"
      />
      <circle cx={19} cy={10.5} r={3.5} fill="#ff0" />
      <path
        d="m19 7.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <circle cx={19} cy={19.5} r={3.5} fill="#ff0" />
      <path
        d="m19 16.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <circle cx={27} cy={10.5} r={3.5} fill="#ff0" />
      <path
        d="m27 7.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <circle cx={27} cy={19.5} r={3.5} fill="#ff0" />
      <path
        d="m27 16.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <circle cx={35} cy={10.5} r={3.5} fill="#ff0" />
      <path
        d="m35 7.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <circle cx={35} cy={19.5} r={3.5} fill="#ff0" />
      <path
        d="m35 16.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <circle cx={43} cy={10.5} r={3.5} fill="#ff0" />
      <path
        d="m43 7.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <circle cx={43} cy={19.5} r={3.5} fill="#ff0" />
      <path
        d="m43 16.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <linearGradient
        id="g"
        x1={97}
        x2={97}
        y1={4.375}
        y2={27.923}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9E9E9E" offset={0} />
        <stop stopColor="#616161" offset={1} />
      </linearGradient>
      <path
        d="m112 26h-30c-2.21 0-4-1.79-4-4v-14c0-2.21 1.79-4 4-4h30c2.21 0 4 1.79 4 4v14c0 2.21-1.79 4-4 4z"
        fill="url(#g)"
      />
      <circle cx={85} cy={10.5} r={3.5} fill="#ff0" />
      <path
        d="m85 7.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <circle cx={85} cy={19.5} r={3.5} fill="#ff0" />
      <path
        d="m85 16.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <circle cx={93} cy={10.5} r={3.5} fill="#ff0" />
      <path
        d="m93 7.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <circle cx={93} cy={19.5} r={3.5} fill="#ff0" />
      <path
        d="m93 16.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <circle cx={101} cy={10.5} r={3.5} fill="#ff0" />
      <path
        d="m101 7.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <circle cx={101} cy={19.5} r={3.5} fill="#ff0" />
      <path
        d="m101 16.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <circle cx={109} cy={10.5} r={3.5} fill="#ff0" />
      <path
        d="m109 7.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <circle cx={109} cy={19.5} r={3.5} fill="#ff0" />
      <path
        d="m109 16.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#9E9E9E"
      />
      <g opacity={0.2}>
        <path
          d="m64 98c5.51 0 10 4.49 10 10v13.61c-2.3 0.15-6.37 0.39-9.86 0.39h-0.22c-5.21-0.01-8.27-0.18-9.92-0.31v-13.69c0-5.51 4.49-10 10-10m0-2c-6.63 0-12 5.37-12 12v15.49s2.58 0.49 11.92 0.51h0.22c5.34 0 11.86-0.53 11.86-0.53v-15.47c0-6.63-5.37-12-12-12z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m119 87.57v6h-2v-6h2m0-1h-2c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m108.33 93.82v6h-2v-6h2m0-1h-2c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-6c0-0.55-0.44-1-1-1z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m97.67 97.49v6h-2v-6h2m0-1h-2c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-6c0-0.56-0.45-1-1-1z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m87 100v6h-2v-6h2m0-1h-2c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m11 87.57v6h-2v-6h2m0-1h-2c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m21.67 93.82v6h-2v-6h2m0-1h-2c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m32.33 97.49v6h-2v-6h2m0-1h-2c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-6c0-0.56-0.44-1-1-1z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m43 100v6h-2v-6h2m0-1h-2c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m46 6c1.1 0 2 0.9 2 2v14c0 1.1-0.9 2-2 2h-30c-1.1 0-2-0.9-2-2v-14c0-1.1 0.9-2 2-2h30m0-2h-30c-2.21 0-4 1.79-4 4v14c0 2.21 1.79 4 4 4h30c2.21 0 4-1.79 4-4v-14c0-2.21-1.79-4-4-4z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m112 6c1.1 0 2 0.9 2 2v14c0 1.1-0.9 2-2 2h-30c-1.1 0-2-0.9-2-2v-14c0-1.1 0.9-2 2-2h30m0-2h-30c-2.21 0-4 1.79-4 4v14c0 2.21 1.79 4 4 4h30c2.21 0 4-1.79 4-4v-14c0-2.21-1.79-4-4-4z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default Stadium;
