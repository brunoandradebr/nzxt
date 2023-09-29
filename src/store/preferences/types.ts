export type TModuleProperties = {
  color: string
  alpha: number
}

export type TGifModuleProperties = {
  url?: string
  alpha?: number
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
}

export interface IPreferenceModule extends IModules {
  gif: TGifModuleProperties
}

interface IPreferenceActions {
  updateModule: (module: keyof IModules, properties: TModuleProperties) => void
  updateGif: (properties: TGifModuleProperties) => void
  discardChanges: () => void
  changeTheme: (theme: string) => void
  saveTheme: () => void
}

export interface IPreferencesStore extends IPreferenceActions {
  current: IPreferenceModule
  lastUsedTheme: string
  themes: Record<string, IPreferenceModule>
}
