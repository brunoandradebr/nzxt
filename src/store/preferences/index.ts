import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { IPreferencesStore } from './types'

const initialState = {
  leftColor: '#8800ff',
  rightColor: '#00bbff',
  circleBackground: '#161616',
  cpuColor: '#ffffff',
  gpuColor: '#ffffff',
  tempetureColor: '#00e5ff',
  loadColor: '#00e5ff',
  textColor: '#ffffff',
  backgroundColor: '#000000',
}

export const usePreferencesStore = create<IPreferencesStore>()(
  persist(
    set => ({
      ...initialState,
      updateModule: (module, value) => set(state => ({ ...state, [module]: value })),
      updateAllModules: values => set(state => ({ ...state, ...values })),
      reset: () => set({ ...initialState }),
    }),
    { name: 'nzxt-preferences' },
  ),
)
