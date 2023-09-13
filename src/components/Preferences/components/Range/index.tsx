import { IRangeProps } from './types'

import { Container } from './styles'
import React from 'react'

export const Range = ({ label, ...props }: IRangeProps) => {
  const [value, setValue] = React.useState<number>(props.value ?? 0)

  React.useEffect(() => {
    setValue(props.value ?? 0)
  }, [props.value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as unknown as number
    setValue(value)

    if (props.onChange) props.onChange(event)
  }

  return (
    <Container>
      {label && <div className="label">{label}</div>}

      <div className="input">
        <input
          type="range"
          value={value}
          min={0}
          max={1}
          step={0.001}
          style={{ backgroundSize: `${2 * (value * 100)}%` }}
          onChange={handleChange}
        />
        <span>{Math.round(value * 100)}%</span>
      </div>
    </Container>
  )
}
