export interface IPreferenceModule {
  leftColor: string
  rightColor: string
  circleBackground: string
  cpuColor: string
  gpuColor: string
  tempetureColor: string
  loadColor: string
  textColor: string
  backgroundColor: string
}

interface IPreferenceActions {
  updateModule: (module: keyof IPreferenceModule, value: string) => void
  updateAllModules: (value: IPreferenceModule) => void
  reset: () => void
}

export interface IPreferencesStore extends IPreferenceModule, IPreferenceActions {}
