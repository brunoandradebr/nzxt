import React from 'react'

import { createGlobalStyle } from 'styled-components'

import { usePreferencesStore } from 'store/preferences'
import { useKrakenStore } from 'store/kraken'

import { Preferences } from 'components/Preferences'
import { DualMonitor } from 'components/DualMonitor'

import minecraft from 'fonts/Minecraft.ttf'

export const GlobalStyles = createGlobalStyle`
  
  @font-face {
    font-family: 'Minecraft';
    src: local('Minecraft'), url(${minecraft}) format('truetype');
  }

  :root {
    --primary-color: #6f12e1;
    --primary-color-hover: #882df7;
    --secondary-color: #8d8d8d;
    --secondary-color-hover: #aaaaaa;
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
    
    font-family: 'Staatliches', sans-serif;
    font-family: 'Pixelify Sans', sans-serif;
    font-family: 'Segoe UI';
    font-family: 'Minecraft';
    
    font-size: 5vw;
  }

  input[type=text] {
    outline: none;
    padding: 5px;
    border-radius: 3px;
    color: var(--text-primary-color);
    background-color: var(--background-contrast-color);
    border: 1px solid var(--background-contrast-lighter-color);

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }

  select {
    color: var(--text-primary-color);
    background-color: var(--background-contrast-color);
    border: 2px solid var(--background-contrast-lighter-color);
    padding: 5px 10px;
    border-radius: 8px;
  }

  button {
    cursor: pointer;
    border: none;
    padding: 10px;
    border-radius: 8px;
    color: #fff;
    background-color: var(--primary-color);
    transition: all 0.2s;

    &:hover {
      background-color: var(--primary-color-hover);
    }

    &:disabled {
      cursor: initial;
      color: var(--background-contrast-color);
      background-color: var(--background-contrast-light-color);
    }

    &[data-secondary] {
      background-color: var(--secondary-color);
      
      &:hover {
        background-color: var(--secondary-color-hover);
      }

    }

  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {inKraken ? <DualMonitor /> : <Preferences />}
      <GlobalStyles />
    </>
  )
}

export default App
