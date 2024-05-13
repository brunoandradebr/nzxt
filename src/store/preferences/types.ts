export type TModuleProperties = {
  color: string
  alpha: number
  size?: number
  font?: string
}

export type TBlendMode =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity'

export type TGifModuleProperties = {
  url?: string
  alpha?: number
  size?: number
  brightness?: number
  contrast?: number
  blur?: number
  blend?: TBlendMode
}

export interface IModules {
  leftCircleStart: TModuleProperties
  leftCircleEnd: TModuleProperties
  rightCircleStart: TModuleProperties
  rightCircleEnd: TModuleProperties
  circleBackground: TModuleProperties
  cpuIcon: TModuleProperties
  gpuIcon: TModuleProperties
  temperatureIcon: TModuleProperties
  loadIcon: TModuleProperties
  text: TModuleProperties
  background: TModuleProperties
  separator: TModuleProperties
  cpuLabel: TModuleProperties
  gpuLabel: TModuleProperties
}

export interface IPreferenceModule extends IModules {
  gif: TGifModuleProperties
}

interface IPreferenceActions {
  updateModule: (module: keyof IModules, properties: Partial<TModuleProperties>) => void
  updateGif: (properties: TGifModuleProperties) => void
  removeGif: () => void
  discardChanges: () => void
  changeTheme: (theme: string) => void
  saveTheme: () => void
}

export interface IPreferencesStore extends IPreferenceActions {
  current: IPreferenceModule
  lastUsedTheme: string
  themes: Record<string, IPreferenceModule>
}
