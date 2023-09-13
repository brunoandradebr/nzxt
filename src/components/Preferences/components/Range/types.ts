export interface IRangeProps
  extends Pick<React.ComponentPropsWithRef<'input'>, 'onChange'> {
  value?: number
  label?: string
}
