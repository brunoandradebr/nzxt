import { clampValue } from 'utils/utils'

import { IProgressProps } from './types'
import { Container } from './styles'

export const Progress = (props: IProgressProps) => {
  const lineWidth = props.lineWidth ?? 12
  const thumbLineWidth = lineWidth
  const leftValue = props.leftValue ?? 0
  const rightValue = props.rightValue ?? 0
  const size = props.size ?? 150
  const radius = size * 0.5 - lineWidth / 2
  const circumference = radius * 2 * Math.PI

  const clampedLeftValue = clampValue(leftValue * 0.5, 0, 100 * 2, circumference, 0)
  const clampedRightValue = clampValue(rightValue * 0.5, 0, 100 * 2, circumference, 0)

  return (
    <Container>
      <svg width={`${size}px`} height={`${size}px`}>
        <defs>
          <linearGradient x1="50%" y1="100%" x2="0%" y2="0%" id="gradient-left">
            <stop
              stopColor={props.leftColor ?? '#000'}
              stopOpacity="1"
              offset="26%"
            ></stop>
            <stop stopColor="rgba(0,0,0,.1)" offset="65%"></stop>
          </linearGradient>
          <linearGradient x1="50%" y1="100%" x2="0%" y2="0%" id="gradient-right">
            <stop
              stopColor={props.rightColor ?? '#fff'}
              stopOpacity="1"
              offset="26%"
            ></stop>
            <stop stopColor="rgba(0,0,0,.1)" offset="65%"></stop>
          </linearGradient>
        </defs>

        <circle
          className="ring-background"
          cx={'50%'}
          cy={'50%'}
          r={`${radius}px`}
          strokeWidth={`${lineWidth}px`}
          stroke={props.background ?? '#161616'}
        />

        <g className="ring-thumb-left">
          <circle
            cx={'50%'}
            cy={'50%'}
            r={`${radius}px`}
            strokeWidth={`${thumbLineWidth}px`}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={clampedLeftValue}
            stroke="url(#gradient-left)"
          />
          <circle
            cx={'50%'}
            cy={'50%'}
            r={`${radius}px`}
            strokeWidth={`${thumbLineWidth}px`}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={clampedLeftValue}
            stroke="url(#gradient-left)"
          />
        </g>

        <g className="ring-thumb-right">
          <circle
            cx={'50%'}
            cy={'50%'}
            r={`${radius}px`}
            strokeWidth={`${thumbLineWidth}px`}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={clampedRightValue}
            stroke="url(#gradient-right)"
          />
          <circle
            cx={'50%'}
            cy={'50%'}
            r={`${radius}px`}
            strokeWidth={`${thumbLineWidth}px`}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={clampedRightValue}
            stroke="url(#gradient-right)"
          />
        </g>

        <foreignObject>
          <div className="ring-content">{props.children}</div>
        </foreignObject>
      </svg>
    </Container>
  )
}
