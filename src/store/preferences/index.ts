import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { produce } from 'immer'

import { purpleTheme } from 'themes'

import { IPreferencesStore, TGifModuleProperties } from './types'

const initialState = purpleTheme

export const usePreferencesStore = create<IPreferencesStore>()(
  persist(
    set => ({
      current: { ...initialState },

      lastUsedTheme: 'purple',

      themes: {
        purple: purpleTheme,
        user: initialState,
      },

      updateModule: (module, value) => {
        set(
          produce((state: IPreferencesStore) => {
            state.current[module] = value
          }),
        )
      },

      updateGif: (properties: TGifModuleProperties) => {
        set(
          produce((state: IPreferencesStore) => {
            state.current.gif = { ...state.current.gif, ...properties }
          }),
        )
      },

      changeTheme: theme => {
        set(
          produce((state: IPreferencesStore) => {
            state.current = { ...state.themes[theme] }
            state.lastUsedTheme = theme
          }),
        )
      },

      saveTheme: () => {
        set(
          produce((state: IPreferencesStore) => {
            state.themes.user = { ...state.current }
            state.lastUsedTheme = 'user'
          }),
        )
      },

      discardChanges: () => {
        set(
          produce((state: IPreferencesStore) => {
            state.current = { ...state.themes[state.lastUsedTheme] }
          }),
        )
      },
    }),

    { name: 'nzxt-preferences', version: 2 },
  ),
)
