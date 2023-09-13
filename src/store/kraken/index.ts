import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { produce } from 'immer'

import { theme as purpleTheme } from 'themes/purple'

import { IKrakenStore } from './types'

const initialState = purpleTheme

export const useKrakenStore = create<IKrakenStore>()(
  persist(
    set => ({
      ...initialState,

      updateLayout: values => {
        set(
          produce((state: IKrakenStore) => ({
            ...state,
            ...values,
          })),
        )
      },
    }),

    { name: 'nzxt-kraken', version: 0 },
  ),
)
