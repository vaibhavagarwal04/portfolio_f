import React, { useEffect, useState } from 'react'
import './CrazyLoader.css'

export function CrazyLoader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2800)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="elegant-loader-container">
      <div className="loader-content">
        {/* Gradient orb */}
        <div className="orb"></div>

        {/* Rotating ring */}
        <div className="rotating-ring"></div>

        {/* Secondary ring */}
        <div className="secondary-ring"></div>

        {/* Center dot */}
        <div className="center-dot"></div>

        {/* Text */}
        <div className="loader-text">
          <div className="brand-name">Vaibhav Agarwal</div>
          <div className="loading-text">Initializing Portfolio</div>
        </div>

        {/* Progress indicator */}
        <div className="progress-container">
          <div className="progress-line"></div>
          <div className="progress-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
