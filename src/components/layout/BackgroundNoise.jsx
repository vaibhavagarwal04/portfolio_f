import { useEffect } from 'react'

export function BackgroundNoise() {
  useEffect(() => {
    const el = document.createElement('div')
    el.className = 'bg-noise'
    document.body.appendChild(el)
    return () => {
      document.body.removeChild(el)
    }
  }, [])
  return null
}
