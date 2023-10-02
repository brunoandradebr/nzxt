import React from 'react'

import { useDebounce } from 'hooks'

import { IRangeProps } from './types'

import { Container } from './styles'

export const Range = ({ label, ...props }: IRangeProps) => {
  const [value, setValue] = React.useState<number>(props.value ?? 0)
  const debouncedValue = useDebounce(value, 200)

  React.useEffect(() => {
    setValue(props.value ?? 0)
  }, [props.value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as unknown as number
    setValue(value)
  }

  React.useEffect(() => {
    if (debouncedValue) {
      if (props.onChange) props.onChange(debouncedValue as number)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

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
