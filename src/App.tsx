import React from 'react'

import { createGlobalStyle } from 'styled-components'

import { usePreferencesStore } from 'store/preferences'
import { useKrakenStore } from 'store/kraken'

import { Preferences } from 'components/Preferences'
import { DualMonitor } from 'components/DualMonitor'

export const GlobalStyles = createGlobalStyle`

  :root {
    --primary-color: #6f12e1;
    --primary-color-hover: #882df7;
    --text-primary-color: #ffffff;
    --text-secondary-color: #58575a;
    --text-accent-color: #b476ff;
    --background-color: #191a1c;
    --background-contrast-dark-color: #0b0c0c;
    --background-contrast-color: #545252;
    --background-contrast-light-color: #282828;
    --background-contrast-lighter-color: #333333;
  }

  * {
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%
  }

  body {
    background-color: var(--background-color);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 5vw;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: var(--background-contrast-light-color);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--background-contrast-color);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
  }

`

function App() {
  const inKraken = window.location.search.includes('kraken=1')

  const preferencesStore = usePreferencesStore()
  const krakenStore = useKrakenStore()

  React.useEffect(() => {
    if (inKraken === false) {
      if (!window.location.search)
        window.location.replace(`?no-cache=${crypto.randomUUID()}`)
    }

    preferencesStore.changeTheme(preferencesStore.lastUsedTheme)

    const handleKrakenChange = (event: StorageEvent) => {
      if (event.key === 'nzxt-preferences') {
        const { state } = JSON.parse(event.newValue as string)
        krakenStore.updateLayout(state.current)
      }
    }

    window.addEventListener('storage', handleKrakenChange)

    return () => window.removeEventListener('storage', handleKrakenChange)
  }, [])

  return (
    <>
      {inKraken ? <DualMonitor /> : <Preferences />}
      <GlobalStyles />
    </>
  )
}

export default App
