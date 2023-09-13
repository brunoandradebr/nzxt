export type TModuleProperties = {
  color: string
  alpha: number
}

export interface IPreferenceModule {
  leftCircleStart: TModuleProperties
  leftCircleEnd: TModuleProperties
  rightCircleStart: TModuleProperties
  rightCircleEnd: TModuleProperties
  circleBackground: TModuleProperties
  cpuIcon: TModuleProperties
  gpuIcon: TModuleProperties
  tempetureIcon: TModuleProperties
  loadIcon: TModuleProperties
  text: TModuleProperties
  background: TModuleProperties
  separator: TModuleProperties
}

interface IPreferenceActions {
  updateModule: (module: keyof IPreferenceModule, properties: TModuleProperties) => void
  discardChanges: () => void
  changeTheme: (theme: string) => void
  saveTheme: () => void
}

export interface IPreferencesStore extends IPreferenceActions {
  current: IPreferenceModule
  lastUsedTheme: string
  themes: Record<string, IPreferenceModule>
}
