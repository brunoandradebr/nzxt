export interface ICpu {
  name?: string
  load?: number
  tempeture?: number
  maxTempeture?: number
  frequency?: number
}

export interface IGpu {
  name?: string
  load?: number
  tempeture?: number
  maxTempeture?: number
  frequency?: number
}

export interface IRam {
  inUse?: number
  inUsePercent?: number
  totalSize?: number
}
