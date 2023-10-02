import React from 'react'

import { useDebounce } from 'hooks'

import { IColorPickerProps } from './types'

import { Container } from './styles'

export const ColorPicker = ({ label, ...props }: IColorPickerProps) => {
  const [value, setValue] = React.useState<string>(props.value ?? '#000000')
  const debouncedValue = useDebounce(value, 200)

  React.useEffect(() => {
    setValue(props.value ?? '#000000')
  }, [props.value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setValue(value)
  }

  React.useEffect(() => {
    if (debouncedValue) {
      if (props.onChange) props.onChange(debouncedValue as string)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  return (
    <Container>
      {label && <div className="label">{label}</div>}

      <div className="input">
        <input type="color" value={value} onChange={handleChange} />
      </div>
    </Container>
  )
}
