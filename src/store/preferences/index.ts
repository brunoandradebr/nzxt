import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { produce } from 'immer'

import { purpleTheme, gifTheme, pixelTheme } from 'themes'

import { IPreferencesStore, TGifModuleProperties } from './types'

const initialState = purpleTheme

export const usePreferencesStore = create<IPreferencesStore>()(
  persist(
    set => ({
      current: { ...initialState },

      lastUsedTheme: 'purple',

      themes: {
        purple: purpleTheme,
        gif: gifTheme,
        pixel: pixelTheme,
        user: initialState,
      },

      updateModule: (module, properties) => {
        set(
          produce((state: IPreferencesStore) => {
            state.current[module] = { ...state.current[module], ...properties }
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

      removeGif: () => {
        set(
          produce((state: IPreferencesStore) => {
            state.current.gif = {
              url: '',
              blend: 'normal',
              size: 0.2,
              blur: 0,
              brightness: 0.5,
              contrast: 0.5,
              alpha: 1,
            }
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

    {
      name: 'nzxt-preferences',
      version: 10,
      merge(persistedState, currentState) {
        return { ...currentState, ...(persistedState as object) }
      },
    },
  ),
)
