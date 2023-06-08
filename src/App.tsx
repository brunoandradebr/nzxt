import { createGlobalStyle } from 'styled-components'

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
    background-color: black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.6rem;
}
`

function App() {
  return (
    <>
      <DualMonitor />
      <GlobalStyles />
    </>
  )
}

export default App
