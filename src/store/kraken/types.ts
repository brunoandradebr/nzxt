import { IPreferenceModule } from 'store/preferences/types'

interface IKrakenActions {
  updateLayout: (value: IPreferenceModule) => void
}

export interface IKrakenStore extends IPreferenceModule, IKrakenActions {}
