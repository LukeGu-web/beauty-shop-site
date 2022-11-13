import { useState, useEffect } from 'react'

type windowSizeProps = {
  width: number
  height: number
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<windowSizeProps>({
    width: -1,
    height: -1,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

export default useWindowSize
