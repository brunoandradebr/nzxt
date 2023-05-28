import { DualMonitor } from 'components/DualMonitor'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  
  html {
    font-size: 62.5%
  }

  body {
    margin: 0;
    padding: 0;
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
