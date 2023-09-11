import React from 'react'

import { createGlobalStyle } from 'styled-components'

import { usePreferencesStore } from 'store/preferences'

import { Preferences } from 'components/Preferences'
import { DualMonitor } from 'components/DualMonitor'

export const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%
  }

  body {
    background-color: #191a1c;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 5vw;
}
`

function App() {
  const inKraken = window.location.search.includes('kraken=1')

  const preferencesStore = usePreferencesStore()

  React.useEffect(() => {
    window.addEventListener('storage', event => {
      const { state } = JSON.parse(event.newValue as string)

      preferencesStore.updateAllModules(state)
    })
  }, [])

  return (
    <>
      {inKraken ? <DualMonitor /> : <Preferences />}
      <GlobalStyles />
    </>
  )
}

export default App
