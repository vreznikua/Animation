import React from 'react'

const SvgComponent = (changeText) => (
  <svg className="image image--svg" width={686} height={91}>
    <defs>
      <path id="prefix__b" d="M0 0h680v30H0z" />
      <path
        d="M0 1.991C0 .891.896 0 2 0h47c1.105 0 2 .89 2 1.991V20.01c0 1.1-.896 1.991-2 1.991H2c-1.105 0-2-.89-2-1.991V1.99z"
        id="prefix__d"
      />
      <path
        d="M4.333 2c2.4 0 4.334 1.933 4.334 4.333 0 2.4-1.934 4.334-4.334 4.334A4.325 4.325 0 010 6.333h.667c0 2 1.666 3.667 3.666 3.667S8 8.333 8 6.333c0-2-1.667-3.666-3.667-3.666v2L1.667 2.333 4.333 0v2z"
        id="prefix__e"
      />
      <path
        d="M6.267.933L5.333 0 4.4.933 0 5.067l.827.82.506-.554V10h8V5.567l.543.444.79-.944-4.4-4.134zm.066 8.4V6h-2v3.333H2V4.667L5.333 1.8l3.334 3.1v4.433H6.333z"
        id="prefix__g"
      />
      <path
        d="M4.333 2V0L7 2.333 4.333 4.667v-2c-2 0-3.666 1.666-3.666 3.666S2.333 10 4.333 10 8 8.333 8 6.333h.667c0 2.4-1.934 4.334-4.334 4.334A4.325 4.325 0 010 6.333C0 3.933 1.933 2 4.333 2z"
        id="prefix__i"
      />
      <path
        d="M3.7 3L5.85.85c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L3 2.3.85.15c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L2.3 3 .15 5.15c-.2.2-.2.5 0 .7.1.1.2.15.35.15.15 0 .25-.05.35-.15L3 3.7l2.15 2.15c.1.1.25.15.35.15.1 0 .25-.05.35-.15.2-.2.2-.5 0-.7L3.7 3z"
        id="prefix__k"
      />
      <path
        d="M5.333 4h3.334a.667.667 0 010 1.333H5.333v3.334a.667.667 0 11-1.333 0V5.333H.667A.667.667 0 11.667 4H4V.667a.667.667 0 111.333 0V4z"
        id="prefix__m"
      />
      <filter
        x="-.7%"
        y="-13.3%"
        width="101.5%"
        height="133.3%"
        filterUnits="objectBoundingBox"
        id="prefix__a"
      >
        <feMorphology
          radius={0.5}
          operator="dilate"
          in="SourceAlpha"
          result="shadowSpreadOuter1"
        />
        <feOffset dy={1} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={1}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0.129411765 0 0 0 0 0.152941176 0 0 0 0 0.211764706 0 0 0 0.16 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feOffset in="SourceAlpha" result="shadowOffsetOuter2" />
        <feGaussianBlur
          stdDeviation={0.5}
          in="shadowOffsetOuter2"
          result="shadowBlurOuter2"
        />
        <feColorMatrix
          values="0 0 0 0 0.129411765 0 0 0 0 0.152941176 0 0 0 0 0.211764706 0 0 0 0.04 0"
          in="shadowBlurOuter2"
          result="shadowMatrixOuter2"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="shadowMatrixOuter2" />
        </feMerge>
      </filter>
      <filter
        x="-1%"
        y="-2.3%"
        width="102%"
        height="109.1%"
        filterUnits="objectBoundingBox"
        id="prefix__c"
      >
        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feColorMatrix
          values="0 0 0 0 0.0862745098 0 0 0 0 0.356862745 0 0 0 0 0.984313725 0 0 0 0.32 0"
          in="shadowOffsetOuter1"
        />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(3 57)">
        <use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
        <use fill="#FFF" xlinkHref="#prefix__b" />
        <g transform="translate(623 4)">
          <use fill="#000" filter="url(#prefix__c)" xlinkHref="#prefix__d" />
          <use fill="#165BFB" xlinkHref="#prefix__d" />
        </g>
        <text
          fontSize={10}
          fill="#FFF"
          transform="translate(623 4)"
        >
          <tspan x={8.256} y={13}>
            {'Publish'}
          </tspan>
        </text>
        <g transform="translate(579 9.667)">
          <mask id="prefix__f" fill="#fff">
            <use xlinkHref="#prefix__e" />
          </mask>
          <use fill="#464C5C" fillRule="nonzero" xlinkHref="#prefix__e" />
          <g mask="url(#prefix__f)" fill="#9199AB">
            <path d="M-3.333-2.667h15.876V13.21H-3.333z" />
          </g>
        </g>
        <g transform="translate(121.667 9.667)">
          <mask id="prefix__h" fill="#fff">
            <use xlinkHref="#prefix__g" />
          </mask>
          <use fill="#464C5C" fillRule="nonzero" xlinkHref="#prefix__g" />
          <g mask="url(#prefix__h)" fill="#646E82">
            <path d="M-2.667-3.333H13.21v15.876H-2.667z" />
          </g>
        </g>
        <g transform="translate(598.333 9.667)">
          <mask id="prefix__j" fill="#fff">
            <use xlinkHref="#prefix__i" />
          </mask>
          <use fill="#464C5C" fillRule="nonzero" xlinkHref="#prefix__i" />
          <g mask="url(#prefix__j)" fill="#9199AB">
            <path d="M-3.333-2.667h15.876V13.21H-3.333z" />
          </g>
        </g>
        <image
          x={8}
          y={8}
          width={24}
          height={14}
          xlinkHref="data:image/png;base64,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"
        />
        <path fill="#EDF0F5" d="M40 0h1v30h-1z" />
        <text

          fontSize={10}
          fill="#000"
        >
          <tspan x={53} y={19}>
            {'Radio station'}
          </tspan>
        </text>
        <text

          fontSize={10}
          fill="#000"
        >
          <tspan x={519.47} y={19}>
            {'Site style'}
          </tspan>
        </text>
      </g>
      <g transform="translate(3)">
        <path d="M6 0h668a6 6 0 016 6v51H0V6a6 6 0 016-6z" fill="#646E82" />
        <g transform="translate(42 10)">
          <rect fill="#FFF" fillRule="nonzero" width={16} height={16} rx={3} />
          <image
            x={1}
            y={4}
            width={14}
            height={8}
            xlinkHref="data:image/png;base64,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"
          />
        </g>
        <text
          fontSize={10}
          fontWeight={300}
          fill="#EDF0F5"
          transform="translate(42 10)"
        >
          <tspan x={20} y={12}>
            {'Weblium Editor'}
          </tspan>
        </text>
        <g transform="translate(157 13)">
          <mask id="prefix__l" fill="#fff">
            <use xlinkHref="#prefix__k" />
          </mask>
          <use fill="#464C5C" fillRule="nonzero" xlinkHref="#prefix__k" />
          <g mask="url(#prefix__l)" fill="#C5CBD6">
            <path d="M-3-3H9V9H-3z" />
          </g>
        </g>
        <path fill="#C5CBD6" fillRule="nonzero" d="M54.904 38.5v4.154H50.75z" />
        <path
          d="M52.679 40.584a3.808 3.808 0 10-2.62 6.57h-.001a3.81 3.81 0 003.568-2.476"
          stroke="#C5CBD6"
          strokeWidth={1.385}
          strokeLinecap="round"
        />
        <g
          strokeWidth={1.364}
          stroke="#C5CBD6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M26.25 42.83h7.5M30.34 46.485l3.41-3.618-3.41-3.617" />
        </g>
        <g
          strokeWidth={1.364}
          stroke="#C5CBD6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.75 42.83h-7.5M13.66 46.485l-3.41-3.618 3.41-3.617" />
        </g>
        <path
          d="M90 33h556c5.523 0 10 4.477 10 10s-4.477 10-10 10H90c-5.523 0-10-4.477-10-10s4.477-10 10-10z"
          fill="#464C5C"
          fillRule="nonzero"
        />
        <path
          d="M677 0H3a3 3 0 00-3 3v26h21.846a7 7 0 006.207-3.764l9.455-18.134a6 6 0 015.32-3.226h121.278a6 6 0 015.32 3.226l9.455 18.134A7 7 0 00185.088 29H680V3a3 3 0 00-3-3z"
          fill="#212736"
          fillRule="nonzero"
        />
        <circle fill="#EDF0F5" cx={10} cy={15} r={2} />
        <circle fill="#EDF0F5" cx={16} cy={15} r={2} />
        <circle fill="#EDF0F5" cx={22} cy={15} r={2} />
        <g>
          <g transform="translate(183.333 11.333)">
            <mask id="prefix__n" fill="#fff">
              <use xlinkHref="#prefix__m" />
            </mask>
            <use fill="#F2F4F7" xlinkHref="#prefix__m" />
            <g mask="url(#prefix__n)" fill="#9199AB">
              <path d="M-3.333-3.333h15.876v15.876H-3.333z" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default SvgComponent
