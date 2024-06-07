import React from 'react'

export const useWindowSize = () => {
  const [width, setWidth] = React.useState(window.innerWidth)
  const [height, setHeight] = React.useState(window.innerHeight)

  React.useEffect(() => {
    const windowResizeHandler = (e: Event) => {
      const windowTarget = e.target as Window

      setWidth(windowTarget.innerWidth)
      setHeight(windowTarget.innerHeight)
    }

    window.addEventListener('resize', windowResizeHandler)

    return () => window.removeEventListener('resize', windowResizeHandler)
  }, [])

  return [width, height]
}
